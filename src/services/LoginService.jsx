import { async } from "rxjs";
import http from "../Interceptors/HttpInterceptor";

export const LoginService = {
    login : async (data)=>{
        return await http.post("Login", { email: data.email, password: data.password })
    },

    logout(setLogin, setuserName){
        setLogin(false);
        setuserName("");
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
    }
}