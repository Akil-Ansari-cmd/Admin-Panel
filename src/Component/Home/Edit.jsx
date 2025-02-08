import { useFormik } from 'formik';
import React, { useState } from 'react'
import { MdEdit } from 'react-icons/md'
import { AdminUpdate } from '../Services/Get Otp';
import toast, { Toaster } from 'react-hot-toast';

const Edit = ({item, AdminApi}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    const handleClose = () => setOpen(false);
    console.log("item", item);
    const formik = useFormik({
        initialValues: {
            preference_id:item?.id ||"",
            age: item?.age || '',
            religion: item?.religion || '',
            location: item?.location || '',
            marital_status: item?.marital_status || '',
            height: item?.height || '',
            address: item?.address || '',
            income: item?.income || '',
            profession: item?.profession || ''
        },
        enableReinitialize: true,
        onSubmit: async(values) => {
         const data =   await AdminUpdate(values);

         console.log("data",data)

         if(data.data.response_code === 200){

            toast.success("successfully complete"); 
            handleClose();
           
            AdminApi();
           
         }
         else{
            toast.error("Something went wrong");
         }
        }
    });

    return (
        <div>
                <div  onClick={handleOpen} className=''> <MdEdit className='w-8 h-5 text-xs rounded-md text-white bg-yellow-400' />
                </div>
            {open && (
                <div className='fixed bg-black bg-opacity-50 z-50 h-[100vh] left-0 w-[100%] inset-0 py-20'>
                    <div onClick={(e) => e.stopPropagation()} className='h-[100%] mx-auto w-[70%]'>
                        <form onSubmit={formik.handleSubmit} className='lg:h-[100%] h-[50%] pl-10 m-auto w-[45vw] border rounded-md bg-white shadow-lg'>
                            <div className='font-semibold text-3xl mt-5 text-center'>Edit User's Details</div>
                            <div className='text-center'>Brief outline of User's information</div>
                            <div className='grid grid-cols-2 gap-2'>
                                <div>
                                    <div className='text-gray-400'>Age</div>
                                    <input
                                        name='age'
                                        onChange={formik.handleChange}
                                        value={formik.values.age}
                                        className='outline-none h-8 rounded-md border border-gray-400'
                                        type='text'
                                    />
                                </div>
                                <div>
                                    <div className='text-gray-400'>Religion</div>
                                    <input
                                        name='religion'
                                        onChange={formik.handleChange}
                                        value={formik.values.religion}
                                        className='outline-none h-8 rounded-md border border-gray-400'
                                        type='text'
                                    />
                                </div>
                                <div>
                                    <div className='text-gray-400'>Location</div>
                                    <input
                                        name='location'
                                        onChange={formik.handleChange}
                                        value={formik.values.location}
                                        className='outline-none h-8 rounded-md border border-gray-400'
                                        type='text'
                                    />
                                </div>
                                <div>
                                    <div className='text-gray-400'>Marital Status</div>
                                    <input
                                        name='marital_status'
                                        onChange={formik.handleChange}
                                        value={formik.values.marital_status}
                                        className='outline-none h-8 rounded-md border border-gray-400'
                                        type='text'
                                    />
                                </div>
                                <div>
                                    <div className='text-gray-400'>Height</div>
                                    <input
                                        name='height'
                                        onChange={formik.handleChange}
                                        value={formik.values.height}
                                        className='outline-none h-8 rounded-md border border-gray-400'
                                        type='text'
                                    />
                                </div>
                                <div>
                                    <div className='text-gray-400'>Address</div>
                                    <input
                                        name='address'
                                        onChange={formik.handleChange}
                                        value={formik.values.address}
                                        className='outline-none h-8 rounded-md border border-gray-400'
                                        type='text'
                                    />
                                </div>
                                <div>
                                    <div className='text-gray-400'>Income</div>
                                    <input
                                        name='income'
                                        onChange={formik.handleChange}
                                        value={formik.values.income}
                                        className='outline-none h-8 rounded-md border border-gray-400'
                                        type='text'
                                    />
                                </div>
                                <div>
                                    <div className='text-gray-400'>Profession</div>
                                    <input
                                        name='profession'
                                        onChange={formik.handleChange}
                                        value={formik.values.profession}
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
            <Toaster/>
        </div>
    )
}

export default Edit
