import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { StatusUpdate } from '../../Component/Services/Get Otp';
import { BiSort } from 'react-icons/bi';

const User = () => {
    const [status, setStatus] = useState()

    const Navigate = useNavigate();

    const StatusApi = async () => {

        const response = await StatusUpdate();
        // console.log("data..........", response?.data?.data?.id);
        setStatus(response?.data?.data)
    };

    useEffect(() => {
        StatusApi();
    }, [])
  return (
    <div>
       <div className='border border-gray-300 rounded-md m-5'>
                {/* <div className='flex justify-between pt-5 px-7'>
                                          <div className='flex '>
                                              <div>Search:</div>
                                              <input className='border border-slate-400 outline-none ml-3 rounded-sm h-6 my-0.5' type='text' />
                                          </div>
                                      </div> */}
                <div className='flex flex-col border border-white my-10 mx-7 rounded-sm overflow-y-scroll'>
                    <div className='flex text-sm border-b-2 !text-white !sticky !top-0 !z-10'>
                        <div className='w-[10%] font-semibold p-1 py-2 pl-2 border-r border-gray-300'>#</div>
                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Name
                            <div><BiSort className='font-semibold  text-lg' /></div>
                        </div>
                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Age
                            <div><BiSort className='font-semibold  text-lg' /></div>
                        </div>
                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Height
                            <div><BiSort className='font-semibold  text-lg' /></div>
                        </div>
                        {/* <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Gender
                            <div><BiSort className='font-semibold  text-lg' /></div>
                        </div> */}
                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between truncate'>Marital Status
                            <div><BiSort className='font-semibold  text-lg' /></div>
                        </div>
                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Address
                            <div><BiSort className='font-semibold  text-lg' /></div>
                        </div>
                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Profession
                            <div><BiSort className='font-semibold  text-lg' /></div>
                        </div>
                    </div>
                    {status && status.map((i, index) => (
                        <div key={index} className='flex text-sm border-t text-white'>
                            <div className='w-[10%] p-1 py-2 pl-2 border-r border-gray-300'>{index + 1}</div>
                            <div  onClick={() => {
                                console.log("I being passed:", i); 
                                Navigate("/Message", { state: i });
                            }}
                             className='w-[15%] py-2 px-3 border-r border-gray-300'>{i?.user_name}
                            </div>
                            <div className='w-[15%]  py-2 px-3 border-r border-gray-300 '>{i?.age}
                            </div>
                            <div className='w-[15%] py-2 px-3 border-r border-gray-300 '>{i?.height}
                            </div>
                            {/* <div className='w-[10%] py-2 px-3 border-r border-gray-300 '>{i?.gender}
                            </div> */}
                            <div className='w-[15%]  py-2 px-3 border-r border-gray-300'>{i?.marital_status}
                            </div>
                            <div className='w-[15%]  py-2 px-3 border-r border-gray-300 truncate'>{i?.address}
                            </div>
                            <div className='w-[15%]  py-2 px-3 border-r border-gray-300'>{i?.profession}
                            </div>
                        </div>))}
                </div>
            </div>
    </div>
  )
}

export default User
