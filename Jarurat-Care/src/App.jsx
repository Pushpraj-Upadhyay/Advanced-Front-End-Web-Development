import Sidebar from "./components/Sidebar";
import ServiceListContextProvider from "./store/ServiceList-Context";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import ServiceList from "./components/ServiceList";
import CreateService from "./components/CreateService";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <ServiceListContextProvider>
      <div className="main-content">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        {selectedTab === "Home" ? <ServiceList></ServiceList> : <CreateService></CreateService>}
      </div>
    </ServiceListContextProvider>
  )
}

export default App;
