import React from "react";
import style from "../../../screens/Customers/main.module.scss";
const Pagination: React.FC = () => {
  return (
    <div className={style.customerBlock_footer}>
      <p>Showing data 1 to 8 of 256K entries</p>
      <ul className={style.page}>
        <li className={style.page__numbers}>&lt;</li>
        <li className={style.page__numbers}>1</li>
        <li className={`${style.page__numbers} ${style.active}`}>2</li>
        <li className={style.page__numbers}>3</li>
        <li className={style.page__numbers}>4</li>
        <li className={style.page__dots}>...</li>
        <li className={style.page__numbers}>40</li>
        <li className={style.page__numbers}>&gt;</li>
      </ul>
    </div>
  );
};

export default Pagination;
