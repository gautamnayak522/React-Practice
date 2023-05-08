import { useForm } from "react-hook-form";
import { LoginService } from "../services/LoginService";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { MainContext } from "../Context/MainContext";

function HookForm() {
    const { setuserName, setLogin } = useContext(MainContext)
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        LoginService.login(data).then(res => {
            console.log(res);
            if (res.data.message) {
                toast.error(res.data.message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
                reset()
                return
            }
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userName", res.data.userName);
            setuserName(res.data.userName)
            setLogin(true)
            toast.success('Login Succesfully !', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            navigate("/")

        })
            .catch(err => {

            })

    };

   


    return (
        <div className="container pt-5">

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email <span className="text-danger">*</span> : </label>
                    <input
                        className="form-control"
                        type="text"
                        name="email"
                        {...register("email", {
                            required: true,
                            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                        })}
                    />
                    {errors.email && errors.email.type === "required" && (
                        <p className="text-danger">Email is required.</p>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <p className="text-danger">Email is not valid.</p>
                    )}
                </div>
                <div>
                    <label>Password <span className="text-danger">*</span> : </label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        {...register("password", {
                            required: true,
                            minLength: 6
                        })}
                    />
                    {errors.password && errors.password.type === "required" && (
                        <p className="text-danger">Password is required.</p>
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                        <p className="text-danger">
                            Password should be at-least 6 characters.
                        </p>
                    )}
                </div>

                <div>
                    <input type="checkbox" name="savepassword" className="form-check-input" {...register("savepassword")} />
                    <label className="form-check-label">Remember me</label>
                </div>
                <div className="text-center pt-2">
                    <label></label>
                    <button type="submit" className="btn btn-secondary w-100 mb-2">Login</button>
                    <button type="button" onClick={() => reset()} className="btn btn-danger w-100">Reset</button>
                </div>
            </form>



        </div>);
}

export default HookForm;