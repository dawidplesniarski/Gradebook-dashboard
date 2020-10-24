import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {API_URL, compareSubjectArrays, getEmployeeSubjects} from "../../../utils/helpers";
import SelectTestCategory from "../../Atoms/SelectTestCategory/SelectTestCategory";
import {connect} from 'react-redux';
import axios from "axios";
import SelectStudentMenu from "../../Atoms/SelectStudentMenu/SelectStudentMenu";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import {Paper} from "@material-ui/core";

const AddQuizFormWrapper = styled.div`
  position: fixed;
  background-color: #FFF;
  left : 30%;
  top: 25%;
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

const StyledFormTitle = styled.p`
  font-family: Montserrat,serif;
  font-weight: 500;
  font-size: 25px;
`;

const SelectMenuWrapper = styled.div`
  width: 75%;
`;

const StyledSmallText = styled.p`
  font-family: Montserrat, serif;
  font-weight: normal;
  font-size: 1rem;
`;

const AddPermission = ({loginReducer}) => {
    const [subjectsData, setSubjectsData] = useState([]);
    const [studentsData, setStudentsData] = useState([]);
    const [subject, setSubject] = useState('');
    const [studentAlbums, setStudentAlbums] = useState([]);
    const employeeSubjects = getEmployeeSubjects(loginReducer.loginData.employee.subjectId);

    const fetchSubjects = () => {
        try {
            axios.get(`${API_URL}/subject/findAll`).then(res => {
                setSubjectsData(res.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    const fetchStudents = () => {
        try {
            axios.get(`${API_URL}/users/findAll`).then(res => {
                setStudentsData(res.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    function pushAlbumToArrays(album) {
      setStudentAlbums(oldArray => [...oldArray, album])
    };

    useEffect(() => {
        fetchSubjects();
        fetchStudents();
    }, []);

  return(
      <AddQuizFormWrapper>
          <StyledFormTitle>
              Dodaj albumy
          </StyledFormTitle>
          <SelectMenuWrapper>
              <SelectTestCategory
                  onChange={(event) => setSubject(event.target.value)}
                  name={'subjectName'}
                  placeholder={'Temat'}
                  data={compareSubjectArrays(subjectsData, employeeSubjects)}
              />
              <SelectStudentMenu
                  onChange={(event) => pushAlbumToArrays(event.target.value)}
                  name={'albumNo'}
                  placeholder={'Dodaj studenta'}
                  data={studentsData}/>
          </SelectMenuWrapper>
          <StyledSmallText>Albumy studentów:</StyledSmallText>
          <Paper style={{height: 100, width: 250, overflow: 'auto', textAlign: "center"}}>
              <List height={200}>
                  {
                      studentAlbums.map((e) =>
                          <ListItemText>
                              {e}
                          </ListItemText>)
                  }
              </List>
          </Paper>
      </AddQuizFormWrapper>
  );
};

const mapStateToProps = (loginReducer) => {
    return loginReducer;
};
export default connect(mapStateToProps)(AddPermission);