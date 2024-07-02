// LeftSection.tsx

import React from "react";
import style from "../../../screens/Customers/main.module.scss";
import settingsIcon from "../../../img/settings.png";
import userIcon from "../../../img/user.png";
import chevWhiteIcon from "../../../img/chevWhite.png";

import chev from "../../../img/chev.png";
import { menuData } from "../../../data/menuData";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { MenuItem } from "../../../interface/customer.interface";
const LeftSection: React.FC = () => {
  return (
    <aside className={style.sidebar}>
      <div className={style.logoFLex}>
        <img src={settingsIcon} alt="settings" />
        <h1 className={style.logoText}>Dashboard</h1>
        <span className={style.logoDepens}>v.01</span>
      </div>
      <nav className={style.navFLex}>
        {menuData.map((item: MenuItem, index: number) => (
          <div
            key={index}
            className={
              item.isActive
                ? `${style.navFlex_item} ${style.activeItem}`
                : `${style.navFlex_item}`
            }
          >
            <div className={style.itemImgGroup}>
              <img src={item.icon} alt={item.altText} />
              <p className={style.navT}>{item.title}</p>
            </div>
            {item.showChevron && (
              <img src={item.isActive ? chevWhiteIcon : chev} alt="chevron" />
            )}
          </div>
        ))}
      </nav>
      <div className={style.currentUser}>
        <img src={userIcon} alt="user" />
        <div className={style.currentUserText}>
          <span>Evano</span>
          <p>Project Manager</p>
        </div>
      </div>
      <BurgerMenu />
    </aside>
  );
};

export default LeftSection;
