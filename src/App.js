import React, {useEffect} from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import StudentsPage from "./pages/StudentsPage";
import CurrentStudentDetails from "./pages/CurrentStudentDetails";
import {Switch, Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import LoadingSpinner from "./components/Atoms/LoadingSpinner/Spinner";
import {authCheck} from "./actions/loginActions";

const App = ({loginReducer, authCheck, history}) =>{
    useEffect(() => {
        // authCheck(() => history.push('/mainPage'), ()=> history.push('/'));
    },[])
    return (
        <Switch>
            {loginReducer.isLoading ? (
                <LoadingSpinner/>
            ) : (
                <>
                    {loginReducer.isLogged ? (
                        <>
                            <Route exact path={'/mainPage'} component={MainPage}/>
                            <Route path={'/studentsPage'} component={StudentsPage}/>
                            <Route path={'/studentDetails'} component={CurrentStudentDetails}/>
                        </>
                    ) : (
                        <>
                            <Route path={'/'} component={LoginPage}/>
                        </>
                    )}
                </>
            )}
        </Switch>
    );
}

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
};

const mapDispatchToProps = (dispatch) => {
    return {
        authCheck: (successCallback, errorCallback) => dispatch(authCheck(successCallback, errorCallback))
    }
}

const AppWithRouter = withRouter(App);

export default connect(mapStateToProps, mapDispatchToProps)(AppWithRouter);
