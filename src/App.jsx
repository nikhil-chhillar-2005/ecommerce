import AOS from "aos";
import "aos/dist/aos.css";
import { use, useEffect, useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Hero from './components/hero';
import Product from './components/product' ;
import Topproduct from './components/TopProducts';
import Subscribe from './components/subscribe';
import Testenomials from './components/testenomials';
import Footer from './components/footer'
function App() {
  const [orderpopup,setorderpopup]=useState(false);
  const handlepopup=()=>{
    setorderpopup(!orderpopup);
  };

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100
    });
    AOS.refresh();
  },[]);
    

  return (
   <>
      <div className= "bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handlepopup={handlepopup} />
        <Hero handlepopup={handlepopup} />
        <Product />
        <Topproduct handlepopup={handlepopup} />
        <Banner />
        <Subscribe/>
        <Testenomials/>
        <Footer />
      </div>
   </>
    
  );
}

export default App;
