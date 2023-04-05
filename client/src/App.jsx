import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./page";
import { Footer } from "./components";
import LandingPage from "./page/LandingPage";

const styles = {
  headerStyles:
    "w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] sticky top-0 z-10",
  generateButtonStyles:
    "font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md",
  mainSectionStyles:
    "w-full bg-[#e4e7f2] min-h-[calc(100vh-73px)]",
};

const App = () => (
  <BrowserRouter>
    <header className={styles.headerStyles}>
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      <Link to="/create-post" className={styles.generateButtonStyles}>
        Generate New Image
      </Link>
      
    </header>
    <main className={styles.mainSectionStyles}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/gallary" element={<Home/>}/>
      </Routes>
    </main>
    <Footer logo={logo}/>
  </BrowserRouter>
);

export default App;
