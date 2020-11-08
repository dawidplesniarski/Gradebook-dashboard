import React, {useState} from "react";
import axios from 'axios';
import {EditUniversityFormWrapper, StyledFormTitle, TextInputWrapper} from './EditUniversityForm.styles'
import TextInput from "../../Atoms/TextInput/TextInput";
import Button from "../../Atoms/Button/Button";
import {API_URL, TOKEN} from "../../../utils/helpers";
import AlertComponent from "../../Atoms/Alert/Alert";

const EditUniversityForm = ({universityData}) => {
    const [universityName, setUniversityName] = useState(universityData.universityName);
    const [alertVisible, setAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);

    const editUniversity = (universityId) => {
        axios.put(`${API_URL}/university/editUniversity`,{
            universityId: universityId,
            universityName: universityName
        },{
            headers: {'Authorization': `Bearer ${TOKEN}`}
        }).then(res => {
            if(res.data) {
                setAlertVisible(true);
            }
        }).catch(err => {
            if(err) {
                setErrorAlertVisible(true);
            }
        })
    }
    return (
        <>
            {alertVisible && <AlertComponent type={'success'} message={'Uczelnia została zaktualizowana pomyślnie'} onClick={() => setAlertVisible(false)}/>}
            {errorAlertVisible && <AlertComponent type={'error'} message={`Uczelnia o nazwie ${universityName} już istnieje!`} onClick={() => setErrorAlertVisible(false)}/>}
            <EditUniversityFormWrapper>
                <StyledFormTitle>Edycja uczelni: {universityData.universityName}</StyledFormTitle>
                <TextInputWrapper>
                    <TextInput onChange={e => setUniversityName(e.target.value)} type={'text'} name={'Nazwa uczelni'} defaultValue={universityData.universityName}/>
                </TextInputWrapper>
                <Button disabled={!universityName} onClick={async () => await editUniversity(universityData._id)}>
                    Zaktualizuj
                </Button>
            </EditUniversityFormWrapper>
        </>
    );
};

export default EditUniversityForm;