// BurgerMenu.tsx

import React, { useState } from "react";
import { menuData } from "../../../data/menuData";
import style from "../../../screens/Customers/main.module.scss";
import chevWhiteIcon from "../../../img/chevWhite.png";
import menuIcon from "../../../img/square.png";
import closeIcon from "../../../img/square.png";
import { MenuItem } from "../../../interface/customer.interface";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.burgerMenu}>
      <button className={style.burgerButton} onClick={toggleMenu}>
        <img src={isOpen ? closeIcon : menuIcon} alt="menu toggle" />
      </button>
      {isOpen && (
        <div className={style.burgerMenuContent}>
          {menuData.map((item: MenuItem, index: number) => (
            <div key={index} className={style.navFlex_item}>
              <div
                className={
                  item.isActive
                    ? `${style.itemImgGroup} ${style.activeImgGroup}`
                    : `${style.itemImgGroup}`
                }
              >
                <img src={item.icon} alt={item.altText} />
                <p className={style.navT}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
