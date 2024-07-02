import React from "react";
import style from "../../../screens/Customers/main.module.scss";
import { Customer } from "../../../interface/customer.interface";

interface CustomerTableProps {
  customers: Customer[];
}

const CustomerTable: React.FC<CustomerTableProps> = ({ customers }) => {
  return (
    <div className={style.customerUseBlock}>
      <div className={style.customerBootomHeader}>
        <h3>Customer Name</h3>
        <h3>Company</h3>
        <h3>Phone Number</h3>
        <h3>Email</h3>
        <h3>Country</h3>
        <h3>Status</h3>
      </div>
      {customers.map((customer, index) => (
        <ul key={index} className={style.userBlockItem}>
          <li> {customer.Customer_Name}</li>
          <li> {customer.Company}</li>
          <li> {customer.Phone_Number}</li>
          <li> {customer.Email}</li>
          <li> {customer.Country}</li>
          <li
            className={
              customer.Status === "Active" ? style.active : style.inactive
            }
          >
            {customer.Status}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default CustomerTable;
