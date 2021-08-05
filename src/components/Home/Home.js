import useFetch from '../../utils/useFetch';
import './Home.css';
import UserTile from './UserTile/UserTile';
import NavigationBtn from './NavigationBtn/NavigationBtn';

const Home = () => {
    const { data, isPending, error } = useFetch(
        'https://randomuser.me/api/?inc=name,location,email,login,picture&results=50'
    );

    let maxUsers = 2;

    const handleClick = (e) => {
        console.log(e.target);
    };

    return (
        <div className="home">
            {data && (
                <div className="wrapper">
                    <div className="user-tiles-container">
                        {data.results.map((user, index) =>
                            index < maxUsers ? (
                                <UserTile
                                    picture={user.picture.medium}
                                    fullName={
                                        user.name.first + ' ' + user.name.last
                                    }
                                    city={user.location.city}
                                    country={user.location.country}
                                    user={user}
                                    key={index}
                                />
                            ) : (
                                ''
                            )
                        )}
                    </div>
                </div>
            )}
            {/* {data && console.log(data)} */}
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            <div className="navigation-btns" onClick={handleClick}>
                <NavigationBtn
                    icon="navigate_before"
                    type="navigation-btn-before"
                />
                <NavigationBtn
                    icon="navigate_next"
                    type="navigation-btn-next"
                />
            </div>
        </div>
    );
};

export default Home;
