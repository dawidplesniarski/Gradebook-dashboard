import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import axios from 'axios';
import {API_URL, TOKEN} from "../../../utils/helpers";
import SelectCourseMenu from "../../Atoms/SelectCourseMenu/SelectCourseMenu";
import Button from "../../Atoms/Button/Button";
import {connect} from 'react-redux';
import {studentReducer} from "../../../reducers/studentReducer";
import AlertComponent from "../../Atoms/Alert/Alert";

const AddStudentCourseWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #fafafa;
  border-radius: 15px;
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

const StyledContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  width: 80%;
`;

const StyledFormTitle = styled.p`
  font-family: Montserrat,serif;
  font-weight: 500;
  font-size: 25px;
  @media(max-width: 768px) {
    font-size: 20px;
  }
`;

const AddStudentCourse = ({studentReducer}) => {
    const [courseId, setCourseId] = useState(null);
    const [coursesData, setCoursesData] = useState([]);
    const [alertVisible, setAlertVisible] = useState(false);

    const fetchAllCourses = () => {
        try {
            axios.get(`${API_URL}/course/findAll`).then(res => {
               setCoursesData(res.data);
            });
        } catch(err) {
            console.log(err);
        }
    }

    const addNewCourse = () => {
        try {
            axios.post(`${API_URL}/users/addUserCourse`,{
                albumNo: studentReducer.currentStudent.albumNo,
                courseId: courseId
            },{
                headers: {'Authorization': `Bearer ${TOKEN}`}
            }).then(setAlertVisible(true));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() =>{
        fetchAllCourses();
    },[])

    return(
        <>
            {alertVisible && <AlertComponent type={'success'} message={'Kierunek został dodany pomyślnie'} onClick={() => setAlertVisible(false)}/>}
            <AddStudentCourseWrapper>
                <StyledContentWrapper>
                    <StyledFormTitle>Dodaj nowy kierunek studiów</StyledFormTitle>
                    {coursesData &&
                    <SelectCourseMenu data={coursesData} placeholder={'Wybierz kierunek'} onChange={e => setCourseId(e.target.value)} name={'Courses'}/>}
                    <Button disabled={!courseId} onClick={async () => await addNewCourse()}>
                        Dodaj kierunek
                    </Button>
                </StyledContentWrapper>
            </AddStudentCourseWrapper>
        </>
    );
};

const mapStateToProps = ({studentReducer}) => {
    return {studentReducer};
}

export default connect (mapStateToProps)(AddStudentCourse);