import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HairTypes from "./pages/HairTypes";
import Products from "./pages/Products";
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import './css/general.css';


function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="routes-body">
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path = "/HairTypes" element = {<HairTypes/>} />
          <Route path = "/Products" element = {<Products/>} />
          <Route path = "/Contact" element = {<Contact/>} />
          <Route path = "/Cart" element = {<Cart/>} />


        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;