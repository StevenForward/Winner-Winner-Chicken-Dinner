import Login from "../components/Login"
import { Link } from "react-router-dom"

function LoginPage() {
    return <>
        <Login />
        <p>If you don't have an account <Link to='/SignUp'>Create an Account</Link></p>
    </>
}

export default LoginPage