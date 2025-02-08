import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Switch } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AiFillDashboard } from "react-icons/ai";
import { BiSort } from "react-icons/bi";
import { FaQuestion } from "react-icons/fa6";
import { FcSalesPerformance } from "react-icons/fc";
import { GrBlog } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { MdDelete, MdPeopleAlt } from "react-icons/md";
// import { ActiveApi, AdminManage, StatusUpdate } from '../Services/Get Otp';
// import Blog from './Blog';
import Edit from '../../Component/Home/Edit';
import Faq from '../../Component/Home/Faq';
import Logout from '../../Component/Home/Logout';
import NewPlan from '../../Component/Home/NewPlan';
import Plan from '../../Component/Home/Plan';
import { ActiveApi, AdminManage, StatusUpdate } from '../../Component/Services/Get Otp';
import Blog from '../../Component/Home/Blog';
// import { Blog, Faq, Edit, Logout, NewPlan, Plan } from '../../Component/Services/Admin Blog';
const Admin = () => {
    
    const [content, setContent] = useState("Preferences")
    const [data, setData] = useState();


    const AdminApi = async () => {

        const response = await AdminManage();
        console.log("data..........", response?.data);
        setData(response?.data?.data)
    };
    useEffect(() => {
        AdminApi();
    }, [])

    console.log("data aa ra hai", data);



    const [status, setStatus] = useState()

    const StatusApi = async () => {

        const response = await StatusUpdate();
        console.log("data..........", response?.data?.data?.id);
        setStatus(response?.data?.data)
    };

    useEffect(() => {
        StatusApi();
    }, [])
    console.log("ttttt", status);




    const CheckedApi = async (req) => {

        console.log(req)
        const response = await ActiveApi(req);
        console.log("object", response);

    }

   




    const handleChecked = (e, id) => {
        console.log("Profile ID:", id); 
        const newStatus = e.target.checked ? "active" : "deactive";
        console.log("id", id)

        // console.log(e.target.checked)

        const req = {
            status: newStatus,
            profile_id: id

        }

        CheckedApi(req)

        console.log("dghdsfjd")


    }

    return (
        <div>
            <div className='flex h-screen'>
                <div className='bg-opacity-10 bg-gradient-to-r from-indigo-300 from-10% via-sky-200 via-30% to-emerald-300 to-90% ...  w-[20%]  fixed top-0 left-0 h-full overflow-y-auto'>
                    <div className='flex items-center justify-center h-14 text-xl !bg-white w-full'>Master Admin</div>
                    <div className='gap-3 space-y-4 mt-3'>
                        <div onClick={() => setContent("Preferences")} className='flex justify-between text-orange-500'>
                            <div className='flex text-xl gap-2'>
                                <div><AiFillDashboard className='mt-1' /></div>
                                <div>PREFERENCES</div>
                            </div>
                            <div className='mt-1 text-xl'>{content === "Preferences" ? <IoIosArrowForward /> : <ExpandMoreIcon />}</div>
                        </div>
                        <div onClick={() => setContent("User")} className='flex justify-between text-yellow-500'>
                            <div className='flex text-xl gap-2'>
                                <div><MdPeopleAlt className='mt-1 ' /></div>
                                <div>USER</div>
                            </div>
                            <div className='mt-1 text-xl'>{content === "User" ? <IoIosArrowForward /> : <ExpandMoreIcon />}</div>
                        </div>
                        <div onClick={() => setContent("Blog")} className='flex justify-between   text-blue-500'>
                            <div className='flex text-xl gap-2'>
                                <div><GrBlog className='mt-1'/></div>
                                <div>BLOG</div>
                            </div>
                            <div className='mt-1 text-xl'>{content === "Blog" ? <IoIosArrowForward /> : <ExpandMoreIcon />}</div>
                        </div>
                        <div onClick={() => setContent("Faq")} className='flex justify-between text-violet-500'>
                            <div className='flex text-xl gap-2'>
                                <div><FaQuestion className='mt-1 ' /></div>
                                <div>FAQ</div>
                            </div>
                            <div className='mt-1 text-xl'>{content === "Faq" ? <IoIosArrowForward /> : <ExpandMoreIcon />}</div>
                        </div>
                        <div onClick={() => setContent("Plan")} className='flex justify-between text-pink-500'>
                            <div className='flex text-xl gap-2'>
                                <div><FcSalesPerformance className='mt-1 ' /></div>
                                <div>MODULE</div>
                            </div>
                            <div className='mt-1 text-xl'>{content === "Plan" ? <IoIosArrowForward /> : <ExpandMoreIcon />}</div>
                        </div>
                        <div onClick={() => setContent("Module")} className='flex justify-between text-pink-500'>
                            <div className='flex text-xl gap-2'>
                                <div><FcSalesPerformance className='mt-1 ' /></div>
                                <div>PLAN</div>
                            </div>
                            <div className='mt-1 text-xl'>{content === "Module" ? <IoIosArrowForward /> : <ExpandMoreIcon />}</div>
                        </div>
                    </div>
                </div>
                <div className='w-[80%] h-screen ml-[20%]'>
                    <div className='flex justify-end text-white px-10 h-14 bg-opacity-10 bg-gradient-to-r from-emerald-300 from-10% via-sky-200 via-30% to-indigo-300 to-90% ...   items-center text-xl 
                             fixed top-0 left-[20%] w-[80%] z-50 shadow-md'>
                        {/* <div><GiHamburgerMenu /></div> */}
                        <div className='flex'>
                            <div><Logout/></div>
                            {/* <div><BiSolidDownArrow className='mt-2' style={{ fontSize: "12px" }} /></div> */}
                        </div>
                    </div>

                    <div className="overflow-y-auto mt-12 p-5 h-[100vh]">
                        {content === "Preferences" &&
                            <div className='border border-gray-300 rounded-md m-5'>
                                <div className='flex justify-between pt-5 px-7'>
                                    {/* <div className='flex '>
                                        <div>Search:</div>
                                        <input className='border border-slate-400 outline-none ml-3 rounded-sm h-6 my-0.5' type='text' />
                                    </div> */}
                                    {/* <div><Head2 /></div> */}
                                </div>

                                <div className='border border-gray-300 my-5 mx-7 rounded-sm overflow-y-auto max-h-[60vh]'>
                                    <div className='flex text-sm border-b-2'>
                                        <div className='w-[5%] font-semibold p-1 py-2 pl-2 border-r border-gray-300'>#</div>
                                        <div className='w-[10%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Email
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Age
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Height
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Status
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Address
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Profession
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        {/* <div className='w-[10%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Status
                                    <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                </div> */}
                                        <div className='w-[20%] font-semibold py-2 px-3 border-gray-300 flex justify-between'>Action
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                    </div>
                                    <div className="overflow-y-auto">
                                        {data && data.map((item, index) => (
                                            <div key={index} className='flex text-sm border-t text-gray-500'>
                                                <div className='w-[5%] p-1 py-2 pl-2 border-r border-gray-300'>{index + 1}</div>
                                                <div className='w-[10%] py-2 px-3 border-r border-gray-300 truncate'>{item?.user_name}
                                                </div>
                                                <div className='w-[15%]  py-2 px-3 border-r border-gray-300 '>{item?.age}
                                                </div>
                                                <div className='w-[15%] py-2 px-3 border-r border-gray-300 '>{item?.height}
                                                </div>
                                                <div className='w-[15%]  py-2 px-3 border-r border-gray-300'>{item?.marital_status}
                                                </div>
                                                <div className='w-[15%]  py-2 px-3 border-r border-gray-300'>{item.address}
                                                </div>
                                                <div className='w-[15%]  py-2 px-3 border-r border-gray-300'>{item.profession}
                                                </div>
                                                {/* <div className='w-[10%]  py-2 px-3 border-r border-gray-300'><div>
                                                   <Switch onChange={(e) => setStatus(e.target.checked)} />
                                                   </div>
                                                </div> */}
                                                <div className='flex w-[20%] gap-3 py-2 px-2'>
                                                    <div><Edit item={item} AdminApi={AdminApi} /></div>
                                                    <div className=''> <MdDelete className='w-8 h-5 text-xs rounded-md text-white bg-red-500' />
                                                    </div>
                                                </div>
                                            </div>))}
                                    </div>
                                </div>
                            </div>
                        }
                        {content === "User" &&
                            <div className='border border-gray-300 rounded-md m-5'>
                                {/* <div className='flex justify-between pt-5 px-7'>
                                    <div className='flex '>
                                        <div>Search:</div>
                                        <input className='border border-slate-400 outline-none ml-3 rounded-sm h-6 my-0.5' type='text' />
                                    </div>
                                </div> */}
                                <div className='flex flex-col border border-gray-300 my-10 mx-7 rounded-sm overflow-y-scroll'>
                                    <div className='flex text-sm border-b-2'>
                                        <div className='w-[5%] h-[9%] font-semibold p-1 py-2 pl-2 border-r border-gray-300'>#</div>
                                        <div className='w-[10%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Name
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[10%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Age
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[10%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Height
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[10%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Gender
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[15%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Marital Status
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[15%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Address
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[15%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Profession
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        <div className='w-[10%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Status
                                            <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                        </div>
                                        {/* <div className='w-[10%] h-[9%] font-semibold py-2 px-3 border-gray-300 flex justify-between'>Action
                                    <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                </div> */}
                                    </div>
                                    {status && status.map((i, index) => (
                                        <div key={index} className='flex text-sm border-t text-gray-500'>
                                            <div className='w-[5%] p-1 py-2 pl-2 border-r border-gray-300'>{index + 1}</div>
                                            <div className='w-[10%] py-2 px-3 border-r border-gray-300'>{i?.user_name}
                                            </div>
                                            <div className='w-[10%]  py-2 px-3 border-r border-gray-300 '>{i?.age}
                                            </div>
                                            <div className='w-[10%] py-2 px-3 border-r border-gray-300 '>{i?.height}
                                            </div>
                                            <div className='w-[10%] py-2 px-3 border-r border-gray-300 '>{i?.gender}
                                            </div>
                                            <div className='w-[15%]  py-2 px-3 border-r border-gray-300'>{i?.marital_status}
                                            </div>
                                            <div className='w-[15%]  py-2 px-3 border-r border-gray-300'>{i?.address}
                                            </div>
                                            <div className='w-[15%]  py-2 px-3 border-r border-gray-300'>{i?.profession}
                                            </div>
                                            <div className='w-[10%]  py-2 px-3 border-r border-gray-300'><div>
                                                <Switch onChange={(e) => handleChecked(e, i?.id)} />
                                            </div>
                                            </div>
                                        </div>))}
                                </div>
                            </div>
                        }
                        {
                            content === "Blog" &&
                            <div>
                                <div><Blog /></div>
                            </div>
                        }
                        {
                            content === "Faq" && <div>
                                <Faq />
                            </div>
                        }
                        {
                            content === "Plan" && <div>
                                <Plan />
                            </div>
                        }
                        {
                            content === "Module" && <div>
                                <NewPlan />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin