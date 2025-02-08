import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { FaqAdmin, GetFaq } from '../Services/Admin Blog';
import toast, { Toaster } from 'react-hot-toast';
import Update from './Update';
import FaqDelete from './FaqDelete';
const Faq = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    const handleClose = () => setOpen(false);

    const [data, setData] = useState()
    const DataApi = async () => {

        const response = await GetFaq();
        console.log("data..........", response?.data);
        setData(response?.data?.data)
    };

    useEffect(() => {
        DataApi();
    }, [])


    const formik = useFormik({
        initialValues: {
            question: "",
            answer: ""
        },
        enableReinitialize: true,
        onSubmit: async (values) => {
            const response = await FaqAdmin(values);
            console.log("response", response);
            if (response?.data?.response_code === 200) {

                handleClose();
                DataApi();

                formik.handleReset()
            } else {
                toast.console.error("Invalid");

            }
        }
    })

    return (
        <div>
            <div>
                <div className='fixed top-20 right-5 z-50'>
                    <div onClick={handleOpen} className='flex justify-center items-center text-2xl bg-blue-500 text-white rounded-full w-12 h-12 cursor-pointer'>
                        <CiSquarePlus className='mt-1' />
                    </div>
                </div>
                {open && (
                    <div className='fixed bg-black bg-opacity-50 z-50 h-[100vh] left-0 w-[100%] inset-0 py-20 mt-10'>
                        <div onClick={(e) => e.stopPropagation()} className='h-[100%] mx-auto w-[70%]'>
                            <form onSubmit={formik.handleSubmit}

                                encType="multipart/form-data"
                                className='lg:h-[100%] h-[50%] pl-10 m-auto w-[45vw] border rounded-md bg-white shadow-lg'
                            >
                                <div className='font-semibold text-3xl mt-5 text-center'>Add Your Question Here</div>
                                <div className='mt-10'>
                                    <textarea
                                        rows="2"
                                        name="question"
                                        onChange={formik.handleChange}
                                        value={formik.values.question}
                                        className="border border-gray-300 rounded-md outline-none resize-none placeholder:pt-1 pl-2"
                                        cols="50"
                                        placeholder="Enter your question..."
                                    />
                                </div>
                                <div>
                                    <textarea
                                        rows="5"
                                        name="answer"
                                        onChange={formik.handleChange}
                                        value={formik.values.answer}
                                        className="border border-gray-300 rounded-md outline-none resize-none placeholder:pt-2 pl-2"
                                        cols="50"
                                        placeholder="Enter your answer..."
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
                <Toaster />
            </div>
            <div className="grid grid-cols-3 gap-4">
                {data && data.map((i, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                        {/* <div>{i?.faq_id}</div> */}
                        <div className="font-bold text-gray-800 mb-2">Q. {i?.question}</div>
                        <div className="text-gray-600"> Ans. {i?.answer}</div>
                        <div className='flex justify-between px-10'>
                            <div><Update state={i} DataApi={DataApi} /></div>
                            <div><FaqDelete state={i} DataApi={DataApi} /></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq
