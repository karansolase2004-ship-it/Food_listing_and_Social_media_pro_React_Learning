import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import './App.css'
import Postlistprovider from "../store/post-list-store";

function App() {

  return (
    <Postlistprovider>
    <div className="app-container">
    <Sidebar></Sidebar>
    <div className="content">
    <Header></Header>
    <Outlet/>
    <Footer></Footer>
    </div>
    </div>
    </Postlistprovider>
  );
}

export default App;
