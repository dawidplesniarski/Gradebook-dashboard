import React, {useState, useEffect} from 'react';
import {StyledWrapper} from "./AddGradeForm.styles";
import SelectMenu from "../../Atoms/SelectMenu/SelectMenu";
import axios from "axios";
import TextInput from "../../Atoms/TextInput/TextInput";
import Button from "../../Atoms/Button/Button";
import {API_URL} from "../../../utils/helpers";
import {compareSubjectArrays} from "../../../utils/helpers";

const AddGradeForm = ({open, studentAlbum, studentSubjects}) => {
    const [newGrade, setGrade] = useState('');
    const [subjectId, setSubjectId] = useState('');
    const [data, setStatus] = useState([]);

    const addGrade = () => {
        try {
            axios.post(`${API_URL}/grades/addGrade`,
                {
                    studentAlbum: studentAlbum,
                    grade: newGrade,
                    subject: subjectId
                }
            );
        } catch (err) {
            console.log(err);
        };
    };

    const fetchSubjects = () => {
        try {
            axios.get(`${API_URL}/subject/findAll`).then(res => {
                setStatus(res.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchSubjects();
    }, []);
    return (
        <StyledWrapper open={open}>
            <TextInput onChange={event => setGrade(event.target.value)} placeholder={'Ocena'} min={2} max={5} step={0.5}
                       type={'number'} name={'ocena'}/>
            <SelectMenu placeholder={'Przedmiot'} onChange={(event) => setSubjectId(event.target.value)}
                        name={'subjectId'} data={compareSubjectArrays(data, studentSubjects)}/>
            <Button onClick={async () => await addGrade()}>Dodaj ocenę</Button>
        </StyledWrapper>
    );
};

export default AddGradeForm;