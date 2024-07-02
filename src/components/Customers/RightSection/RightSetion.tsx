import React, { useState } from "react";
import searchIcon from "../../../img/search.png";
import style from "../../../screens/Customers/main.module.scss";
import { customers } from "../../../data/customersData";
import SearchInput from "../../../widget/Customers/SearchInput/SearchInput";
import CustomerTable from "../../../widget/Customers/CustomerTable/CustomerTable";
import CustomerListMobile from "../../../widget/Customers/CustomerMobileList/CustomerMobileList";
import Pagination from "../../../widget/Customers/Pagination/Pagination";

const RightSection: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const filterCustomers = customers.filter((customer) =>
    customer.Customer_Name.toLocaleLowerCase().includes(
      inputValue.toLocaleLowerCase()
    )
  );

  return (
    <section className={style.rightSectionContainer}>
      <h1>Hello Evano 👋🏼</h1>

      <div className={style.customerBlock}>
        <div className={style.customerBlock__header}>
          <div className={style.customerHeader}>
            <h3>All Customers</h3>
            <span>Active members</span>
          </div>
          <SearchInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            searchIcon={searchIcon}
          />
        </div>

        <CustomerTable customers={filterCustomers} />

        <CustomerListMobile customers={customers} />

        {filterCustomers.length > 0 ? (
          <Pagination />
        ) : (
          <h3 className={style.customesIsntFind}>Customers cannot find</h3>
        )}
      </div>
    </section>
  );
};

export default RightSection;
