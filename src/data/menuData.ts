// menuData.ts

import dashIcon from "../img/dash.png";
import squareIcon from "../img/square.png";
import cusIcon from "../img/cus.png";
import incIcon from "../img/inc.png";
import promIcon from "../img/prom.png";
import quesIcon from "../img/ques.png";
import { MenuItem } from "../interface/customer.interface";


export const menuData: MenuItem[] = [
  { icon: dashIcon, title: "Dashboard", altText: "dash",isActive:false },
  { icon: squareIcon, title: "Product", altText: "product", showChevron: true,isActive:false },
  { icon: cusIcon, title: "Customers", altText: "customers", showChevron: true ,isActive:true},
  { icon: incIcon, title: "Income", altText: "income", showChevron: true,isActive:false },
  { icon: promIcon, title: "Promote", altText: "promote", showChevron: true ,isActive:false},
  { icon: quesIcon, title: "Help", altText: "help", showChevron: true ,isActive:false}
];
