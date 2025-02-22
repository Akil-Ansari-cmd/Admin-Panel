import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { VisitorHistory } from '../../Component/Services/User Count';
import toast, { Toaster } from 'react-hot-toast';

const VisitoryPlan = () => {
    const location = useLocation();
    const { state } = location; 

   
    console.log(state, "Planning"); 

    const [data, setData] = useState()
    const DataApi = async (id) => {

        console.log("id", id)

        const response = await VisitorHistory({ profile_id: id });
        console.log("Blog..........", response?.data);

        
        if (response?.data?.data) {
            setData(response?.data?.data);
            if (response?.data?.response_code === 200) {
                toast.success("Data fetched successfully");
            } else {
                toast.error("There is no data");
            }
        } else {
            toast.error("No response data available");
        }

    };

    useEffect(() => {
        DataApi(state?.id);
    }, [])


    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {data && data?.map((i, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                        <div className="font-bold text-gray-800 mb-2">Name: {i?.user_profile?.user_name}</div>
                        <div className="text-gray-600">Type: {i?.plan?.plan_type}</div>
                        <div className="text-gray-600">Validity: {i?.plan?.plan_validity}</div>
                        <div className="text-gray-600">Payment Method: {i?.payment_method}</div>
                        <div className="text-gray-600">Payment No. is: {i?.payment_no}</div>
                    </div>
                ))}
            </div>
            <Toaster/>
        </div>
    )
}

export default VisitoryPlan
