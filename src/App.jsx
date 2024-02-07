import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
import Bestseller from './Pages/Bestseller';
import Shop from './Pages/Shop';
import prodinfo from "./ProductInfo";
// import Landingpage from "./Pages/Landingpage";
import Home from "./Pages/Home";
function App() {

  const [msg,setMsg]=useState("");
  useEffect(()=>{
    fetch("http://localhost:8000/xyz")
    .then((res)=>res.json())
    .then((data)=>setMsg(data.msg));
  },[]);

  var men = [], women = [], kids = [];
  for (var i = 0; i < prodinfo.length; i++) {
    if (prodinfo[i].category === "men") {
      men.push(prodinfo[i])
    }
    else if (prodinfo[i].category === "women") {
      women.push(prodinfo[i])
    }
    else if (prodinfo[i].category === "kids") {
      kids.push(prodinfo[i])
    }
  }
  return (
    <div className="App">
      <h1>{msg}</h1>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route exact path="/bestseller" element={<Bestseller />} />
          <Route exact path="/men" element={<Shop arr={men} name="men" />} />
          <Route exact path="/women" element={<Shop arr={women} name='women' />} />
          <Route exact path="/kids" element={<Shop arr={kids} name='kids' />} />
        </Routes>
      </BrowserRouter> 

    </div>
  );

}

export default App;