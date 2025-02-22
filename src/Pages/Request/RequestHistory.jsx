import { QueryClient, useQuery } from '@tanstack/react-query';
import React from 'react'
import { PlanReport } from '../../Component/Services/Request';
import { BiSort } from 'react-icons/bi';
import moment from 'moment/moment';


const RequestHistory = () => {

  const { data: Plan, refetch, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: PlanReport,
  });

  console.log(Plan, "Report...")

  //  refetch()
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
            <div className='w-[18%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Sender
              <div><BiSort className='font-semibold  text-lg' /></div>
            </div>
            <div className='w-[18%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Receiver
              <div><BiSort className='font-semibold  text-lg' /></div>
            </div>
            <div className='w-[18%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Remark
              <div><BiSort className='font-semibold  text-lg' /></div>
            </div>
            <div className='w-[18%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Status
              <div><BiSort className='font-semibold  text-lg' /></div>
            </div>
            <div className='w-[18%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between truncate'>TimeStamp
              <div><BiSort className='font-semibold  text-lg' /></div>
            </div>
            {/* <div className='w-[10%] h-[9%] font-semibold py-2 px-3 border-gray-300 flex justify-between'>Action
                                          <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
                                      </div> */}
          </div>
          {Plan?.data?.map((i, index) => (
            <div key={index} className='flex text-sm border-t text-white'>
              <div className='w-[10%] p-1 py-2 pl-2 border-r border-gray-300'>{index + 1}</div>
              <div
                className='w-[18%] py-2 px-3 border-r border-gray-300 truncate'>{i?.sender}
              </div>
              <div className='w-[18%]  py-2 px-3 border-r border-gray-300 truncate'>{i?.receiver}
              </div>
              <div className='w-[18%] py-2 px-3 border-r border-gray-300 '>{i?.remark}
              </div>
              <div className='w-[18%] py-2 px-3 border-r border-gray-300 '>{i?.status}
              </div>
              <div className='w-[18%] py-2 px-3 border-r border-gray-300'>
                {moment(i?.timestamp).format('MMMM Do YYYY')}
              </div>
            </div>))}
        </div>
      </div>
    </div>
  )
}

export default RequestHistory
