import React, { useEffect, useState } from 'react'
import { CommonMessage } from '../../Component/Services/Common Search';
import { useLocation } from 'react-router-dom';

const GetMessage = () => {
    const location = useLocation();
    const { state } = location; 

    
    console.log(state, "Planning");  

      const [data, setData] = useState()
        const DataApi = async (id) => {
    
            console.log("id", id)
    
            const response = await CommonMessage({ profile_id: id });
            console.log("ChatMessage..........", response?.data);
            setData(response?.data?.data)
        }

         useEffect(() => {
                DataApi(state?.id);
            }, [])
  return (
    <div>
            <div className="grid grid-cols-3 gap-4">
                {data && data?.map((i, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                        <div className="font-bold text-gray-800 mb-2">Message: {i?.message}</div>
                        <div className="text-gray-600">File: {i?.file}</div>
                        <div className="text-gray-600">Receiver UserName: {i?.receiver_username}</div>
                        <div className="text-gray-600">Sender Username: {i?.sender_username}</div>
                        <div className="text-gray-600">Sender Full Name: {i?.sender_full_name}</div>
                        <div className="text-gray-600">Receiver Full Name: {i?.receiver_full_name}</div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default GetMessage
