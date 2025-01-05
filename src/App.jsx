 
import { Route, Routes } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import OurProjects from "./components/OurProjects";
import OurProducts from "./components/OurProducts";
import Blogs from "./components/Blogs";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./components/Home/Home";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "rgb(255, 0, 0)",
        }}
        outerStyle={{
          border: "2px solid rgb(255, 0, 0)",
        }}
      />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/projects" element={<OurProjects />} />
          <Route path="/products" element={<OurProducts />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  );
}

export default App;
