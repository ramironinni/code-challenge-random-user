import './UserTile.css';

const UserTile = () => {
    return (
        <div className="user-tile">
            <div className="user-img-container">
                <img
                    className="user-img"
                    src="https://randomuser.me/api/portraits/women/74.jpg"
                    alt="user-profile"
                />
            </div>
            <div className="user-text-info-container">
                <div className="user-text-info-item-container">
                    <span className="user-text-info-icon material-icons">
                        person
                    </span>
                    <p className="user-text-info-item user-full-name">
                        Hannchen Dröge
                    </p>
                </div>
                <div className="user-text-info-item-container">
                    <span className="user-text-info-icon material-icons">
                        apartment
                    </span>
                    <p className="user-text-info-item user-city">
                        Bad Gottleuba-Berggießhübel
                    </p>
                </div>
                <div className="user-text-info-item-container">
                    <span className="user-text-info-icon material-icons">
                        public
                    </span>
                    <p className="user-text-info-item user-country">Germany</p>
                </div>
            </div>
        </div>
    );
};

export default UserTile;
