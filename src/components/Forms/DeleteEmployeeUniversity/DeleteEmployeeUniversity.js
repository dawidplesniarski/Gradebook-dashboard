import React, {useState} from "react";
import axios from 'axios';
import {StyledFormTitle, StyledContentWrapper, DeleteEmployeeUniversityWrapper} from './DeleteEmployeeUniversity.styles'
import {API_URL, TOKEN} from "../../../utils/helpers";
import SelectUniversity from "../../Atoms/SelectUniversityMenu/SelectUniversityMenu";
import Button from "../../Atoms/Button/Button";
import AlertComponent from "../../Atoms/Alert/Alert";

const DeleteEmployeeUniversity = ({employeeData}) => {
    const [selectedUniversity, setSelectedUniversity] = useState(null);
    const [alertVisible, setAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);


    const deleteEmployeeUniversity = (employeeId) => {
        axios.put(`${API_URL}/employee/deleteEmployeeUniversity`, {
            employeeId: employeeId,
            universityId: selectedUniversity
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
    }

    return (
        <>
            {alertVisible && <AlertComponent type={'success'} onClick={() => setAlertVisible(false)}
                                             message={'Uczelnia została usunięta pomyślnie'}/>}
            {errorAlertVisible && <AlertComponent type={'error'} onClick={() => setErrorAlertVisible(false)}
                                                  message={'Wystąpił błąd podczas usuwania uczelni'}/>}
            <DeleteEmployeeUniversityWrapper>
                <StyledContentWrapper>
                    <StyledFormTitle>Usuń uczelnie:</StyledFormTitle>
                    <SelectUniversity
                        onChange={e => setSelectedUniversity(e.target.value)}
                        name={'University'}
                        placeholder={`Uczelnie pracownika ${employeeData.name} ${employeeData.lastName}`}
                        data={employeeData.universityId}/>
                    <Button disabled={!selectedUniversity}
                            onClick={async () => await deleteEmployeeUniversity(employeeData._id)}>
                        Usuń uczelnie
                    </Button>
                </StyledContentWrapper>
            </DeleteEmployeeUniversityWrapper>
        </>
    );
};

export default DeleteEmployeeUniversity;