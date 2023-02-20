import { nanoid } from "@reduxjs/toolkit";
import { Fragment } from "react";
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import HomePage from "./pages/HomePage/HomePage";



function App() {

  const headerMenu = [
     {
      name : "Home",
      path : "home",
      id : nanoid()
     },
     {
      name : "Shop",
      path : "shop",
      id : nanoid(),
     },
     {
      name : "Pages",
      path : "",
      id : nanoid(),
     },
     {
      name : "Blog",
      path : "blog",
      id : nanoid(),
     },
     {
      name : "Contacts",
      path : "contacts",
      id : nanoid(),
     }
  ]


  return (
    <div>
      <Header headerMenu={headerMenu}/>
      <HomePage/>
      <Footer/>
      
    </div>
  );
}

export default App;
