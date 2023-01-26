import React from "react";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Review from "./Components/Review";
import Services from "./Components/Services";
import Showcase from "./Components/Showcase";
import { AboutData } from "./Data/AboutData";
import { BlogData } from "./Data/BlogData";
import { FooterData } from "./Data/FooterData";
import { MenuData } from "./Data/MenuData";
import { NavData } from "./Data/NavData";
import { ProductsData } from "./Data/ProductsData";
import { ReviewData } from "./Data/ReviewData";
import { ServicesData } from "./Data/ServicesData";
import { ShowcaseData } from "./Data/ShowcaseData";
import Globalstyle from "./Globalstyle";

function App() {
  return (
    <>
      <Globalstyle />
      <Navbar {...NavData}/>
      <Showcase {...ShowcaseData}/>
      <About {...AboutData}/>
      <Menu {...MenuData}/>
      <Services {...ServicesData}/>
      <Products {...ProductsData}/>
      <Review {...ReviewData}/>
      <Contact />
      <Blog {...BlogData}/>
      <Footer {...FooterData}/>
    </>
  );
}

export default App;
