import React from "react";
import NavButtons from "./NavButtons";
import { AiOutlineHome } from "react-icons/ai";
import { HiQrCode } from "react-icons/hi2";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SmallSreenNav = ({ activePage, setActivePage }) => {
  const navigate = useNavigate();

  const handleNavigate = (navigationPath) => {
    if (activePage === navigationPath) {
      console.log("same");
      return;
    }
    navigate(navigationPath);
    setActivePage(navigationPath);
  };

  return (
    <nav className="smallScreen_nav">
      <NavButtons
        activePage={activePage}
        icon={<AiOutlineHome />}
        name={"home"}
        navigationPath={"/"}
        handleNavigate={handleNavigate}
      />
      <NavButtons
        activePage={activePage}
        icon={<HiQrCode />}
        name={"mealQrs"}
        navigationPath={"mealQrs"}
        handleNavigate={handleNavigate}
      />
      <NavButtons
        activePage={activePage}
        icon={<IoIosNotificationsOutline />}
        name={"notifications"}
        navigationPath={"notifications"}
        handleNavigate={handleNavigate}
      />
      <NavButtons
        activePage={activePage}
        icon={<IoPersonCircleOutline />}
        name={"profile"}
        navigationPath={"profile"}
        handleNavigate={handleNavigate}
      />
    </nav>
  );
};

export default SmallSreenNav;
