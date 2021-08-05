import useFetch from '../../utils/useFetch';
import './Home.css';
import UserTile from './UserTile/UserTile';
import NavigationBtn from './NavigationBtn/NavigationBtn';

const Home = () => {
    const { data, isPending, error } = useFetch(
        'https://randomuser.me/api/?results=50'
    );

    return (
        <div className="home">
            {data && (
                <div className="wrapper">
                    <div className="user-tiles-container">
                        <UserTile
                            picture={data.results[0].picture.medium}
                            fullName={
                                data.results[0].name.first +
                                ' ' +
                                data.results[0].name.last
                            }
                            city={data.results[0].location.city}
                            country={data.results[0].location.country}
                        />
                        <UserTile
                            picture={data.results[1].picture.medium}
                            fullName={
                                data.results[1].name.first +
                                ' ' +
                                data.results[1].name.last
                            }
                            city={data.results[1].location.city}
                            country={data.results[1].location.country}
                        />
                    </div>
                    <div className="navigation-btns">
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
            )}
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
        </div>
    );
};

export default Home;
