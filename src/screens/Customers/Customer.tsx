import React from "react";
import style from "./main.module.scss";
import LeftSection from "../../components/Customers/LeftSection/LeftSection";
import RightSetion from "../../components/Customers/RightSection/RightSetion";
const Customer = () => {
  return (
    <main className={style.main}>
      <LeftSection />
      <RightSetion />
    </main>
  );
};

export default Customer;
