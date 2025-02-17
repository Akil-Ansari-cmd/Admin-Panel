import axios from "axios"
import { BaseUrl } from "../../Config"
import { ApiUrl } from "../../Config/ApiUrl"



export const History = async (req) => {

    console.log("this is plan", req)
    try {

        const response = await axios.get(BaseUrl + ApiUrl.history,{
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

export const EditHistory = async (req) => {

    console.log("this is plan", req)
    try {

        const response = await axios.patch(BaseUrl + ApiUrl.history,req,{
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