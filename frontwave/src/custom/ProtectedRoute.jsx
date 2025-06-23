// ProtectedRoute.js
import { jwtDecode } from 'jwt-decode';

import { Navigate } from 'react-router-dom';

const isTokensValid = (token) => {
    try {
        const decoded = jwtDecode(token)
        const now = Date.now() / 1000
        return decoded.exp > now;
    }
    catch {
        return false;
    }
}
const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token || !isTokensValid(token)) {
        return <Navigate to="/presentation" replace />;
    } else {
        <Navigate to="/myaccount" />
    }
    
    return children;

    
}





export default ProtectedRoute