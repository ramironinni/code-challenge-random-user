import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserDetails from '../UserDetails/UserDetails';
import NotFound from '../NotFound/NotFound';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/user-details">
                        <UserDetails />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
