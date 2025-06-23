import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';

const isTokenValid = (token) => {
    try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;
        return decoded.exp > now;
    } catch {
        return false;
    }
};

const RedirectIfAuth = ({ children }) => {
    const token = localStorage.getItem('token');

    if (token && isTokenValid(token)) {
        return <Navigate to="/myaccount" replace />;
    }

    return children;
};

export default RedirectIfAuth;
