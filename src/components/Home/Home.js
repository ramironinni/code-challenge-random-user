import './Home.css';
import NavigationBtns from './NavigationBtnsContainer/NavigationBtnsContainer';
import UserTile from './UserTile/UserTile';

const Home = () => {
    return (
        <div className="home">
            <div className="user-tiles-container">
                <UserTile />
                <UserTile />
                <UserTile />
            </div>
            <NavigationBtns />
        </div>
    );
};

export default Home;
