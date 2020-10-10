import React, {useState, useEffect} from 'react';
import {StyledWrapper} from "./AddGradeForm.styles";
import SelectMenu from "../../Atoms/SelectMenu/SelectMenu";
import axios from "axios";
import TextInput from "../../Atoms/TextInput/TextInput";
import Button from "../../Atoms/Button/Button";

const AddGradeForm = () => {
    const [album, setAlbum] = useState('');
    const [newGrade, setGrade] = useState('');
    const [subjectId, setSubjectId] = useState('');
    const [data, setStatus] = useState([]);

    const addGrade = () => {
        try {
            axios.post('https://node-app-4fun.herokuapp.com/grades/addGrade',
                {
                    studentAlbum: album,
                    grade: newGrade,
                    subject: subjectId
                }
            );
        } catch (err) {
            console.log(err);
        } finally {
            setStatus('Ocena dodana pomyślnie');
        }
    };

    const fetchSubjects = () => {
        try {
            axios.get('https://node-app-4fun.herokuapp.com/subject/findAll').then(res => {
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
        <StyledWrapper>
            <TextInput onChange={event => setAlbum(event.target.value)} placeholder={'Album'} type={'text'} name={'album'}/>
            <TextInput onChange={event => setGrade(event.target.value)} placeholder={'Ocena'} min={2} max={5} step={0.5} type={'number'} name={'ocena'}/>
            <SelectMenu placeholder={'Przedmiot'} onChange={(event) => setSubjectId(event.target.value)} name={'subjectId'} data={data}/>
            <Button onClick={async() => await addGrade()}>Dodaj ocenę</Button>
        </StyledWrapper>
    );
};

export default AddGradeForm;