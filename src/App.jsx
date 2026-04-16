import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import './App.css'

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FoodSection from "./components/FoodSection";
import LunchSection from "./components/LunchSection";
import SnacksSection from "./components/SnacksSection";
import DrinksSection from "./components/DrinksSection";
import MenuSection from "./components/MenuSection";
import Visiter from "./components/Visiter";
import FooterSection from "./components/FooterSection";
import News from "./components/News";
import AllFoodMenu from "./components/AllFoodMenu";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route
          path="/"
          element={
            <>
              <Home />
              <FoodSection />
              <LunchSection />
              <SnacksSection />
              <DrinksSection />
              <MenuSection />
              <Visiter />
            </>
          }
        />

        <Route path="/news" element={<News />} />
        <Route path="/menu" element={<AllFoodMenu />} />

      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <AnimatedRoutes />

      <FooterSection />

    </BrowserRouter>
  );
}

export default App;