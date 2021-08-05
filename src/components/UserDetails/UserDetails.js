import { useHistory, useLocation } from 'react-router-dom';
import TextInfo from './TextInfo/TextInfo';

const UserDetails = () => {
    const history = useHistory();
    const data = useLocation();
    const user = data.state.user;

    return (
        <div className="UserDetails">
            <div className="user-details-tile">
                <div className="user-details-picture">
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

            <button
                className="user-details-go-back"
                onClick={() => history.push('/')}
            >
                <span className="material-icons">navigate_before</span> Go back
            </button>
            <div>{console.log(user)}</div>
        </div>
    );
};

export default UserDetails;
