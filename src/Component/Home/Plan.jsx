import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { CiSquarePlus } from 'react-icons/ci';
import { AddPlan, GetPlan } from '../Services/Admin Plan';
import ModuleDelete from './ModuleDelete';
import ModuleUpdate from './ModuleUpdate';

const Plan = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);

    const handleOpen = () => setOpen(!open);
    const handleClose = () => setOpen(false);

    const AdminApi = async () => {
        const response = await GetPlan();
        console.log("Plan..........", response?.data);
        setData(response?.data?.data || []);  // Ensure data is always an array
    };

    useEffect(() => {
        AdminApi();
    }, []);

    const formik = useFormik({
        initialValues: {
            name: "",
        },
        enableReinitialize: true,
        onSubmit: async (values) => {
            console.log("first", values);
            const res = await AddPlan(values);
            console.log("hjghj", res);
            if (res?.data?.response_code === 200) {
                handleClose();
                AdminApi();
                formik.handleReset();
            }
        }
    });

    return (
        <div>
            <div>
                <div className='fixed top-20 right-5 z-50'>
                    <div onClick={handleOpen} className='flex justify-center items-center text-2xl bg-blue-500 text-white rounded-full w-12 h-12 cursor-pointer'>
                        <CiSquarePlus className='mt-1' />
                    </div>
                </div>
                {open && (
                    <div className='fixed bg-black bg-opacity-50 z-50 h-[100vh] left-0 w-[100%] inset-0 py-20'>
                        <div onClick={(e) => e.stopPropagation()} className='h-[100%] mx-auto w-[70%]'>
                            <form
                                onSubmit={formik.handleSubmit}
                                encType="multipart/form-data"
                                className='lg:h-[100%] h-[50%] pl-10 m-auto w-[45vw] border rounded-md bg-white shadow-lg'
                            >
                                <div className='font-semibold text-3xl mt-5 text-center'>Add Your Plan</div>
                                <div className='mt-10'>
                                    <input
                                        type='text'
                                        name="name"
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        className='border border-gray-300 rounded-md outline-none h-32'
                                        placeholder="Enter your plan name..."
                                    />
                                </div>
                                <div className='flex justify-end mt-5 gap-2'>
                                    <div onClick={handleClose} className='border cursor-pointer border-indigo-300 text-indigo-500 w-28 h-9 py-1 rounded-md text-center'>Close</div>
                                    <button
                                        type='submit'
                                        className='bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white w-28 h-9 py-1 rounded-md text-center'
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {data.map((i, index) => (
                    <div key={index} className=''>
                        <div className='h-48 border rounded-lg text-7xl flex justify-center items-center border-black'>
                            {i?.name}
                        </div>
                        <div className='flex justify-between mt-5'>
                            {/* Pass full 'data' array as allPlans */}
                            <div><ModuleUpdate i={i} DataApi={AdminApi} /></div>
                            <div><ModuleDelete i={i} DataApi={AdminApi} /></div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Plan;
