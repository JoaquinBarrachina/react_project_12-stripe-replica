import React from "react";
import "./App.css";

//Components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </React.Fragment>
  );
}

export default App;
