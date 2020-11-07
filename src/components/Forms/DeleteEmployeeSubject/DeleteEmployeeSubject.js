import React, {useState} from "react";
import axios from 'axios';
import {StyledFormTitle, StyledContentWrapper, DeleteEmployeeSubjectWrapper} from './DeleteEmployeeSubject.styles';
import SelectMenu from "../../Atoms/SelectMenu/SelectMenu";
import Button from "../../Atoms/Button/Button";
import {API_URL, TOKEN} from "../../../utils/helpers";
import AlertComponent from "../../Atoms/Alert/Alert";

const DeleteEmployeeSubject = ({employeeData}) => {
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [alertVisible, setAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);

    const deleteEmployeeSubject = (subjectId) => {
        axios.put(`${API_URL}/employee/deleteEmployeeSubject`, {
            employeeId: employeeData._id,
            subjectId: subjectId
        }, {
            headers: {'Authorization': `Bearer ${TOKEN}`}
        })
            .then(setAlertVisible(true))
            .catch(err => {
                if(err) {
                    setErrorAlertVisible(true);
                }
            })
    }

    return (
        <>
            {alertVisible && <AlertComponent type={'success'} onClick={() => setAlertVisible(false)} message={'Przedmiot został usunięty pomyślnie'}/>}
            {errorAlertVisible && <AlertComponent type={'error'} onClick={() => setErrorAlertVisible(false)} message={'Wystąpił błąd podczas usuwania przedmiotu'}/>}
            <DeleteEmployeeSubjectWrapper>
                <StyledContentWrapper>
                    <StyledFormTitle>Usuń przedmiot:</StyledFormTitle>
                    <SelectMenu onChange={e => setSelectedSubject(e.target.value)} placeholder={`Przedmioty pracownika ${employeeData.name} ${employeeData.lastName}`} name={'Subject'} data={employeeData.subjectId}/>
                    <Button disabled={!selectedSubject} onClick={async () => await deleteEmployeeSubject(selectedSubject)}>
                        Usuń przedmiot
                    </Button>
                </StyledContentWrapper>
            </DeleteEmployeeSubjectWrapper>
        </>
    );
};

export default DeleteEmployeeSubject;