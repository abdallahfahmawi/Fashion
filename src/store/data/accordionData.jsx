import { nanoid } from "@reduxjs/toolkit";

const accordionData = [
  {
    title: "CATEGORIES",
    id : nanoid(),
    items: [
      {
        type: "Men",
        amount: "20",
        id : nanoid()
      },
      {
        type: "Women",
        amount: "20",
        id : nanoid()
      },
      {
        type: "Bags",
        amount: "20",
        id : nanoid()
      },
      {
        type: "Clothing",
        amount: "20",
        id : nanoid()
      },
      {
        type: "Shoes",
        amount: "20",
        id : nanoid()
      },
      {
        type: "Accesssories",
        amount: "20",
        id : nanoid()
      },
      {
        type: "Kids",
        amount: "20",
        id : nanoid()
      },
      {
        type: "Kids",
        amount: "20",
        id : nanoid()
      },
      {
        type: "Kids",
        amount: "20",
        id : nanoid()
      },
    ],
  },
  {
    title: "BRANDING",
    id:nanoid(),
    items: [
      {
        type: "Louis Vuitton",
        id : nanoid()
      }, 
      {
        type: "Chanel",
        id : nanoid()
      },
      {
        type: "Hermes",
        id : nanoid()
      },
      {
        type: "Gucci",
        id : nanoid()
      },
     
    ],
  },
  {
    title: "Prices",
    id : nanoid(),
    items: [
      {
        type: "0$ - 100$",
        amount: "20",
        id : nanoid()
      },
      {
        type: "100$ - 500$",
        amount: "20",
        id : nanoid()
      },
      {
        type: "500$ - 1000$",
        amount: "20",
        id : nanoid()
      },
      {
        type: "1000$ - 1500$",
        amount: "20",
        id : nanoid()
      },
      {
        type: "1500$ - 1700$",
        amount: "20",
        id : nanoid()
      },
      {
        type: "1700$ - 2000$",
        amount: "20",
        id : nanoid()
      },
      {
        type: "2000$ - 2500$",
        amount: "20",
        id : nanoid()
      },
     
    ],
  },
  
  
];

export default accordionData