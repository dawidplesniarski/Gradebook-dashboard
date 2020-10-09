import React from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
    return (
        <Router>
            <Route path={'/'} component={LoginPage}/>
        </Router>
    );
}

export default App;
