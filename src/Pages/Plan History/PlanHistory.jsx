import React, { useEffect, useState } from 'react'
import { BiSort } from 'react-icons/bi'
import { History } from '../../Component/Services/Plan History';
import Edit from './Edit';

const PlanHistory = () => {
    const [data, setData] = useState();
    const PlanHistory = async () => {
        const response = await History();
        console.log("History..........", response?.data);
        setData(response?.data?.data || []);  // Ensure data is always an array
    };

    useEffect(() => {
        PlanHistory();
    }, []);

    return (
        <div>
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
                            <div className='w-[30%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>User Profile
                                <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                            </div>
                            <div className='w-[30%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Status
                                <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                            </div>
                            {/* <div className='w-[20%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Price
                                <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                            </div> */}
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
                                    <div className='w-[30%] py-2 px-3 border-r border-gray-300 truncate'>{item?.
                                        user_profile
                                    }
                                    </div>
                                    {/* <div className='w-[20%]  py-2 px-3 border-r border-gray-300 '>
                                </div> */}
                                    <div className='w-[30%] py-2 px-3 border-r border-gray-300 '>{item?.status  }
                                    </div>
                                    {/* <div className='w-[10%]  py-2 px-3 border-r border-gray-300'><div>
                                                   <Switch onChange={(e) => setStatus(e.target.checked)} />
                                                   </div>
                                                </div> */}
                                    <div className='flex w-[30%] justify-between py-2 px-10'>
                                        <div><Edit item={item} PlanHistory={PlanHistory}/></div>
                                        <div className=''>
                                        </div>
                                    </div>
                                </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanHistory
