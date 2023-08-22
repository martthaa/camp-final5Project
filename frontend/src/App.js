import React from 'react'
import './style.scss';
import {Container} from 'react-bootstrap';
import {Outlet} from 'react-router-dom';
import {Header} from './components/Header/Header.jsx'
import {Footer} from './components/Footer/Footer.jsx'
import {Home} from './components/Home/Home.jsx'
import {Offers} from './components/Offers/Offers.jsx'
import {AboutUs} from './components/AboutUs/AboutUs.jsx'
import {Product} from './components/Product/Product.jsx'
import ProductList from './components/Product/Product'; 
import HomeScreen from './screens/HomeScreen';
import products from './products';
import {Testimonial} from './components/Testimonial/Testimonial';
import {OfferCard} from './components/OfferCard/OfferCard.jsx';
import { EcoFriendly } from './components/EcoFriendly/EcoFriendly.jsx';
import { Gallery } from './components/Gallery/Gallery.jsx';
import { News } from './components/News/News';
import { Subscribe } from './components/Subscribe/Subscribe.jsx';


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
    </div>
  )
}

export default App