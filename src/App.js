import React from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux'
import Spinner from "./components/Spinner/Spinner";


function App({loginReducer}) {
    return (
        <Router>
            <Switch>
                {loginReducer.isLoading ? (
                    <Spinner/>
                    ) : (
                        <>
                        {loginReducer.isLogged ? (
                            <>
                                <Route path={'/mainPage'} component={MainPage}/>
                            </>
                        ) : (
                            <>
                                <Route path={'/'} component={LoginPage}/>
                            </>
                        )}
                        </>
                )}
            </Switch>
        </Router>
    );
}

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
};

export default connect(mapStateToProps)(App);
