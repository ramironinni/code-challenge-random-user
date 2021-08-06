import { Link } from 'react-router-dom';
import './GoBackBtn.css';

const GoBackBtn = () => {
    return (
        <Link to="/" className="go-back-btn">
            <span className="material-icons">navigate_before</span> Go back
        </Link>
    );
};

export default GoBackBtn;
