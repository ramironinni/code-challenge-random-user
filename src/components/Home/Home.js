import useFetch from '../../utils/useFetch';
import './Home.css';
import UserTile from './UserTile/UserTile';
import PaginationBtn from './PaginationBtn/PaginationBtn';
import { useState } from 'react';

const Home = () => {
    const [page, setPage] = useState(1);
    const [results, setResults] = useState(2);

    const { data, isPending, error } = useFetch(
        `https://randomuser.me/api/?inc=name,location,email,login,picture&results=${results}&seed=abc&page=`,
        page
    );

    const handleClick = (changePage) => {
        changePage = Number(changePage);
        if ((changePage > 0 && page <= 50) || (changePage < 0 && page > 1)) {
            setPage(page + changePage);
        }
    };

    return (
        <div className="home">
            {data && (
                <div className="wrapper">
                    <div className="user-tiles-container">
                        {data.results.map((user, index) => (
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
                        ))}
                    </div>
                </div>
            )}
            {/* {data && console.log(data)} */}
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            <div className="pagination-container">
                <div className="pagination-controllers">
                    <PaginationBtn
                        icon="navigate_before"
                        type="pagination-btn-before"
                        changePage="-1"
                        handleClick={handleClick}
                    />
                    <div className="pagination-current-page-number">{page}</div>
                    <PaginationBtn
                        icon="navigate_next"
                        type="pagination-btn-next"
                        changePage="1"
                        handleClick={handleClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
