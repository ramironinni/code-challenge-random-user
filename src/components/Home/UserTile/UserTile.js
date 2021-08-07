import './UserTile.css';
import { Link } from 'react-router-dom';
import TextInfoItemContainer from './TextInfoItemContainer/TextInfoItemContainer';

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
                <TextInfoItemContainer text={fullName} icon="person" />
                <TextInfoItemContainer text={city} icon="apartment" />
                <TextInfoItemContainer text={country} icon="public" />
            </div>
        </Link>
    );
};

export default UserTile;
