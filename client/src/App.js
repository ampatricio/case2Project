import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import IndexPage from './pages/Index.js';
import ViewpartsdataPage from './pages/Viewpartsdata.js';
import ViewaircraftPage from './pages/Viewaircraft.js';
import AddpartsPage from './pages/Addparts.js';
import UpdatepartsPage from './pages/Updateparts.js';
import AddaircraftPage from './pages/Addaircraft.js';
import UpdateaircraftPage from './pages/Updateaircraft.js';
import SearchaircraftPage from './pages/Searchaircraft.js';
import AircraftsearchresultsPage from './pages/Aircraftsearchresults.js';
import SignIn from './pages/signIn.js'
import SignUp from './pages/signUp.js';
import history from './components/history';
import { getUser } from './actions/users'
import logo from './images/logo.png';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, );

    return (
            //<SignIn />
            <Router history={history}>
            {/* <SignIn /> */}
        {/* <UserContext.Provider value={{ firebase, user, firstTime, profile, posts, setLoading }}>
          {loading && <Loading><CircularProgress size={60} /></Loading>} */}
          <Switch>
          <Route exact path="/control">
            <IndexPage />
          </Route>
          <Route exact path="/viewpartsdata">
            <ViewpartsdataPage />
          </Route>
          <Route exact path="/viewaircraft">
            <ViewaircraftPage />
          </Route>
          <Route exact path="/addparts">
            <AddpartsPage />
          </Route>
          <Route exact path="/updateparts">
            <UpdatepartsPage />
          </Route>
          <Route exact path="/addaircraft">
            <AddaircraftPage />
          </Route>
          <Route exact path="/updateaircraft">
            <UpdateaircraftPage />
          </Route>
          <Route exact path="/searchaircraft">
            <SearchaircraftPage />
          </Route>
          <Route exact path="/aircraftsearchresults">
            <AircraftsearchresultsPage />
          </Route>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
            
        
    )};

export default App;