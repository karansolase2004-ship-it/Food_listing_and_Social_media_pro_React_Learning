import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Createpost from "../components/Createpost";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import './App.css'
import Postlist from "../components/Postlist";
import Postlistprovider from "../store/post-list-store";

function App() {

  const [selectedtab, setselectedtab] = useState("Home");

  return (
    <Postlistprovider>
    <div className="app-container">
    <Sidebar 
    selectedtab={selectedtab}
    setselectedtab={setselectedtab}>
    </Sidebar>
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
