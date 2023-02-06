import "./App.css";
import NavBar from "./components/Reusable/Navbar";
import Home from "./components/Global/Home";
import About from "./components/Global/About";
import Card from "./components/Landing/Card";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Reusable/Footer/Footer";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
