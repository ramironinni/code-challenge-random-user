import './Home.css';
import UserTile from './UserTile/UserTile';

const Home = () => {
    return (
        <div className="home">
            <div className="user-tile-container">
                <UserTile />
                {/* <UserTile />
                <UserTile />
                <UserTile /> */}
            </div>
        </div>
    );
};

export default Home;
