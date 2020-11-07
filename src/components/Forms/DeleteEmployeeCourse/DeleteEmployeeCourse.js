import React, {useState} from "react";
import {StyledFormTitle, StyledContentWrapper, DeleteEmployeeCourseWrapper} from './DeleteEmployeeCourse.styles';
import SelectCourseMenu from "../../Atoms/SelectCourseMenu/SelectCourseMenu";
import axios from 'axios';
import Button from "../../Atoms/Button/Button";
import {API_URL, TOKEN} from "../../../utils/helpers";
import AlertComponent from "../../Atoms/Alert/Alert";

const DeleteEmployeeCourse = ({employeeData}) => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [alertVisible, setAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);

    const deleteCourse = (employeeId) => {
        axios.put(`${API_URL}/employee/deleteEmployeeCourse`, {
            employeeId: employeeId,
            courseId: selectedCourse
        }, {
            headers: {'Authorization': `Bearer ${TOKEN}`}
        }).then(res => {
            if (res.data) {
                setAlertVisible(true);
            }
        }).catch(err => {
            if (err) {
                setErrorAlertVisible(true);
            }
        })
    };

    return (
        <>
            {errorAlertVisible && <AlertComponent type={'error'} message={'Wystąpił błąd podczas usuwania kierunku'}
                                                  onClick={() => setErrorAlertVisible(false)}/>}
            {alertVisible && <AlertComponent type={'success'} message={'Kierunek został usunięty pomyślnie'}
                                             onClick={() => setAlertVisible(false)}/>}
            <DeleteEmployeeCourseWrapper>
                <StyledContentWrapper>
                    <StyledFormTitle>Usuń kierunek:</StyledFormTitle>
                    <SelectCourseMenu onChange={e => setSelectedCourse(e.target.value)}
                                      name={'Course'}
                                      placeholder={`Kierunki pracownika ${employeeData.name} ${employeeData.lastName}`}
                                      data={employeeData.courseId}/>
                    <Button disabled={!selectedCourse}
                            onClick={async () => await deleteCourse(employeeData._id)}>
                        Usuń kierunek
                    </Button>
                </StyledContentWrapper>
            </DeleteEmployeeCourseWrapper>
        </>
    );
};

export default DeleteEmployeeCourse;