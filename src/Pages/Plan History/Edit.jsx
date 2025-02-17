import React, { useState } from 'react'
import { MdEdit } from 'react-icons/md';
import { EditHistory } from '../../Component/Services/Plan History';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';

const Edit = ({ item, PlanHistory }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    const handleClose = () => setOpen(false);

    const formik = useFormik({
        initialValues: {
            // profile_id: item?.id || "",
            profile_id: item?.user_profile || "",
            status: item?.status || "",
        },
        enableReinitialize: true,
        onSubmit: async (values) => {
            const data = await EditHistory(values);

            console.log("data", data)

            if (data.data.response_code === 200) {

                toast.success("successfully update the plan");
                handleClose();

                PlanHistory();

            }
            else {
                toast.error("Something went wrong");
            }
        }
    });
    return (
        <div>
            <div onClick={handleOpen} className=''> <MdEdit className='w-8 h-5 text-xs rounded-md text-white bg-yellow-400' />
            </div>
            {open && (
                <div className='fixed bg-black bg-opacity-50 z-50 h-[100vh] left-0 w-[100%] inset-0 py-20'>
                    <div onClick={(e) => e.stopPropagation()} className='h-[100%] mx-auto w-[70%]'>
                        <form onSubmit={formik.handleSubmit} className='lg:h-[100%] h-[50%] pl-10 m-auto w-[45vw] border rounded-md bg-white shadow-lg'>
                            <div className='font-semibold text-3xl mt-5 text-center'>Edit User's Plan</div>
                            <div className='text-center'>Brief outline of User's information</div>
                            <div className='grid grid-cols-2 gap-2'>
                                <div>
                                    <div className='text-gray-400'>Profile</div>
                                    <input
                                        name='profile_id'
                                        onChange={formik.handleChange}
                                        value={formik.values.profile_id}
                                        className='outline-none h-8 rounded-md border border-gray-400'
                                        type='text'
                                    />
                                </div>
                                <div>
                                    <div className='text-gray-400'>Status</div>
                                    <select
                                        name='status'
                                        onChange={formik.handleChange}
                                        value={formik.values.status}
                                        className='outline-none h-8 rounded-md border border-gray-400'
                                    >
                                        <option value='Paid' label='Paid'/>
                                        <option value='Free' label='Free' />
                                        {/* <option value='pending' label='Pending' /> */}
                                    </select>
                                </div>

                                {/* <div>
                                    <div className='text-gray-400'>Address</div>
                                    <input
                                        name='address'
                                        onChange={formik.handleChange}
                                        value={formik.values.address}
                                        className='outline-none h-8 rounded-md border border-gray-400'
                                        type='text'
                                    />
                                </div> */}
                            </div>
                            <div className='flex justify-end mt-5 gap-2'>
                                <div onClick={handleClose} className='border cursor-pointer border-red-500 text-red-500 w-28 h-9 py-1 rounded-md text-center'>Close</div>
                                <button type='submit' className='bg-red-600 text-white w-28 h-9 py-1 rounded-md text-center'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <Toaster />
        </div>
    )
}

export default Edit
