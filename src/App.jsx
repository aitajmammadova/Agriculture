import { Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import './Home.css'
import './Responsive.css'
import Footer from './components/Footer'
import Home from './pages/Home';
import Headerr from './components/Headerr';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Portfolio_single from './pages/Portfolio_single/';
import About from './pages/About';
import Blog_single from './pages/Blog_single/';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Shop_single from './pages/Shop_single';
import Service from './pages/Service';
import Service_single from './pages/Service_single';
import { useEffect } from "react";
import { connect } from "react-redux";
import Team from "./pages/Team";
 


function App({ dispatch }) {
  useEffect(() => {
    fetch("http://localhost:1313/products")
      .then((a) => a.json())
      .then((a) =>
        dispatch({
          type: "SET_PRODUCTS",
          payload: a,
        })
      );
  });

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      {pathname !== "/not-found" && <Headerr />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/portfolio_single/:id" element={<Portfolio_single />} />
        <Route path="/blog/blog_single/:id" element={<Blog_single />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shop-single/:id" element={<Shop_single />}></Route>
        <Route path="/services" element={<Service />}></Route>
        <Route path="/service-single" element={<Service_single />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/team" element={<Team />}></Route>

      </Routes>
      {pathname !== "/not-found" && <Footer />}
    </>
  )
}

export default connect()(App)
