import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Blog, DeleteBlog, PostBlog } from '../Services/Admin Blog';
import { CiSquarePlus } from 'react-icons/ci';
import { useLocation } from 'react-router-dom';
import BlogUpdate from './BlogUpdate';
import BlogDelete from './BlogDelete';

const NewBlog = () => {
  const location = useLocation();
  const { state } = location; // This is the data you passed via Navigate

  // You can now use the `state` in the component
  console.log(state, "Checkkk");  // Check if you get the item object here

  const [data, setData] = useState()
  const DataApi = async (id) => {

    const response = await Blog({category_id:id});
    console.log("Blog..........", response?.data);
    setData(response?.data?.data)
  };

  useEffect(() => {
    DataApi(state?.id);
  }, [])

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  const formik = useFormik({
    initialValues: {
      category_id: state?.id || "",
      title: state?.title || "",
      meta_title: state?.meta_title || "",
      meta_description: state?.meta_description || "",
      sub_title: state?.sub_title || "",
      images: null,
      content: state?.content || "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const req = new FormData();
      req.append("category_id", values.category_id);
      req.append("title", values.title);
      req.append("images", values.images);
      req.append("meta_title", values.meta_title);
      req.append("meta_description", values.meta_description);
      req.append("sub_title", values.sub_title);
      req.append("content", values.content);

      PostBlog(req);
    },
  })
  return (
    <div>
      <div className='fixed top-5 right-5 z-50'>
        <div onClick={handleOpen} className='flex justify-center items-center text-2xl bg-blue-500 text-white rounded-full w-12 h-12 cursor-pointer'>
          <CiSquarePlus className='mt-1' />
        </div>
      </div>
      {/* <div onClick={handleOpen} className='flex justify-end'>Add</div> */}
      {open && (
        <div className='fixed bg-black bg-opacity-50 z-50 h-[100vh] left-0 w-[100%] inset-0 py-20'>
          <div onClick={(e) => e.stopPropagation()} className='h-[100%] mx-auto w-[70%]'>
            <form onSubmit={formik.handleSubmit} className='lg:h-[100%] h-[50%] pl-10 m-auto w-[45vw] border rounded-md bg-white shadow-lg'>
              <div className='font-semibold text-3xl mt-5 text-center'>Add New Blog</div>

              <div className='grid grid-cols-2 gap-2'>
                <div>
                  <div className='text-gray-400'>Title</div>
                  <input
                    name='title'
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    className='outline-none h-8 rounded-md border border-gray-400'
                    type='text'
                  />
                </div>
                <div>
                  <div className='text-gray-400'>Sub_title</div>
                  <input
                    name='sub_title'
                    onChange={formik.handleChange}
                    value={formik.values.sub_title}
                    className='outline-none h-8 rounded-md border border-gray-400'
                    type='text'
                  />
                </div>
                <div>
                  <div className='text-gray-400'>Meta_Title</div>
                  <input
                    name='meta_title'
                    onChange={formik.handleChange}
                    value={formik.values.meta_title}
                    className='outline-none h-8 rounded-md border border-gray-400'
                    type='text'
                  />
                </div>
                <div>
                  <div className='text-gray-400'>Meta_description</div>
                  <input
                    name='meta_description'
                    onChange={formik.handleChange}
                    value={formik.values.meta_description}
                    className='outline-none h-8 rounded-md border border-gray-400'
                    type='text'
                  />
                </div>
                <div>
                  <div className='text-gray-400'>Content</div>
                  <input
                    name='content'
                    onChange={formik.handleChange}
                    value={formik.values.content}
                    className='outline-none h-8 rounded-md border border-gray-400'
                    type='text'
                  />
                </div>
                <div>
                  <div className='text-gray-400'>Image</div>
                  <input
                    type="file"
                    id='images'
                    name="images"
                    accept="image/*"
                    onChange={(e) => formik?.setFieldValue("images", e.target?.files[0])}
                  />
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
      <div className="grid grid-cols-3 gap-4">
        {data && data.map((i, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            {/* <div>{i?.faq_id}</div> */}
            <div className="font-bold text-gray-800 mb-2">{i?.title}</div>
            <div className="text-gray-600">{i?.sub_title}</div>
            <div className="text-gray-600">{i?.meta_title}</div>
            <div className="text-gray-600">{i?.content}</div>
            <img  src={`http://192.168.1.188:8098/${i?.images}`}/>
            <div className='flex justify-between px-10 mt-2'>
              <div><BlogUpdate i={i} DataApi={DataApi}/></div>
              <div><BlogDelete i={i} DataApi={DataApi}/></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewBlog
