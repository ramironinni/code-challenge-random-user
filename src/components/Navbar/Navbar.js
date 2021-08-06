import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-icon">
                <span className="material-icons">home</span>
            </Link>
            <h1 className="navbar-title">Meet Our Staff!</h1>
        </nav>
    );
};

export default Navbar;
