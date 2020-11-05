import React, {useState, useEffect} from "react";
import axios from 'axios';
import {API_URL, TOKEN} from "../../../utils/helpers";
import SelectCourseMenu from "../../Atoms/SelectCourseMenu/SelectCourseMenu";
import Button from "../../Atoms/Button/Button";
import {connect} from 'react-redux';
import AlertComponent from "../../Atoms/Alert/Alert";
import {StyledFormTitle, StyledContentWrapper, AddStudentCourseWrapper} from './AddStudentCourse.styles';


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