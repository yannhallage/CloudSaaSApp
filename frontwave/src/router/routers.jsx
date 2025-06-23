import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Authentification from "../pages/authentification";
import Home_personnal from "../pages/waveWallet";
import CodeLoginStep from "../pages/CodeLoginStep";
import CodeOTP from "../pages/codeotp";
import Inscription from "../pages/inscription";
import NumberPhone from "../pages/number";
import Informations from "../pages/informations";
import MyAccount from "../pages/myaccount";
import Notfound from "../pages/notfound";
import RedirectIfAuth from "../custom/RedirectIfAuth";
import ProtectedRoute from "../custom/ProtectedRoute";

const Component_Router = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/presentation" replace />} />
                <Route path="/presentation" element={
                    <RedirectIfAuth>
                        <Home_personnal />
                    </RedirectIfAuth>
                } />
                <Route path="/authentification" element={
                    <RedirectIfAuth>
                        <Authentification />
                    </RedirectIfAuth>
                } />
                <Route path="/verification" element={<RedirectIfAuth>
                    <CodeLoginStep />
                </RedirectIfAuth>} />
                <Route path="/verification/otp" element={
                    <RedirectIfAuth>
                        <CodeOTP />
                    </RedirectIfAuth>
                } />
                <Route path="/inscription" element={
                    <RedirectIfAuth>
                        <NumberPhone />
                    </RedirectIfAuth>
                } />
                {/* <Route path="/inscription/number" element={<NumberPhone />} /> */}
                <Route path="/inscription/informations" element={
                    <RedirectIfAuth>
                        <Informations />
                    </RedirectIfAuth>
                } />
                <Route path="/myaccount" element={
                    <ProtectedRoute>
                        <MyAccount />
                    </ProtectedRoute>
                    } />
                <Route path="*" element={
                    <ProtectedRoute>
                        <Notfound />
                    </ProtectedRoute>
                } />
            </Routes>
        </Router>
    );
};

export default Component_Router;
