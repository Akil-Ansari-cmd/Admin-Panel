import axios from "axios"
import { ApiUrl } from "../../Config/ApiUrl"
import { BaseUrl } from "../../Config";


export const SignUp= async(req)=>{

    console.log("this is signup",req);
    try{

         const response = await axios.post(BaseUrl+ApiUrl.sign,req,{
            headers:{
                'Content-Type' : 'application/json',
                Authorization: "Token ff0c6f62e77b4a3a7d0df35b3ec7f891580f37c2",
            },
         });

         return response || [];

    }
    catch(e){
        console.log(e)

    }
}
