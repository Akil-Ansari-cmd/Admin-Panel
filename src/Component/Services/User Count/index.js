import axios from "axios"
import { BaseUrl } from "../../Config"
import { ApiUrl } from "../../Config/ApiUrl"



export const UserCount = async (req) => {

    console.log("this is plan", req)
    try {

        const response = await axios.get(BaseUrl + ApiUrl.count,{
            params:req,
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


export const VisitorHistory = async (req) => {

    console.log("this is get otp", req)
    try {

        const response = await axios.get(BaseUrl + ApiUrl.visitor,{
            params:req,
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