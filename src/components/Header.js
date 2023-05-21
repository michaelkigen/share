import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavButtons from "./NavButtons";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { AiOutlineHome } from "react-icons/ai";
import { HiQrCode } from "react-icons/hi2";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineWbSunny } from "react-icons/md";

const Header = ({ activePage, setActivePage,isRegistered }) => {
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
    <header className="row">
      <div className="header__left">
        <Link to={"/"} onClick={() => handleNavigate("/")}>
          <img className="logo" src="logo.png" alt="logo" />
        </Link>
      </div>
      <nav className="header__right">
        <div className="auth">
         {!isRegistered ?<div className="not__Registered">
            <Link to={"/register"}>register</Link>
            <button type="button">Login</button>
          </div>:
          <nav className="registered">
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
            <button
              type="button"
              className={`${activePage === "profile" ? "activePage" : ""}`}
              onClick={() => handleNavigate("profile")}
            >
              <i>
                <IoPersonCircleOutline />
              </i>
              <p>profile</p>
            </button>
          </nav>}
        </div>
        <button
          className={`cart__btn ${activePage === "cart" ? "activePage" : ""}`}
          type="button"
          onClick={() => handleNavigate("cart")}
        >
          <i>
            <AiOutlineShoppingCart />
          </i>
          <div className="count">4</div>
        </button>
        <button type="button" className="darklight__mode">
          <MdOutlineWbSunny />
        </button>
      </nav>
    </header>
  );
};

export default Header;
