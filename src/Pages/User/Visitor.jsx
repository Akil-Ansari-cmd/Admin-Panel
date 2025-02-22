// import React, { useEffect, useState } from 'react'
// import { FaRegEye } from "react-icons/fa";
// import { UserCount } from '../../Component/Services/User Count';
// const Visitor = ({ userId}) => {


//     console.log("id",userId)
//     const [open, setOpen] = useState(false);

//     const handleOpen = () => setOpen(!open);
//     const handleClose = () => setOpen(false);

//     const [data, setData] = useState()
//     const UserApi = async () => {
//         const response = await UserCount({ profile_id: userId })

//         setData(response)
//     }

//     useEffect(() => {

//         userId && UserApi();

//     }, [userId])
//     console.log("object", data);



//     return (
//         <div>
//             <div className='mt-1.5' onClick={handleOpen}><FaRegEye style={{ fontSize: "24px" }} /></div>
//             {open && (
//                 <div onClick={handleClose} className="fixed bg-black bg-opacity-50 z-50 h-[100vh] left-0 w-[100%] inset-0 py-20">
//                     <div onClick={(e) => e.stopPropagation()} className="h-[100%] mx-auto w-[70%]">
//                         <div className="lg:h-[100%] h-[50%] pl-10 m-auto w-[45vw] border rounded-md bg-white shadow-lg">
//                             <div className="font-semibold text-3xl mt-5 text-center">User's Count</div>
//                             <div className="text-center">Brief outline of User's Countyy</div>
//                             {Array.isArray(data) && data.map((i, index) => (
//                                 <div key={index} className="mt-5 text-center">
//                                     {/* <div className="text-xl font-medium">User {index + 1}</div> */}
//                                     <div>Visitor count is{i?.visitor_count}</div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             )}

//         </div>
//     )
// }

// export default Visitor


import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { UserCount } from '../../Component/Services/User Count';
import { RxCross1 } from "react-icons/rx";
const Visitor = ({ userId }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Toggle modal open/close
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Function to fetch user count based on the provided user id
  const UserApi = async () => {
    // if (!id) return; // Avoid calling if no id is available
    setLoading(true); // Set loading state to true while data is being fetched
    try {
      const response = await UserCount({ profile_id: userId });
      setData(response); // Store the fetched data
    } catch (error) {
      console.error("Error fetching user count:", error);
    } finally {
      setLoading(false); // Set loading state to false once data is fetched
    }
  };

  // Handle the eye icon click (triggers API call and opens the modal)
  const handleEyeClick = () => {
    UserApi();  // Fetch the user count
    handleOpen(); // Open the modal
  };

  return (
    <div>
      <div className="mt-1.5 cursor-pointer" onClick={handleEyeClick}>
        <FaRegEye style={{ fontSize: "24px" }} />
      </div>
      {open && (
        <div onClick={handleClose} className="fixed bg-black bg-opacity-50 z-50 h-[100vh] left-0 w-[100%] inset-0 py-20">
          <div onClick={(e) => e.stopPropagation()} className="h-[100%] mx-auto w-[70%]">
            <div className="lg:h-[100%] relative h-[50%] pl-10 m-auto w-[45vw] border rounded-md bg-white text-black shadow-lg">
            <div className='absolute right-2 top-2 cursor-pointer' onClick={handleClose}><RxCross1 style={{fontSize:"15px"}}/></div>
              <div className="font-semibold text-3xl mt-5 text-center">User's Count</div>
              <div className="text-center">Brief outline of User's Count</div>
              {loading && <div className="text-center mt-4">Loading...</div>}
              {Array.isArray(data) && data.length > 0 ? (
                data.map((i, index) => (
                  <div key={index} className="mt-5 text-center">
                    <div>Visitor count is {i?.visitor_count}</div>
                  </div>
                ))
              ) : (
                <div className="mt-5 text-center">No data available.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Visitor;

