import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
import { PlanDel } from '../Services/Admin Plan';

const PlanDelete = ({ item, DataApi  }) => {
    console.log("Dellll", item);
    const [open, setOpen] = useState(false);


    const handleOpen = () => setOpen(!open);
    const handleClose = () => setOpen(false);

    const DelApi = async (req) => {
        console.log(req);
        const response = await  PlanDel(req);
        // console.log("API response:", response);
        return response;
    };
    const handleDelete = async (id) => {
        console.log("Delete ID:", id);
        console.log("State object:", item);
        const req = {
            plan_id: item?.id,
        };
        console.log("Request:", req);
        const response = await DelApi(req);
        // console.log("response.....", response);

        if (response?.data?.response_code === 200) {
            // console.log("Deletion successful!");
            toast.success("Successfully Delete");
            handleClose();
            DataApi();

        } else {
            toast.error("Invalid error!")
        }
    };

    return (
        <div>
            <div onClick={handleOpen} className=''> <MdDelete className='w-8 h-5 text-xs rounded-md text-white bg-red-500' /></div>
            {open && (
                <div className="fixed bg-black bg-opacity-50 z-50 h-[100vh] left-0 w-[100%] inset-0 py-32">
                    <div onClick={(e) => e.stopPropagation()} className="h-[100%] mx-auto w-[70%]">
                        <div className="lg:h-[80%] h-[50%] px-5 m-auto w-[45vw] border rounded-md bg-white shadow-lg">
                            <div className="font-semibold text-3xl mt-20 text-center text-black">Are you sure you want to Delete?</div>
                            <div className="flex items-center justify-center mt-20 gap-2">
                                <div onClick={handleClose} className="border cursor-pointer border-indigo-300 text-indigo-500 w-28 h-9 py-1 rounded-md text-center">Close</div>
                                <button
                                    onClick={() => handleDelete(item?._id)}
                                    type="submit"
                                    className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white w-28 h-9 py-1 rounded-md text-center"
                                >
                                    Yes
                                </button>
                            </div>

                            {/* Optionally show the response message
                            {responseMessage && (
                                <div className="mt-4 text-center text-lg text-green-500">
                                    {responseMessage}
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
            )}
            <Toaster/>
        </div>
    )
}

export default PlanDelete
