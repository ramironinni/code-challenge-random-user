import './Home.css';
import NavigationBtns from './NavigationBtnsContainer/NavigationBtnsContainer';
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
            <NavigationBtns />
        </div>
    );
};

export default Home;
