import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { CiSquarePlus } from "react-icons/ci";
import { AddBlog, GetBlog } from '../Services/Admin Blog';
import NewBlog from './NewBlog';
import { Navigate, useNavigate } from 'react-router-dom';

const Blog = () => {
    const Navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    const handleClose = () => setOpen(false);

    const [data, setData] = useState();


    const AdminApi = async () => {
        setLoading(true)
        const response = await GetBlog();
        console.log("data..........", response?.data);
        setData(response?.data?.data)
        setLoading(false)
    };
    useEffect(() => {
        AdminApi();
    }, [])

    const formik = useFormik({
        initialValues: {
            title: "",
            images: null,
        },
        enableReinitialize: true,
        onSubmit: (values) => {
            console.log("first", values);

            const req = new FormData();
            req.append("title", values.title);
            req.append("images", values.images);

            AddBlog(req);
        }
    });

    //  const AddApi = async (req) => {
    //         console.log(req)
    //         const response = await PostBlog(req);
    //         console.log("object", response);

    //     }

    // const handleAdd = (e,id) => {
    //     console.log("Profile ID:", id);
    //     const add = e.target;
    //     const req = {
    //         category_id: id
    //     }

    //     AddApi(req);

    // }

    if(loading) {
        return <h1>Loading....</h1>
    }

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
                                <div className='font-semibold text-3xl mt-5 text-center'>Add Some Blog</div>
                                <div className='mt-10'>
                                    <textarea
                                        rows="5"
                                        name="title"
                                        onChange={formik.handleChange}
                                        value={formik.values.title}
                                        className='border border-gray-300 rounded-md outline-none resize-none'
                                        cols="50"
                                        placeholder="Enter your text here..."
                                    />
                                </div>
                                <div>
                                    <input
                                        type="file"
                                        id='images'
                                        name="images"
                                        accept="image/*"
                                        onChange={(e) => formik?.setFieldValue("images", e.target?.files[0])}
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
            <div className='grid grid-cols-3 gap-4'>
                {data && data.map((item, index) => (
                    <div key={index} className='p-4'>
                        <div className='grid border text-center'>
                            <div className='font-bold'>{item.title}</div>
                            <div onClick={() => {
                                console.log("Item being passed:", item);  // Log the item to ensure it's valid
                                Navigate("/Blog", { state: item });
                            }}>
                                <img className='h-40 w-40 object-cover mx-auto' src={`http://192.168.1.188:8098/${item?.images}`} alt={item.title} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
