import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HairTypes from "./pages/HairTypes";
import Products from "./pages/Products";
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import LoginPage from "./pages/LoginPage";
import './css/general.css';
import { UserProvider } from "./contexts/UserContext";
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoute from "./contexts/ProtectedRoute";
import YourStore from "./pages/YourStore";
import Profile from "./pages/Profile";
import ProductMaker from "./pages/ProductMaker";


function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar /> 
        <div className="routes-body">
          <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path = "/HairTypes" element = {<HairTypes/>} />
            <Route path = "/Products" element = {<Products/>} />
            <Route path = "/Contact" element = {<Contact/>} />
            <Route path = "/Cart" element = {<Cart/>} />
            <Route path="/Login" element={<LoginPage/>}/>
            <Route path="/SignUp" element={<SignUpPage/>}/>
            <Route path="/YourStore" element={
              <ProtectedRoute>
                <YourStore />
              </ProtectedRoute>}/>
            <Route path="/Profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>}/>
            <Route path="/ProductMaker" element={
              <ProtectedRoute>
                <ProductMaker />
              </ProtectedRoute>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </UserProvider>
  );
}

export default App;