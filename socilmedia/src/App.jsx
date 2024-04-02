import Header from "./component/Header"
import React, { useState } from "react"
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./component/Sidebar";
import "./App.css"
import Form from "./component/Form";
import Postlist from "./component/Postlist";
import PostListProvider from "./store/Post-list-store";

function App() {
  const [selectedTab, setselectedTab]= useState("create post")
 
  return (
    <PostListProvider>
    <div className="container">
    <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab}></Sidebar>
  <div className="content">  <Header></Header>
  { selectedTab==="Home"?
  <Postlist></Postlist>:<Form></Form>
}
  <Footer></Footer></div>
    </div>
    </PostListProvider>
  )
}

export default App
