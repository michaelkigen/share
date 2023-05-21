import React from "react";

const NavButtons = ({
  activePage,
  icon,
  name,
  handleNavigate,
  navigationPath,
  children,
}) => {
  return (
    <button
      type="button"
      className={`${activePage === navigationPath ? "activePage" : ""}`}
      onClick={() => handleNavigate(navigationPath)}
    >
      {children}
      <i>{icon}</i>
      <p>{name}</p>
    </button>
  );
};

export default NavButtons;
