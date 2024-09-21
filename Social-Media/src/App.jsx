import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import PostListContextProvider from "./store/PostList-Context";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListContextProvider>
      <Header></Header>
      <div className="main-content">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        {selectedTab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
      </div>
      <Footer></Footer>
    </PostListContextProvider>
  )
}

export default App;
