import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import SmallScreenNav from "./components/SmallSreenNav";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import Profile from "./components/pages/Profile/Profile";
import MealQrs from "./components/pages/mealQrs/MealQrs";
import Notifications from "./components/pages/Notifications/Notifications";
import Home from "./components/pages/Home.js/Home";
import Cart from "./components/pages/Cart/Cart";

function App() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [activePage, setActivePage] = useState(path);
  const [isRegistered,setIsRegister]=useState(false)

  useEffect(() => {
    if (!path) {
      setActivePage("/");
    } else {
      setActivePage(location.pathname.split("/")[1]);
      console.log(activePage);
    }
    //
const data =JSON.parse( localStorage.getItem("token"))
    if(data){
      console.log(data)
      setIsRegister(true)
    }
  }, []);

  return (
    <>
      <Header activePage={activePage} setActivePage={setActivePage} isRegistered={isRegistered} />
      <SmallScreenNav activePage={activePage} setActivePage={setActivePage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mealQrs" element={<MealQrs />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login setIsRegister={setIsRegister}/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
