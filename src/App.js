import React from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux'
import LoadingSpinner from "./components/Atoms/LoadingSpinner/Spinner";

const App = ({loginReducer}) =>{
    return (
        // <Router>
        //         <Switch>
        //             {loginReducer.isLoading ? (
        //                 <Spinner/>
        //             ) : (
        //                 <>
        //                     {loginReducer.isLogged ? (
        //                         <>
        //                             {/*<Route path={'/mainPage'} component={MainPage}/>*/}
        //                         </>
        //                     ) : (
        //                         <>
        //                             <Route exact path={'/'} component={LoginPage}/>
        //                             <Route path={'/mainPage'} component={MainPage}/>
        //                         </>
        //                     )}
        //                 </>
        //             )}
        //         </Switch>
        // </Router>
    <Router>
        <Switch>
            {loginReducer.isLoading ? (
                <LoadingSpinner/>
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
