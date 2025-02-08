import axios from "axios"
import { BaseUrl } from "../../Config"
import { ApiUrl } from "../../Config/ApiUrl"


export const AddBlog = async (req) => {

    console.log("this is get otp", req)
    try {

        const response = await axios.post(BaseUrl + ApiUrl.blog, req, {
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


export const GetBlog= async(req)=>{

    console.log("this is service data",req)
    try{

         const response = await axios.get(BaseUrl+ApiUrl.blog,{
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


export const PostBlog = async (req) => {

    console.log("this is get otp", req)
    try {

        const response = await axios.post(BaseUrl + ApiUrl.add, req, {
            headers: {
                // 'Content-Type': 'application/json',
                Authorization: "Token ff0c6f62e77b4a3a7d0df35b3ec7f891580f37c2",

            }
        })


        return response || []

    }
    catch (e) {
        console.log(e)

    }
}


export const UpdateBlog = async (req) => {

    console.log("this is form..", req)
    try {

        const response = await axios.patch(BaseUrl + ApiUrl.add, req, {
            headers: {
                // 'Content-Type': 'application/json',
                Authorization: "Token ff0c6f62e77b4a3a7d0df35b3ec7f891580f37c2",

            }
        })


        return response || []

    }
    catch (e) {
        console.log(e)

    }
}

export const DeleteBlog = async (req) => {
    console.log("This is delete API");
    try {
        const response = await axios.delete(BaseUrl + ApiUrl.add, {
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

export const Blog = async (req) => {

    console.log("this is get otp", req)
    try {

        const response = await axios.get(BaseUrl + ApiUrl.add,{
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


export const FaqAdmin = async (req) => {

    console.log("this is get otp", req)
    try {

        const response = await axios.post(BaseUrl + ApiUrl.faq, req, {
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

export const GetFaq = async (req) => {

    console.log("this is get otp", req)
    try {

        const response = await axios.get(BaseUrl + ApiUrl.faq,{
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


export const PatchFaq = async (req) => {

    console.log("this is get otp", req)
    try {

        const response = await axios.patch(BaseUrl + ApiUrl.faq, req, {
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



export const DeleteFaq = async (req) => {
    console.log("This is delete API");
    try {
        const response = await axios.delete(BaseUrl + ApiUrl.faq, {
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

