import axios from "axios"
import { BaseUrl } from "../../Config"
import { ApiUrl } from "../../Config/ApiUrl"

export const Common = async (req) => {

    console.log("this is get otp", req)
    try {

        const response = await axios.get(BaseUrl + ApiUrl.common,{
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


export const CommonMessage = async (req) => {

    console.log("this is get otp", req)
    try {

        const response = await axios.get(BaseUrl + ApiUrl.chat,{
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