import React from "react";
import style from "../../../screens/Customers/main.module.scss";
import { Customer } from "../../../interface/customer.interface";

interface CustomerListMobileProps {
  customers: Customer[];
}

const CustomerListMobile: React.FC<CustomerListMobileProps> = ({
  customers,
}) => {
  return (
    <div className={style.custemoreMobileBlock}>
      <div className={style.customerMobile}>
        <div className={style.customerMobileItem}>
          <h3>Customer Name</h3>
          {customers.map((customer) => (
            <p key={customer.Customer_Name}>{customer.Customer_Name}</p>
          ))}
        </div>

        <div className={style.customerMobileItem}>
          <h3>Company</h3>
          {customers.map((customer) => (
            <p key={customer.Customer_Name}>{customer.Company}</p>
          ))}
        </div>

        <div className={style.customerMobileItem}>
          <h3>Phone Number</h3>
          {customers.map((customer) => (
            <p key={customer.Customer_Name}>{customer.Phone_Number}</p>
          ))}
        </div>

        <div className={style.customerMobileItem}>
          <h3>Email</h3>
          {customers.map((customer) => (
            <p key={customer.Customer_Name}>{customer.Email}</p>
          ))}
        </div>

        <div className={style.customerMobileItem}>
          <h3>Country</h3>
          {customers.map((customer) => (
            <p key={customer.Customer_Name}>{customer.Country}</p>
          ))}
        </div>

        <div className={style.customerMobileItem}>
          <h3>Status</h3>
          {customers.map((customer) => (
            <p
              key={customer.Customer_Name}
              className={
                customer.Status === "Active" ? style.active : style.inactive
              }
            >
              {customer.Status}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerListMobile;
