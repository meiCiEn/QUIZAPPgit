import React from 'react';
import ReactDOM from 'react-dom/client';
// Use this to create a router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import FindOutMore from "./pages/FindOutMore";
import NoPage from "./pages/NoPage";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export default function Index ()
{
  return (
    <React.StrictMode>
      <BrowserRouter>
      {/* Wrap content in <BrowserRouter> */}
        {/* <App /> */}
        {/* define <Routes> */}
        <Routes>
          {/* Layout is the parent route. It contains the navigation menu that will be displayed on every page. */}
          <Route path="/" element={ <Layout /> }>
          {/* nested <Route>s inherit and add to the parent route */}
          {/* The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /. */}
            <Route index element={ <Home /> } />
            <Route path="about" element={ <About /> } />
            <Route path="more" element={ <FindOutMore /> } />
            {/* Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page. */}
            <Route path="*" element={ <NoPage /> } />
          </Route>
        </Routes>

      </BrowserRouter>

    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(<Index />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
