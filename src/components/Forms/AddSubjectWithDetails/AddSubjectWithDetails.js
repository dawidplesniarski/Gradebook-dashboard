import React, {useState} from "react";
import {AddSubjectWrapper, StyledFormTitle, StyledContentWrapper} from "./AddSubjectWithDetails.styles";
import TextInput from "../../Atoms/TextInput/TextInput";
import Button from "../../Atoms/Button/Button";
import SubjectTypeMenu from "../../Atoms/SubjectTypeSelectMenu/SubjectTypeMenu";
import axios from 'axios';
import {API_URL, TOKEN} from "../../../utils/helpers";
import AlertComponent from "../../Atoms/Alert/Alert";

const AddSubjectWithDetails = () => {
    const [ects, setEcts] = useState(null);
    const [hours, setHours] = useState(null);
    const [type, setType] = useState(null);
    const [subjectName, setSubjectName] = useState(null);
    const [alertVisible, setAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);

    const addSubjectWithDetails = () => {
        axios.post(`${API_URL}/subject/addSubjectWithDetails`,{
            ects: ects,
            hours: hours,
            type: type,
            subjectName: subjectName
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

    return(
        <>
            {alertVisible && <AlertComponent type={'success'} message={'Przedmiot został dodany pomyślnie'} onClick={() => setAlertVisible(false)}/>}
            {errorAlertVisible && <AlertComponent type={'error'} message={`Przedmiot o nazwie ${subjectName} już istnieje`} onClick={() => setErrorAlertVisible(false)}/>}
            <AddSubjectWrapper>
                <StyledContentWrapper>
                    <StyledFormTitle>Dodaj nowy przedmiot:</StyledFormTitle>
                    <SubjectTypeMenu placeholder={'Typ przedmiotu'} name={'Type'} onChange={e => setType(e.target.value)}/>
                    <TextInput onChange={e => setSubjectName(e.target.value)} type={'text'} name={'Subject Name'} placeholder={'Nazwa przedmiotu'}/>
                    <TextInput onChange={e => setEcts(e.target.value)} type={'text'} name={'Ects'} placeholder={'Wartość w punktach ECTS'}/>
                    <TextInput onChange={e => setHours(e.target.value)} type={'text'} name={'Hours'} placeholder={'Ilość godzin'}/>
                    <Button disabled={!ects || !hours || !type || !subjectName}
                    onClick={async () => await addSubjectWithDetails()}>
                        Dodaj przedmiot
                    </Button>
                </StyledContentWrapper>
            </AddSubjectWrapper>
        </>
    );
};

export default AddSubjectWithDetails;