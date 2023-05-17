import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route element={<App />}/>
        <Route path="/" element={<Home />}/>
        <Route path="movie/:id" element={<Movie/>}/>
        <Route path="search" element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
