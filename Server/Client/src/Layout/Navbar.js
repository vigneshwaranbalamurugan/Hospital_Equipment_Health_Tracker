import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/authContext';
import '../styles/navbar.css'

const Navbar = () => {
    const navigate = useNavigate();
    const { logout } = useAuth(); 
    const { userRole } = useAuth();
    const handleLogout = () => {
        logout();
        localStorage.clear();
    };

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className='navbar-item'>Welcome,{userRole}</li>
                <li className="navbar-item" onClick={() => navigate('/machines')}>Dashboard</li>
               { userRole === 'Admin' && <li className="navbar-item" onClick={() => navigate('/add')}>Add</li>}
                <li className="navbar-item" onClick={handleLogout}>Logout</li>
            </ul>
        </nav>
    );
};

export default Navbar;
