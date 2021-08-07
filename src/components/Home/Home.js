import useFetch from '../../utils/useFetch';
import './Home.css';
import UserTile from './UserTile/UserTile';
import PaginationBtn from './PaginationBtn/PaginationBtn';
import { useState } from 'react';

const Home = () => {
    let resultValue;

    if (window.matchMedia('(min-width: 1024px)').matches) {
        resultValue = 8;
    } else if (window.matchMedia('(min-width: 720px)').matches) {
        resultValue = 4;
    } else {
        resultValue = 2;
    }

    const [page, setPage] = useState(1);
    const [results, setResults] = useState(resultValue);

    const handleResize = () => {
        if (window.matchMedia('(min-width: 1024px)').matches) {
            setResults(8);
        } else if (window.matchMedia('(min-width: 720px)').matches) {
            setResults(4);
        } else {
            setResults(2);
        }
    };

    window.addEventListener('resize', handleResize);

    const { data, isPending, error } = useFetch(
        `https://randomuser.me/api/?inc=name,location,email,login,picture&results=${results}&seed=abc&page=`,
        page,
        results
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
                <div className="home-wrapper">
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
                    <div className="pagination-container">
                        <div className="pagination-controllers">
                            <PaginationBtn
                                icon="navigate_before"
                                type="pagination-btn-before"
                                changePage="-1"
                                handleClick={handleClick}
                            />
                            <div className="pagination-current-page-number">
                                {page}
                            </div>
                            <PaginationBtn
                                icon="navigate_next"
                                type="pagination-btn-next"
                                changePage="1"
                                handleClick={handleClick}
                            />
                        </div>
                    </div>
                </div>
            )}
            {isPending && (
                <div className="users-loading-container">
                    <div className="users-loading">Loading ...</div>
                </div>
            )}
            {error && <div>{error}</div>}
        </div>
    );
};

export default Home;
