import React from "react";
import "./style.scss";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Home } from "./components/Home/Home.jsx";
import { Offers } from "./components/Offers/Offers.jsx";
import { AboutUs } from "./components/AboutUs/AboutUs.jsx";
import HomeScreen from "./screens/HomeScreen";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { OfferCard } from "./components/OfferCard/OfferCard.jsx";
import { EcoFriendly } from "./components/EcoFriendly/EcoFriendly.jsx";
import { Gallery } from "./components/Gallery/Gallery.jsx";
import { News } from "./components/News/News";
import { Subscribe } from "./components/Subscribe/Subscribe.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Home />
        <Offers />
        <AboutUs />
        <HomeScreen />
        <Testimonial />
        <OfferCard />
        <EcoFriendly />
        <Gallery />
        <News />
        <Subscribe />
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
