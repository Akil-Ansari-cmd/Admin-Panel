import { useFormik } from 'formik';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { UpdatePlan } from '../Services/Admin Plan';

const ModuleUpdate = ({i, DataApi}) => {
      console.log("immmmmmm",i)
      const [open, setOpen] = useState(false);
    
        const handleOpen = () => setOpen(!open);
        const handleClose = () => setOpen(false);

        const formik = useFormik({
            initialValues: {
                planmodule_id: i?.id || '',
                name: i?.name || "",
              
            },
            enableReinitialize: true,
            onSubmit: async (values) => {
                const response = await UpdatePlan(values);
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
            <div onClick={handleOpen} className='border border-green-500 p-2 bg-green-500 text-white rounded-lg'>Update</div>
            {open && (
                <div className='fixed bg-black bg-opacity-50 z-50 h-[100vh] left-0 w-[100%] inset-0 py-20'>
                    <div onClick={(e) => e.stopPropagation()} className='h-[100%] mx-auto w-[70%]'>
                        <form onSubmit={formik.handleSubmit}

                            encType="multipart/form-data"
                            className='lg:h-[100%] h-[50%] pl-10 m-auto w-[45vw] border rounded-md bg-white shadow-lg'
                        >
                            <div className='font-semibold text-3xl mt-5 text-center'>Add Your Question Here</div>
                            <div className='mt-10'>
                                <textarea
                                    rows="2"
                                    name="name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    className="border border-gray-300 rounded-md outline-none resize-none placeholder:pt-1 pl-2"
                                    cols="50"
                                />
                            </div>
                            {/* <div>
                                <textarea
                                    rows="5"
                                    name="answer"
                                    onChange={formik.handleChange}
                                    value={formik.values.answer}
                                    className="border border-gray-300 rounded-md outline-none resize-none placeholder:pt-2 pl-2"
                                    cols="50"
                                    placeholder="Enter your answer..."
                                />
                            </div> */}
                            <div className='flex justify-end mt-5 gap-2'>
                                <div onClick={handleClose} className='border cursor-pointer border-indigo-300 text-indigo-500 w-28 h-9 py-1 rounded-md text-center'>Close</div>
                                <button
                                    type='submit'
                                    className='bg-red-600 text-white w-28 h-9 py-1 rounded-md text-center'
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <Toaster/>
        </div>
  )
}

export default ModuleUpdate
