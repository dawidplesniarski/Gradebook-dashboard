import React, {useState} from "react";
import axios from 'axios';
import {AddUniversityWrapper, StyledFormTitle, StyledContentWrapper} from './AddUniversityForm.styles';
import TextInput from "../../Atoms/TextInput/TextInput";
import Button from "../../Atoms/Button/Button";
import {API_URL, TOKEN} from "../../../utils/helpers";
import AlertComponent from "../../Atoms/Alert/Alert";

const AddUniversityForm = () => {
    const [universityName, setUniversityName] = useState(null);
    const [alertVisible, setAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);

    const addUniversity = (universityName) => {
        axios.post(`${API_URL}/university/addUniversity`, {
            universityName: universityName
        },{
            headers: {'Authorization': `Bearer ${TOKEN}`}
        }).then(res => {
            if (res.data) {
                setAlertVisible(true);
            }
        }).catch(err => {
            if (err) {
                setErrorAlertVisible(true);
            }
        });
    };

    return (
        <>
            {alertVisible && <AlertComponent type={'success'} message={'Uczelnia została dodana pomyślnie'}
                                             onClick={() => setAlertVisible(false)}/>}
            {errorAlertVisible && <AlertComponent type={'error'} message={'Uczelnia już istnieje!'}
                                                  onClick={() => setErrorAlertVisible(false)}/>}
            <AddUniversityWrapper>
                <StyledContentWrapper>
                    <StyledFormTitle>Dodaj nową uczelnię:</StyledFormTitle>
                    <TextInput onChange={e => setUniversityName(e.target.value)} type={'text'} name={'University'}
                               placeholder={'Nazwa uczelni'}/>
                    <Button disabled={!universityName} onClick={async () => await addUniversity(universityName)}>
                        Dodaj uczelnie
                    </Button>
                </StyledContentWrapper>
            </AddUniversityWrapper>
        </>
    );
};

export default AddUniversityForm;