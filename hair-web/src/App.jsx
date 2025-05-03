import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Navbar from "./components/Navbar"
import Login from './components/Login';
import Register from './components/Register';

function App() {

  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    console.log("User is logged", user.email);

  } else {
    console.log("Penis")
  }

  return (
    <>
      <Navbar/>

      <Login />
      <Register />
    </>
  )
}

export default App
