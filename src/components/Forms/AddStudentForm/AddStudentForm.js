import React, {useState, useEffect} from "react";
import styled from "styled-components";
import TextInput from "../../Atoms/TextInput/TextInput";
import Switch from '@material-ui/core/Switch';
import List from "@material-ui/core/List";
import {Paper} from "@material-ui/core";
import Button from '../../Atoms/Button/Button';
import axios from 'axios';
import {API_URL} from "../../../utils/helpers";
import {connect} from 'react-redux';
import SelectCourseMenu from "../../Atoms/SelectCourseMenu/SelectCourseMenu";
import {getUniversities} from "../../../actions/universityActions";
import SelectUniversity from "../../Atoms/SelectUniversityMenu/SelectUniversityMenu";

const AddStudentFormWrapper = styled.div`
  //position: fixed;
  background-color: #FFF;
  //left : 30%;
  width: 700px;
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  align-items: center;
  @media (max-width: 1000px) {
    width: 500px;
  }
  @media (max-width: 800px) {
    width: 400px;
  }
  @media (max-width: 700px) {
    width: 350px;
  }
`;

const TextInputWrapper = styled.div`
  width: 80%;
`;

const StyledFormTitle = styled.p`
  font-family: Montserrat,serif;
  font-weight: 500;
  font-size: 25px;
`;

const StyledFormText = styled.p`
  font-family: Montserrat,serif;
  font-weight: normal;
  font-size: 20px;
`;

const StyledSwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledListItemButton = styled.button`
  font-family: Montserrat,serif;
  font-weight: normal;
  font-size: 1rem;
`;

const AddStudentForm = ({universityReducer}) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [albumNumber, setAlbumNumber] = useState('');
    const [enabled, setEnabled] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [universityId, setUniversityId] = useState('');
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [coursesData, setCoursesData] = useState([]);
    const [studentCourses, setStudentCourses] = useState([]);

    const fetchCourses = () => {
      try {
          axios.get(`${API_URL}/course/findAll`).then(res => {
             setCoursesData(res.data);
          });
      } catch(err) {
          console.log(err);
      }
    };

    const addStudent = () => {
        try {
            axios.post(`${API_URL}/users/addUser`,
                {
                    name: name,
                    lastName: lastName,
                    albumNo: albumNumber,
                    enabled: enabled,
                    login: login,
                    password: password,
                    universityId: universityId,
                    email: email,
                    imageUrl: imageUrl,
                    courseId: studentCourses
                });
        } catch (err) {
            console.log(err);
        }
    }

    function pushCourseToArray(course) {
        setStudentCourses(oldArray => [...oldArray, course])
    };

    function deleteCourseFromArray(course) {
        setStudentCourses(studentCourses.filter((e) => (e !== course)));
    };

    useEffect(() =>{
        fetchCourses();
    },[]);

    return(
        <AddStudentFormWrapper>
            <StyledFormTitle>Dodaj nowego studenta</StyledFormTitle>
            <TextInputWrapper>
                <TextInput onChange={(event) => setName(event.target.value)} type={'text'} name={'Name'} placeholder={'Imie'}/>
                <TextInput onChange={(event) => setLastName(event.target.value)} type={'text'} name={'Last Name'} placeholder={'Nazwisko'}/>
                <TextInput onChange={(event) => setAlbumNumber(event.target.value)} type={'text'} name={'Album'} placeholder={'Numer albumu'}/>
                <TextInput onChange={(event) => setLogin(event.target.value)} type={'text'} name={'Login'} placeholder={'Login'}/>
                <TextInput onChange={(event) => setPassword(event.target.value)} type={'password'} name={'Password'} placeholder={'Hasło'}/>
                <TextInput onChange={(event) => setEmail(event.target.value)} type={'text'} name={'Email'} placeholder={'Adres e-mail'}/>
                <TextInput onChange={(event) => setImageUrl(event.target.value)} type={'text'} name={'Image'} placeholder={'Link do zdjęcia'}/>
            </TextInputWrapper>
            <StyledSwitchWrapper>
                <StyledFormText>Aktywny: </StyledFormText>
                <Switch size={'normal'} checked={enabled} onChange={() => setEnabled(!enabled)}/>
            </StyledSwitchWrapper>
            <TextInputWrapper>
                <SelectUniversity
                    onChange={(event) => setUniversityId(event.target.value)}
                    name={'university'}
                    placeholder={'Dodaj uczelnie'}
                    data={universityReducer.universities}
                />
            </TextInputWrapper>
            {coursesData.length > 0 ?
                <TextInputWrapper>
                    <SelectCourseMenu
                        onChange={(event) => pushCourseToArray(event.target.value)}
                        name={'course'}
                        placeholder={'Dodaj kierunek'}
                        data={coursesData}/>
                </TextInputWrapper>
                 :
                <></>}
            <StyledFormText>Kierunki studiów:</StyledFormText>
            <Paper elevation={5} style={{height: 100, width: 250, overflow: 'auto', textAlign: "center", marginBottom: 30}}>
                <List height={200}>
                    {
                        studentCourses.map((element) =>
                            <StyledListItemButton
                                onClick={() => deleteCourseFromArray(element)}>
                                {element}
                            </StyledListItemButton>
                        )
                    }
                </List>
            </Paper>
            <Button onClick={async () => await addStudent()}>
                Dodaj studenta
            </Button>
        </AddStudentFormWrapper>
    );
};

const mapStateToProps = ({universityReducer}) => {
    return {universityReducer};
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUniversities: () => dispatch(getUniversities())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStudentForm);