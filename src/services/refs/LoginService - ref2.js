import { Navigate, useNavigate } from "react-router-dom";
import { BehaviorSubject } from "rxjs";
import http from "../../Interceptors/HttpInterceptor";
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";

const isLoggedIn = new BehaviorSubject(false);

export const LoginService = {
  
  setData: (d) => {
    console.log(d);
    isLoggedIn.next(d);
  },

  getData: () => isLoggedIn,
  
  checkLogin: () => isLoggedIn.value,
  
  LogIn: async (data,setuserName,setlog) => {
    await http.post("Login", { email: data.email, password: data.password })
      .then((res) => {
        console.log(res);
        if (res.data.message) {
          toast.error(res.data.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          });
          return
        }

        setuserName(res.data.userName)
        setlog(true)
        //userName = res.data.userName;
        // localStorage.setItem("isLoggedin", "true");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userName", res.data.userName);
        LoginService.setData(true);
        toast.success('Login Succesfully !', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
      )
      .catch((err) => console.log(err))
  },

  LogOut: () => {
    isLoggedIn.next(false);
    localStorage.removeItem('token');
  },
};

//Router gaurd
export function CheckAuth({ children }) {
  if (localStorage.getItem("token") && isLoggedIn.value) {
    return children;
  } else {
    LoginService.LogOut();
    //isLoggedIn.next(false)
    //navigate("/")
    return <Navigate to="/"></Navigate>;
  }
}
