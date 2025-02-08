import axios from "axios"
import { BaseUrl } from "../../Config"
import { ApiUrl } from "../../Config/ApiUrl"


export const AddPlan = async (req) => {

    console.log("this is get otp", req)
    try {

        const response = await axios.post(BaseUrl + ApiUrl.plan, req, {
            headers: {
                Authorization: "Token ff0c6f62e77b4a3a7d0df35b3ec7f891580f37c2",

            }
        })


        return response || []

    }
    catch (e) {
        console.log(e)

    }
}


export const GetPlan = async (req) => {

    console.log("this is plan", req)
    try {

        const response = await axios.get(BaseUrl + ApiUrl.plan,{
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


export const UpdatePlan = async (req) => {

    console.log("this is form..", req)
    try {

        const response = await axios.patch(BaseUrl + ApiUrl.plan, req, {
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

export const DelPlan = async (req) => {
    console.log("This is delete API");
    try {
        const response = await axios.delete(BaseUrl + ApiUrl.plan, {
            data: req,
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Token ff0c6f62e77b4a3a7d0df35b3ec7f891580f37c2",
            }
        });
        return response || [];
    } catch (e) {
        console.log(e);
        return [];
    }
};


export const Plan = async (req) => {

    console.log("this is get otp", req)
    try {

        const response = await axios.get(BaseUrl + ApiUrl.module,{
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

export const PostPlan = async (req) => {

    console.log("this is get otp", req)
    try {

        const response = await axios.post(BaseUrl + ApiUrl.module, req, {
            
            headers: {
                Authorization: "Token ff0c6f62e77b4a3a7d0df35b3ec7f891580f37c2",

            }
        })


        return response || []

    }
    catch (e) {
        console.log(e)

    }
}



export const EditPlan = async (req) => {

    console.log("this is form..", req)
    try {

        const response = await axios.patch(BaseUrl + ApiUrl.module, req, {
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


export const PlanDel = async (req) => {
    console.log("This is delete API");
    try {
        const response = await axios.delete(BaseUrl + ApiUrl.module, {
            data: req,
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Token ff0c6f62e77b4a3a7d0df35b3ec7f891580f37c2",
            }
        });
        return response || [];
    } catch (e) {
        console.log(e);
        return [];
    }
};
