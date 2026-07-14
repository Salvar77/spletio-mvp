"use client";
import React from "react";
import classes from "./BurgerMenu.module.scss";

interface BurgerMenuProps {
  isOpen: boolean;
  handleOpen: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, handleOpen }) => {
  return (
    <div className={classes.hamburgerContainer}>
      <button
        className={`${classes.hamburger} ${classes.hamburger__spring} ${isOpen ? classes.isActive : ""}`}
        type="button"
        onClick={handleOpen}
        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
      >
        <span className={classes.hamburgerBox}>
          <span className={classes.hamburgerInner}></span>
        </span>
      </button>
    </div>
  );
};

export default BurgerMenu;
