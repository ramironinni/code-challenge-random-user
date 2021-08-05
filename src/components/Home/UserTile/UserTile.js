import './UserTile.css';
import { Link } from 'react-router-dom';

const UserTile = ({ picture, fullName, city, country, user }) => {
    return (
        <Link
            to={{ pathname: '/user-details', state: { user } }}
            className="user-tile"
        >
            <div className="user-img-container">
                <img className="user-img" src={picture} alt="user-profile" />
            </div>
            <div className="user-text-info-container">
                <div className="user-text-info-item-container">
                    <span className="user-text-info-icon material-icons">
                        person
                    </span>
                    <p className="user-text-info-item user-full-name">
                        {fullName}
                    </p>
                </div>
                <div className="user-text-info-item-container">
                    <span className="user-text-info-icon material-icons">
                        apartment
                    </span>
                    <p className="user-text-info-item user-city">{city}</p>
                </div>
                <div className="user-text-info-item-container">
                    <span className="user-text-info-icon material-icons">
                        public
                    </span>
                    <p className="user-text-info-item user-country">
                        {country}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default UserTile;
