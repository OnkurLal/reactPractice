import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MainComponent from "./components/main-component";
import "./style.css";

const App = () => {
  return (
    <>
      <Navbar />
      <MainComponent />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
