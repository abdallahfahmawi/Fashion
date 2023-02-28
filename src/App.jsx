import { nanoid } from "@reduxjs/toolkit";
import { Fragment } from "react";
import { Route ,Routes } from "react-router-dom";
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {
  const headerMenu = [
    {
      name: "Home",
      path: "/",
      id: nanoid(),
    },
    {
      name: "Shop",
      path: "shop",
      id: nanoid(),
    },
    {
      name: "Pages",
      path: "",
      id: nanoid(),
    },
    {
      name: "Blog",
      path: "blog",
      id: nanoid(),
    },
    {
      name: "Contacts",
      path: "contacts",
      id: nanoid(),
    },
  ];

  return (
    <Fragment>
      <Header headerMenu={headerMenu} />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/shop" element={<ShopPage/>} />
      </Routes>
        
      
      <Footer />
    </Fragment>
  );
}

export default App;
