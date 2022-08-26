import React from 'react';
import {Nav} from "./Nav"
import {Shop} from "./Shop"
import {About} from "./About"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css"
import {ItemDetail} from "./ItemDetail"

function App(){
  return (
    <BrowserRouter>
      <div>
        <Nav />
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/shop" element={<Shop></Shop>}></Route>
            <Route path=":id" element={<ItemDetail></ItemDetail>}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  )
}

function Home(){
  return(
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default App;
