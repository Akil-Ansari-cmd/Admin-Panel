import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { MdEdit } from 'react-icons/md'
import { EditPlan } from '../Services/Admin Plan';
import { useFormik } from 'formik';

const PlanEdit = ({ item, DataApi }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    const handleClose = () => setOpen(false);

    const formik = useFormik({
        initialValues: {
            plan_id: item?.id || '',
            plan_type: item?.plan_type || "",
            plan_validity: item?.plan_validity || "",
            price: item?.price || "",

        },
        enableReinitialize: true,
        onSubmit: async (values) => {
            const response = await EditPlan(values);
            console.log("response", response);
            if (response?.data?.response_code === 200) {
                handleClose();
                DataApi();
                toast.success("Successfully Update");
            } else {
                toast.console.error("Invalid");

            }
        }
    })
    return (
        <div>
            <div onClick={handleOpen}><MdEdit className='w-8 h-5 text-xs rounded-md text-white bg-yellow-500' /></div>
            {open && (
                <div className='fixed bg-black bg-opacity-50 z-50 h-[100vh] left-0 w-[100%] inset-0 py-20'>
                    <div onClick={(e) => e.stopPropagation()} className='h-[100%] mx-auto w-[70%]'>
                        <form onSubmit={formik.handleSubmit} className='lg:h-[100%] h-[50%] text-black pl-10 m-auto w-[45vw] border rounded-md bg-white shadow-lg'>
                            <div className='font-semibold text-3xl mt-5 text-center text-black'>Edit Plan Details</div>
                            <div className='text-center text-black'>Brief outline of Plan's information</div>
                            <div className='grid grid-cols-2 gap-2'>
                                <div>
                                    <div className='text-gray-400'>Plan</div>
                                    <input
                                        name='plan_type'
                                        onChange={formik.handleChange}
                                        value={formik.values.plan_type}
                                        className='outline-none h-8 rounded-md border border-gray-400'
                                        type='text'
                                    />
                                </div>
                                <div>
                                    <div className='text-gray-400'>Validity</div>
                                    <input
                                        name='plan_validity'
                                        onChange={formik.handleChange}
                                        value={formik.values.plan_validity}
                                        className='outline-none h-8 rounded-md border border-gray-400'
                                        type='text'
                                    />
                                </div>
                                <div>
                                    <div className='text-gray-400'>Price</div>
                                    <input
                                        name='price'
                                        onChange={formik.handleChange}
                                        value={formik.values.price}
                                        className='outline-none h-8 rounded-md border border-gray-400'
                                        type='text'
                                    />
                                </div>
                            </div>
                            <div className='flex justify-end mt-5 gap-2'>
                                <div onClick={handleClose} className='border cursor-pointer border-red-500 text-red-500 w-28 h-9 py-1 rounded-md text-center'>Close</div>
                                <button type='submit' className='bg-red-600 text-white w-28 h-9 py-1 rounded-md text-center'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PlanEdit
