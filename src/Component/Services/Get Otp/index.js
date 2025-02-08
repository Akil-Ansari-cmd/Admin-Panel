import axios from "axios"
import { BaseUrl, BaseUrl1 } from "../../Config"
import { ApiUrl } from "../../Config/ApiUrl"


export const GetOtp = async (req) => {

    console.log("this is get otp", req)
    try {

        const response = await axios.post(BaseUrl + ApiUrl.get, req, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem("token")}`,

            }
        })


        return response || []

    }
    catch (e) {
        console.log(e)

    }
}

export const AdminOtp = async (req) => {

    console.log("this is get otp", req)
    try {

        const response = await axios.post(BaseUrl + ApiUrl.get, req, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Token ff0c6f62e77b4a3a7d0df35b3ec7f891580f37c2",

            }
        })


        return response || []

    }
    catch (e) {
        console.log(e)

    }
}


export const AdminManage = async (req) => {

    console.log("this is get otp", req)
    try {

        const response = await axios.get(BaseUrl + ApiUrl.manage, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Token ff0c6f62e77b4a3a7d0df35b3ec7f891580f37c2",

            }
        })


        return response || []

    }
    catch (e) {
        console.log(e)

    }
}


export const AdminVerify = async (req) => {

    console.log("this is get otp", req)
    try {

        const response = await axios.post(BaseUrl + ApiUrl.verify, req, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Token ff0c6f62e77b4a3a7d0df35b3ec7f891580f37c2",

            }
        })


        return response || []

    }
    catch (e) {
        console.log(e)

    }
}

export const AdminUpdate= async(req)=>{

    console.log("this is service data",req)
    try{

         const response = await axios.patch(BaseUrl+ApiUrl.manage,req,{
            headers:{
                'Content-Type': 'application/json',
                Authorization: "Token ff0c6f62e77b4a3a7d0df35b3ec7f891580f37c2",
                
                
            }
         })

         return response || []

    }
    catch(e){
        console.log(e)

    }
}


export const StatusUpdate= async(req)=>{

    console.log("this is service data",req)
    try{

         const response = await axios.get(BaseUrl+ApiUrl.status,{
            headers:{
                'Content-Type': 'application/json',
                Authorization: "Token ff0c6f62e77b4a3a7d0df35b3ec7f891580f37c2",
                
                
            }
         })

         return response || []

    }
    catch(e){
        console.log(e)

    }
}

export const ActiveApi= async(req)=>{

    console.log("this is service data",req)
    try{

         const response = await axios.patch(BaseUrl+ApiUrl.status,req,{
            headers:{
                'Content-Type': 'application/json',
                Authorization: "Token ff0c6f62e77b4a3a7d0df35b3ec7f891580f37c2",
                
                
            }
         })

         return response || []

    }
    catch(e){
        console.log(e)

    }
}





export const VerifyOtp = async (req) => {

    console.log("this is get otp", req)
    try {

        const response = await axios.post(BaseUrl + ApiUrl.verify, req, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem("token")}`,

            }
        })


        return response || []

    }
    catch (e) {
        console.log(e)

    }
}

export const DataGet = async () => {
    try {
        const response = await axios.get(BaseUrl + ApiUrl.matched,{
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem("token")}`,

            }
        })
        return response || []
    }
    catch (e) {
        console.log(e)

    }
}
console.log(localStorage.getItem("token"),"token")

export const DataUpdate= async(req)=>{

    console.log("this is service data",req)
    try{

         const response = await axios.patch(BaseUrl+ApiUrl.matched,req,{
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem("token")}`,
                
                
            }
         })

         return response || []

    }
    catch(e){
        console.log(e)

    }
}





