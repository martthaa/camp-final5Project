import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, BrowserRouter, Routes,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './store';
import './style.scss';
//import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header.jsx';
import { Home } from './components/Home/Home.jsx';
import { Offers } from './components/Offers/Offers.jsx';
import { AboutUs } from './components/AboutUs/AboutUs.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route  path='/home' element={<HomeScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />

    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
