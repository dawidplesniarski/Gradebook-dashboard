import React, {useState} from "react";
import styled from "styled-components";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import axios from 'axios';

const StyledWrapper = styled.div`
height: 50%;
display: flex;
align-items: center;
flex-direction: column;
margin-top: 15%;
`;

const MainPage = ({loginReducer}) => {
    const [album, setAlbum] = useState('');
    const [newGrade, setGrade] = useState('');
    const [subjectId, setSubjectId] = useState('');
    const [status, setStatus] = useState('');
    const addGrade = () => {
        try {
            axios.post('https://node-app-4fun.herokuapp.com/grades/addGrade',
                {
                    studentAlbum: album,
                    grade: newGrade,
                    subject: subjectId
                }
            ).then(setStatus('Ocena dodana pomyślnie'));
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <StyledWrapper>
            {/*{ loginReducer.loginData ? <span>{loginReducer.loginData.employee.academicTitle}</span> : <span></span>}*/}
            {/*{ loginReducer.loginData ? <span>{loginReducer.loginData.employee.name}</span> : <span></span>}*/}
            {/*{ loginReducer.loginData ? <span>{loginReducer.loginData.employee.lastName}</span> : <span></span>}*/}
            <input className={'LoginPage-Input'} onChange={event => setAlbum(event.target.value)} placeholder={'album'}/>
            <input className={'LoginPage-Input'} onChange={event => setGrade(event.target.value)} placeholder={'ocena'}/>
            <input className={'LoginPage-Input'} onChange={event => setSubjectId(event.target.value)} placeholder={'przedmiot'}/>
            <button className={'LoginButton'} onClick={async() => await addGrade()}>Dodaj ocenę</button>
        </StyledWrapper>
    );
}

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
};

export default connect(mapStateToProps)(withRouter(MainPage));