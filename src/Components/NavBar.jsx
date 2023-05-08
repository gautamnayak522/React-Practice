import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { LoginService } from "../services/LoginService";
import { MainContext } from "../Context/MainContext";
import { toast } from "react-toastify";


function NavBar() {

    const navigate = useNavigate();
    const { isLoggedIn, userName, setLogin, setuserName } = useContext(MainContext);

    console.log("navbar render");

    const logout = () => {
        LoginService.logout(setLogin, setuserName);
        navigate("login")
        toast.success("Logged out successfully",{
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">React Demo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <NavLink className={({ isActive }) => (isActive ? 'selected' : '') + " nav-link"} to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? 'selected' : '') + " nav-link"} to="employee">Employee</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? 'selected' : '') + " nav-link"} to="department">Department</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? 'selected' : '') + " nav-link"} to="form-practice">Form-Practice</NavLink>
                            </li>

                            {/* <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? 'selected' : '') + " nav-link"} to="login">react-hook-form</NavLink>
                        </li> */}

                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? 'selected' : '') + " nav-link"} to="pagination">Pagination</NavLink>
                            </li>
                        </ul>

                        {isLoggedIn &&
                            <div>
                                <span> Welcome  <strong>{userName}</strong> </span>

                                <button className="btn btn-danger" onClick={() => { logout() }}>Logout</button>
                            </div>
                        }
                        {!isLoggedIn && <button className="btn btn-primary" onClick={() => navigate('login')} >Login</button>}

                    </div>
                </div>
            </nav>

            <Outlet></Outlet>
        </>
    );
}

export default NavBar;

