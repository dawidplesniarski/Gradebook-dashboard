import React, {useState, useEffect} from "react";
import axios from 'axios';
import {StyledFormTitle, StyledContentWrapper, AddEmployeeUniversityWrapper} from './AddEmployeeUniversity.styles'
import {API_URL, TOKEN} from "../../../utils/helpers";
import SelectUniversity from "../../Atoms/SelectUniversityMenu/SelectUniversityMenu";
import Button from "../../Atoms/Button/Button";
import AlertComponent from "../../Atoms/Alert/Alert";

const AddEmployeeUniversity = ({employeeData}) => {
    const [universitiesData, setUniversitiesData] = useState([]);
    const [selectedUniversity, setSelectedUniversity] = useState(null);
    const [alertVisible, setAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);

    const fetchUniversities = () => {
        axios.get(`${API_URL}/university/findAll`).then(res => {
            setUniversitiesData(res.data);
        }).catch(err => {
            console.log(err);
        })
    };

    const addEmployeeUniversity = (employeeId) => {
        axios.put(`${API_URL}/employee/addEmployeeUniversity`, {
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

    useEffect(() => {
        fetchUniversities();
    }, []);
    return (
        <>
            {alertVisible && <AlertComponent type={'success'} onClick={() => setAlertVisible(false)}
                                             message={'Uczelnia została przypisana pomyślnie'}/>}
            {errorAlertVisible && <AlertComponent type={'error'} onClick={() => setErrorAlertVisible(false)}
                                                  message={'Wybrana uczelnia jest już przypisana'}/>}
            <AddEmployeeUniversityWrapper>
                <StyledContentWrapper>
                    <StyledFormTitle>Przypisz uczelnie:</StyledFormTitle>
                    {universitiesData.length > 0 &&
                    <SelectUniversity
                        onChange={e => setSelectedUniversity(e.target.value)}
                        name={'University'}
                        placeholder={'Wszystkie uczelnie'}
                        data={universitiesData}/>}
                    <Button disabled={!selectedUniversity} onClick={async () => await addEmployeeUniversity(employeeData._id)}>
                        Dodaj uczelnie
                    </Button>
                </StyledContentWrapper>
            </AddEmployeeUniversityWrapper>
        </>
    );
};

export default AddEmployeeUniversity;