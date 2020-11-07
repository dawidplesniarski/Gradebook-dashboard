import React, {useEffect, useState} from "react";
import axios from 'axios';
import {StyledFormTitle, StyledContentWrapper, AddEmployeeCourseWrapper} from './AddEmployeeCourse.styles';
import {API_URL, TOKEN} from "../../../utils/helpers";
import SelectCourseMenu from "../../Atoms/SelectCourseMenu/SelectCourseMenu";
import Button from "../../Atoms/Button/Button";
import AlertComponent from "../../Atoms/Alert/Alert";

const AddEmployeeCourse = ({employeeData}) => {
    const [coursesData, setCoursesData] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [alertVisible, setAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);

    const fetchCourses = () => {
        axios.get(`${API_URL}/course/findAll`).then(res => {
            setCoursesData(res.data);
        }).catch(err => {
            console.log(err);
        })
    };

    const addEmployeeCourse = (employeeId) => {
        axios.put(`${API_URL}/employee/addEmployeeCourse`,{
            employeeId: employeeId,
            courseId: selectedCourse
        },{
            headers: {'Authorization': `Bearer ${TOKEN}`}
        }).then(res => {
            if(res.data) {
                setAlertVisible(true);
            }
        })
            .catch(err => {
                if (err) {
                    setErrorAlertVisible(true);
                }
            })
    }

    useEffect(() => {
        fetchCourses();
    }, [])

    return (
        <>
            {alertVisible && <AlertComponent type={'success'} onClick={() => setAlertVisible(false)} message={'Kierunek został dodany pomyślnie'}/>}
            {errorAlertVisible && <AlertComponent type={'error'} onClick={() => setErrorAlertVisible(false)} message={'Wybrany kierunek już jest przypisany'}/>}
            <AddEmployeeCourseWrapper>
                <StyledContentWrapper>
                    <StyledFormTitle>Przypisz nowy kierunek:</StyledFormTitle>
                    {coursesData.length > 0 &&
                    <SelectCourseMenu onChange={e => setSelectedCourse(e.target.value)}
                                      name={'Course'}
                                      placeholder={'Wszystkie kierunki'}
                                      data={coursesData}/>}
                    <Button disabled={!selectedCourse} onClick={async () => await addEmployeeCourse(employeeData._id)}>
                        Dodaj kierunek
                    </Button>
                </StyledContentWrapper>
            </AddEmployeeCourseWrapper>
        </>
    );
};

export default AddEmployeeCourse;