import React, {useState, useEffect} from "react";
import axios from 'axios';
import {API_URL, TOKEN} from "../../../utils/helpers";
import SelectMenu from "../../Atoms/SelectMenu/SelectMenu";
import Button from "../../Atoms/Button/Button";
import AlertComponent from "../../Atoms/Alert/Alert";
import {StyledFormTitle, StyledContentWrapper, AddEmployeeSubjectWrapper} from './AddEmployeeSubject.styles';


const AddEmployeeSubject = ({employeeData}) => {
    const [subjectsData, setSubjectsData] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [alertVisible, setAlertVisible] = useState(false);

    const fetchAllSubjects = () => {
        axios.get(`${API_URL}/subject/findAll`).then(res => {
            setSubjectsData(res.data);
        }).catch(err => {
            console.log(err);
        })
    };

    const addEmployeeSubject = (employeeId) => {
        axios.put(`${API_URL}/employee/addEmployeeSubject`, {
            employeeId: employeeId,
            subjectId: selectedSubject
        }, {
            headers: {'Authorization': `Bearer ${TOKEN}`}
        }).then(setAlertVisible(true));
    }

    useEffect(() => {
        fetchAllSubjects();
    }, [])

    return (
        <>
            {alertVisible && <AlertComponent type={'success'} message={'Przedmiot został dodany pomyślnie'}
                                             onClick={() => setAlertVisible(false)}/>}
            <AddEmployeeSubjectWrapper>
                <StyledContentWrapper>
                    <StyledFormTitle>Przypisz nowy przedmiot:</StyledFormTitle>
                    {subjectsData.length > 0 &&
                    <SelectMenu onChange={e => setSelectedSubject(e.target.value)} name={'Subject'}
                                placeholder={'Przedmioty'} data={subjectsData}/>}
                    <Button disabled={!selectedSubject} onClick={async () => await addEmployeeSubject(employeeData._id)}>
                        Dodaj przedmiot
                    </Button>
                </StyledContentWrapper>
            </AddEmployeeSubjectWrapper>
        </>
    );
};

export default AddEmployeeSubject;