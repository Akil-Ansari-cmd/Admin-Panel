import React, { useEffect, useState } from 'react'
import { BiSort } from 'react-icons/bi'
import { Common } from '../../Component/Services/Common Search';

const Search = () => {
    const [data,setData] = useState([]);

    const SearchApi = async() => {

        const response = await Common();
        console.log("common...", response?.data?.data)
        setData(response?.data?.data || [])
    }

    useEffect(() => {
        SearchApi();
    },[])


    return (
        <div>
            {/* <div className='border border-gray-300 rounded-md m-5'>
                <div className='flex flex-col border border-white my-10 mx-7 rounded-sm overflow-y-scroll'>
                    <div className='flex text-sm border-b-2 !text-white !sticky !top-0 !z-10'>
                        <div className='w-[5%] font-semibold p-1 py-2 pl-2 border-r border-gray-300'>#</div>
                        <div className='w-[10%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Gender
                            <div><BiSort className='font-semibold  text-lg' /></div>
                        </div>
                        <div className='w-[10%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Age
                            <div><BiSort className='font-semibold  text-lg' /></div>
                        </div>
                        <div className='w-[10%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Religion
                            <div><BiSort className='font-semibold  text-lg' /></div>
                        </div>
                        <div className='w-[10%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Caste
                            <div><BiSort className='font-semibold  text-lg' /></div>
                        </div>
                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Location
                            <div><BiSort className='font-semibold  text-lg' /></div>
                        </div>
                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Income
                            <div><BiSort className='font-semibold  text-lg' /></div>
                        </div>
                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between  truncate'>Marital Status
                            <div><BiSort className='font-semibold  text-lg' /></div>
                        </div>
                        <div className='w-[15%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Profession
                            <div><BiSort className='font-semibold  text-lg' /></div>
                        </div>
                    </div>
                    {Array.isArray(data) && data.map((i, index) => (
                    <div key={index} className='flex text-sm border-t text-white'>
                        <div className='w-[5%] p-1 py-2 pl-2 border-r border-gray-300'>{index + 1}</div>
                        <div className='w-[10%] py-2 px-3 border-r border-gray-300'>
                        </div>
                        <div className='w-[10%]  py-2 px-3 border-r border-gray-300 '>
                        </div>
                        <div className='w-[10%] py-2 px-3 border-r border-gray-300 '>
                        </div>
                        <div className='w-[10%] py-2 px-3 border-r border-gray-300 '>
                        </div>
                        <div className='w-[15%]  py-2 px-3 border-r border-gray-300'>{i?.income?.income}
                        </div>
                        <div className='w-[15%]  py-2 px-3 border-r border-gray-300 truncate'>
                        </div>
                        <div className='w-[15%]  py-2 px-3 border-r border-gray-300'>
                        </div>
                        <div className='w-[15%]  py-2 px-3 border-r border-gray-300'>
                        </div>
                    </div>))}
                </div>
            </div> */}
            <div className="grid grid-cols-3 gap-4">
                {data && data?.income?.map((i, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                        {/* <div>{i?.faq_id}</div> */}
                        <div className="font-bold text-gray-800 mb-2">Income: {i?.income}</div>
                        <div className="text-gray-600">Count: {i?.count}</div>
                    </div>
                ))}
                {data && data?.location?.map((i, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                        {/* <div>{i?.faq_id}</div> */}
                        <div className="font-bold text-gray-800 mb-2">Location: {i?.location}</div>
                        <div className="text-gray-600">Count: {i?.count}</div>
                    </div>
                ))}
                {data && data?.profession?.map((i, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                        {/* <div>{i?.faq_id}</div> */}
                        <div className="font-bold text-gray-800 mb-2">Profession: {i?.profession}</div>
                        <div className="text-gray-600">Count: {i?.count}</div>
                    </div>
                ))}
                {data && data?.religion?.map((i, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                        {/* <div>{i?.faq_id}</div> */}
                        <div className="font-bold text-gray-800 mb-2">Religion: {i?.religion}</div>
                        <div className="text-gray-600">Count: {i?.count}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search
