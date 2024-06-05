import { Route, Routes } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import AdminDashboard from './pages/Admin/AdminDashboard/AdminDashboard';
import AdminLogin from './pages/Admin/AdminLogin/AdminLogin';

import './assets/scss/main.scss';

const App = () => {
    return (
        <>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                </Routes>
            </ScrollToTop>
        </>
    )
}

export default App;