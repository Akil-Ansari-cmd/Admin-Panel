import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AdminOtp, AdminVerify } from '../../Component/Services/Get Otp';
// import { AdminOtp, AdminVerify } from '../Services/Get Otp';

const Panel = () => {
    const Navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const [data, setData] = useState({
        email: "",
        otp: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        console.log(e.target.value)

        setData(() => ({
            ...data,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Otp()
        console.log("data", data);
    }

    const Otp = async () => {
        const data1 = await AdminOtp(data);

        console.log(data1, "data1")

        if (data1.status === 200) {

            setOpen(true)
            toast.success("Otp Sent");


        }
        else {
            setOpen(false)
        }
    }

    const req ={
        email:data?.email,
        otp:data?.otp



    }

    const handleverifyOtp=async(e)=>{
        e.preventDefault()
        
        const otpdata = await AdminVerify(req)
        console.log(">>>>>>",otpdata)
        if (otpdata?.data?.response_code === 200) {
            toast.success('Successfully Verify!')
            console.log("Navigating to /Admin");
            Navigate("/Admin");
          } else {
            
            toast.error('Wrong otp!')
          }
    
          console.log(otpdata);  
      }
    return (
        <div>
            <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... h-screen left-0 w-[100%] flex items-center justify-center'>
                <form onSubmit={handleSubmit} className='flex items-center justify-center pb-20 py-10 m-auto lg:w-[40vw] md:w-[60vw] w-[90vw] border rounded-md bg-white shadow-lg'>
                    <div>
                        <div className='font-semibold text-3xl mt-5 text-center'>Admin Login</div>
                        <div className='ml-10'>
                            {/* <div className=' text-gray-400 mt-5'>Email id</div> */}
                            <input name='email' onChange={handleChange} value={data.email} className='outline-none mt-8 w-80 h-10 rounded-md border border-gray-400 placeholder:pl-5' type='text'  placeholder='Enter Email:'/>
                        </div>
                        {open && <div>
                            <input type='text' name='otp' onChange={handleChange} value={data.otp} className='outline-none w-80 h-10 rounded-md border border-gray-400 ml-10 mt-8 placeholder:pl-5' placeholder='Enter Otp' />
                        </div>}
                        {!open ? (<button type='submit' className='p-3 rounded-xl mt-8 cursor-pointer mx-32 w-[40%] text-white text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... '>
                            Send Otp
                        </button>) :
                            (<button onClick={handleverifyOtp} className='p-3 mt-8  mx-32 cursor-pointer rounded-xl w-[40%] text-white text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... '>
                                Verify otp
                            </button>)}
                    </div>
                </form>
            </div>
            <Toaster/>
        </div>
    )
}

export default Panel