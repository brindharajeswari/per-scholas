// Route	                  Renders	                   Component
// /	              "This is the Homepage page"	         Home
// /about	        "This is theAabout page"	           About
// /stocks/:symbol	      A single stock	               Stock
// /stocks	                All stocks	               Dashboard



import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Stocks from "./Pages/Stocks";
import Nav from "./Components/Nav";
import Dashboard from "./Pages/Dashboard";


function App() {
  return (
    <div className="App">
      <Nav />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stocks/:symbol" element={<Stocks />} />
          <Route path="/stocks" element={<Dashboard />} />
          {/* <Route path="*" element={<> Could not find page..</>} />   */}
         </Routes>
      
    </div>
  );
}

export default App;
