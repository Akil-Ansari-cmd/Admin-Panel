import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { BiSort } from 'react-icons/bi';
import { CiSquarePlus } from 'react-icons/ci';
import { GetPlan, Plan, PostPlan } from '../Services/Admin Plan';
import PlanDelete from './PlanDelete';
import PlanEdit from './PlanEdit';

const NewPlan = () => {
    // const location = useLocation();
    // const { state } = location; // state now contains all data
    // console.log("Received Data:", state);
    
    // const selectedPlan = state?.selectedPlan;  // The clicked plan
    // const allPlans = state?.allPlans;  // The full list of plans

    // console.log("allplans", allPlans);
    const [status, setStatus] = useState();
    const PlanApi = async () => {
            const response = await GetPlan();
            console.log("Planning..........", response?.data);
            setStatus(response?.data?.data || []);  // Ensure data is always an array
        };
    
        useEffect(() => {
            PlanApi();
        }, []);

    const [data, setData] = useState();

    const DataApi = async () => {
        try {
            const response = await Plan(); // Call the Plan function to fetch data
            console.log("module", response?.data)
            setData(response?.data?.data); // Set the data to the state
        } catch (error) {
            console.error("Error fetching plan data:", error);
        }
    };

    useEffect(() => {
        DataApi();
    }, []);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const handleClose = () => setOpen(false);

    const formik = useFormik({
        // initialValues: {
        //     planmodule: [], // Initializing with selected ID as an array
        //     plan_type: state?.plan_type || "",
        //     plan_validity: state?.plan_validity || "",
        //     price: state?.price || "",
        // },
        initialValues: {
            planmodule: [], // Initializing with selected ID as an array
            plan_type:"",
            plan_validity:"",
            price:"",
        },
        enableReinitialize: true,
        onSubmit: async(values) => {
            const response = await PostPlan(values);
            console.log("response", response);
                if (response?.data?.response_code === 200) {
                    handleClose();
                    DataApi();
                    toast.success("Successfully Update");
                } else {
                    toast.console.error("Invalid");
    
                } 
        },
    });

    // Handle the checkbox change event
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        const numericValue = Number(value);  // Ensure the value is converted to a number

        if (checked) {
            // If checked, add the numeric ID to planmodule array
            formik.setFieldValue('planmodule', [...formik.values.planmodule, numericValue]);
        } else {
            // If unchecked, remove the numeric ID from planmodule array
            formik.setFieldValue('planmodule', formik.values.planmodule.filter(item => item !== numericValue));
        }
    };

    // Array of plan modules
    // const planModules = state?.planModules || [
    //     { id: 1, name: 'Basic Plan' },
    //     { id: 2, name: 'Premium Plan' },
    //     { id: 3, name: 'Enterprise Plan' },
    // ];
    const planModules = status || [];



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
                            <form onSubmit={formik.handleSubmit} className='lg:h-[100%] h-[50%] pl-10 m-auto w-[45vw] border rounded-md bg-white shadow-lg'>
                                <div className='font-semibold text-3xl mt-5 text-center'>Add New Plan</div>

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

                                    {/* Checkboxes for selecting multiple plans */}
                                    <div>
                                        <div className='text-gray-400 mt-2'>Planmodule</div>
                                        <div>
                                            {planModules.map((item) => (
                                                <div key={item.id} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id={item.id}
                                                        value={item.id}  // Make sure this is the ID, not the name
                                                        onChange={handleCheckboxChange}  // Use the generic change handler
                                                        checked={formik.values.planmodule.includes(item.id)}  // Check if the ID exists in form values
                                                        className="mr-2"
                                                    />
                                                    <label htmlFor={item.id}>{item.name}</label>  
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-end mt-5 gap-2'>
                                    <div onClick={handleClose} className='border cursor-pointer border-indigo-500 text-indigo-500 w-28 h-9 py-1 rounded-md text-center'>Close</div>
                                    <button type='submit' className='bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white w-28 h-9 py-1 rounded-md text-center'>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                <Toaster/>
            </div>
            <div>
                <div className='border border-gray-300 rounded-md m-5'>
                    <div className='flex justify-between pt-5 px-7'>
                        {/* <div className='flex '>
                                        <div>Search:</div>
                                        <input className='border border-slate-400 outline-none ml-3 rounded-sm h-6 my-0.5' type='text' />
                                    </div> */}
                        {/* <div><Head2 /></div> */}
                    </div>

                    <div className='border border-gray-300 my-5 mx-7 rounded-sm overflow-y-auto max-h-[100vh]'>
                        <div className='flex text-sm border-b-2'>
                            <div className='w-[10%] font-semibold p-1 py-2 pl-2 border-r border-gray-300'>#</div>
                            <div className='w-[20%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Plan
                                <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                            </div>
                            <div className='w-[20%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Validity
                                <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                            </div>
                            <div className='w-[20%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Price
                                <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                            </div>
                            {/* <div className='w-[10%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Status
                                    <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                </div> */}
                            <div className='w-[30%] font-semibold py-2 px-3 border-gray-300 flex justify-between'>Action
                                <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                            </div>
                        </div>
                        <div className="overflow-y-auto">
                            {data && data.map((item, index) => (
                                <div key={index} className='flex text-sm border-t text-gray-500'>
                                    <div className='w-[10%] p-1 py-2 pl-2 border-r border-gray-300'>{index + 1}</div>
                                    <div className='w-[20%] py-2 px-3 border-r border-gray-300 truncate'>{item?.plan_type}
                                    </div>
                                    <div className='w-[20%]  py-2 px-3 border-r border-gray-300 '>{item?.plan_validity}
                                    </div>
                                    <div className='w-[20%] py-2 px-3 border-r border-gray-300 '>{item?.price}
                                    </div>
                                    {/* <div className='w-[10%]  py-2 px-3 border-r border-gray-300'><div>
                                                   <Switch onChange={(e) => setStatus(e.target.checked)} />
                                                   </div>
                                                </div> */}
                                    <div className='flex w-[30%] justify-between py-2 px-10'>
                                        <div><PlanEdit item={item} DataApi={DataApi}/></div>
                                        <div className=''><PlanDelete item={item} DataApi={DataApi}/>
                                        </div>
                                    </div>
                                </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPlan;




