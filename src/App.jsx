// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'



// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import Home from "./components/home/Home";
// // import Footer from "./components/layout/Footer";
// import Header from "./components/layout/Header";
// import Contact from "./components/contact/Contact";
// // import Cart from "./components/cart/Cart";
// // import Shipping from "./components/cart/Shipping";
// // import ConfirmOrder from "./components/cart/ConfirmOrder";
// // import PaymentSuccess from "./components/cart/PaymentSuccess";
// import Login from "./components/login/Login";
// import Profile from "./components/profile/Profile";
// // import MyOrders from "./components/myOrders/MyOrders";
// // import OrderDetails from "./components/myOrders/OrderDetails";
// // import Dashboard from "./components/admin/Dashboard";
// // import Users from "./components/admin/Users";
// // import Orders from "./components/admin/Orders";
// // import About from "./components/about/About";
// import NotFound from "./components/layout/NotFound";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loadUser } from "./redux/actions/user";
// import toast from "react-hot-toast";
// import { ProtectedRoute } from "protected-route-react";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";






// ! if any one ckick landing page then redirect to Result page 
import Result from "./components/Search Result/Result";

// import "./colors.scss"


// import Result from './Result';
import History from "./History/History";
// 'src\History\History.jsx';
import Landing from './components/Landing page/Landing';
// import Login from "./components/login/Login"



function App() {
  // const dispatch = useDispatch(); //import { useDispatch, useSelector } from "react-redux";
  // const { error, message, isAuthenticated, user } = useSelector(
  //   (state) => state.auth
  // ); // state.auth come from  \src\redux\store.js\9
  // //   loadUser for all data of user  
  // useEffect(() => {
  //   dispatch(loadUser()); 
  // }, [dispatch]);

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //     dispatch({
  //       type: "clearError",
  //     });
  //   }
  //   if (message) {
  //     toast.success(message);
  //     dispatch({
  //       type: "clearMessage",
  //     });
  //   }
  // }, [dispatch, error, message]);


  return (





    <Router>
    <Routes>
      <Route path="/history" element={<History/>} />
      <Route path="/" element={<Landing/>} />
      <Route path="/result" element={<Result/>} />
      {/* <Route path="/" element={<Login/>} /> */}
    </Routes>
  </Router>
   
  );
}

export default App
