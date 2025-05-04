// ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { useUserContext } from './UserContext';

export default function ProtectedRoute({ children }) {
    const {isUser} = useUserContext();

    console.log(isUser())
    if (!isUser()) {
    return <Navigate to="/login" />;
    }

    return children;
}
