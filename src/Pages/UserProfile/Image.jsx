import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { UserCount } from '../../Component/Services/User Count';
import { RxCross1 } from "react-icons/rx";
import { ProfileImage } from '../../Component/Services/ProfileReport.jsx';
const Image = ({ userId }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Toggle modal open/close
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const UserApi = async () => {
    setLoading(true);
    try {
      const response = await ProfileImage({ profile_id: userId });
      console.log("Images",response?.data?.data);
      setData(response?.data?.data); 
    } catch (error) {
      console.error("Error fetching user count:", error);
    } finally {
      setLoading(false); 
    }
  };


  const handleEyeClick = () => {
    UserApi();  
    handleOpen();
  };

  return (
    <div>
      <div className="mt-1.5 cursor-pointer px-7" onClick={handleEyeClick}>
        <FaRegEye style={{ fontSize: "24px" }} />
      </div>
      {open && (
        <div onClick={handleClose} className="fixed bg-black bg-opacity-50 z-50 h-[100vh] left-0 w-[100%] inset-0 py-20">
          <div onClick={(e) => e.stopPropagation()} className="h-[100%] mx-auto w-[70%]">
            <div className="lg:h-[100%] relative h-[50%] pl-10 m-auto w-[45vw] border rounded-md bg-white text-black shadow-lg">
            <div className='absolute right-2 top-2 cursor-pointer' onClick={handleClose}><RxCross1 style={{fontSize:"15px"}}/></div>
              <div className="font-semibold text-3xl mt-5 text-center">User's Profile</div>
              <div className="text-center">Brief outline of User's Profile</div>
              {loading && <div className="text-center mt-4">Loading...</div>}
              {Array.isArray(data) && data.length > 0 ? (
                data.map((i, index) => (
                  <div key={index} className="mt-5 text-center">
                  <img  className='h-full w-96 object-cover mx-auto' src={`http://192.168.1.188:8099${i?.image}`}/>
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

export default Image;
