import logo from './logo.svg';
import './App.css';
import Employee from './Components/Employee';
import Department from './Components/Department';
import { useEffect, useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes, useParams, useRoutes, Redirect, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import FormPractice from './Components/form-practice';
import HookForm from './Components/react-hook-form';
import PageNotFound from './Components/PageNotFound';
import Pagination from './Components/pagination/Pagination';
import ViewProduct from './Components/pagination/view-product';
import { ToastContainer } from 'react-toastify';
import { MainContext } from './Context/MainContext';
import { CheckAuth } from './Gaurds/CheckAuth';

function App() {

  const [userName, setuserName] = useState("");
  const [isLoggedIn, setLogin] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    if (localStorage.getItem("token")) {
      setuserName(localStorage.getItem("userName"))
      setLogin(true)
      setIsLoaded(true)
    }
  }

  console.log("i am app");
  return (
    <>
      <MainContext.Provider value={{ isLoggedIn, userName, setLogin, setuserName }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={NavBar}>
              <Route path='/' Component={Home}></Route>
              <Route path='login' Component={HookForm}></Route>
              <Route path='employee' element={<CheckAuth> <Employee /> </CheckAuth>}></Route>
              <Route path='department' element={<CheckAuth><Department /></CheckAuth>}></Route>
              <Route path='form-practice' element={<CheckAuth><FormPractice /></CheckAuth>}></Route>
              <Route path='pagination' element={<CheckAuth><Pagination /></CheckAuth>}></Route>
              <Route path='view-product/:id' element={<CheckAuth><ViewProduct /></CheckAuth>}></Route>
            </Route>
            <Route path="*" element={<Navigate replace to="/404" />} />
            <Route path="/404" Component={PageNotFound} />
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
      <ToastContainer />
    </>

  );
}

export default App;
