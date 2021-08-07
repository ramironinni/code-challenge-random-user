import { useLocation } from 'react-router-dom';
import GoBackBtn from '../GoBackBtn/GoBackBtn';
import TextInfo from './TextInfo/TextInfo';
import './UserDetails.css';

const UserDetails = () => {
    const data = useLocation();
    const user = data.state.user;

    return (
        <div className="user-details">
            <div className="user-details-wrapper">
                <div className="user-details-tile">
                    <div className="user-details-picture-container">
                        <img src={user.picture.large} alt="user" />
                    </div>
                    <div className="user-details-text-info-container">
                        <TextInfo
                            text={user.name.first + ' ' + user.name.last}
                            icon="person"
                        />
                        <TextInfo text={user.login.username} icon="add" />
                        <TextInfo text={user.email} icon="email" />
                        <TextInfo text={user.location.city} icon="apartment" />
                        <TextInfo text={user.location.country} icon="public" />
                    </div>
                </div>
                <GoBackBtn />
            </div>
        </div>
    );
};

export default UserDetails;
