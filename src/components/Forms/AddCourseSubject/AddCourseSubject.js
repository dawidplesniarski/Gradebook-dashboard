import React, {useState, useEffect} from "react";
import {
    StyledFormTitle,
    StyledContentWrapper,
    AddCourseSubjectWrapper,
    SelectMenuWrapper,
    SmallNumberTextInput
} from './AddCourseSubject.styles';
import axios from 'axios';
import SelectSubjectMenu from "../../Atoms/SelectSubjectMenu/SelectSubjectMenu";
import {API_URL, TOKEN} from "../../../utils/helpers";
import Button from "../../Atoms/Button/Button";
import AlertComponent from "../../Atoms/Alert/Alert";

const AddCourseSubject = ({subjects}) => {
    const [semester, setSemester] = useState(1);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [subjectsData, setSubjectsData] = useState([]);
    const [alertVisible, setAlertVisible] = useState(false);

    const fetchSubjects = () => {
        axios.get(`${API_URL}/subject/findAll`).then(res => {
            setSubjectsData(res.data);
        });
    };

    const addSubjectToSemester = (courseName) => {
        axios.put(`${API_URL}/course/addSubjectToSemester`,{
            semester: semester -1,
            courseName: courseName,
            newSubject: selectedSubject
        },{
            headers: {'Authorization': `Bearer ${TOKEN}`}
        }).then(res => {
            if(res.data) {
                setAlertVisible(true);
            }
        })
    }

    useEffect(() => {
        fetchSubjects();
    },[])

    return (
        <>
            {alertVisible && <AlertComponent type={'success'} message={`Przedmio ${selectedSubject} został dodany do semestru ${semester}`} onClick={() => setAlertVisible(false)}/>}
            <AddCourseSubjectWrapper>
                <StyledContentWrapper>
                    <StyledFormTitle>Dodaj kierunek do semestru:</StyledFormTitle>
                    <SelectMenuWrapper>
                        <SmallNumberTextInput onChange={(event) => setSemester(event.target.value)}
                                              type={'number'}
                                              min={1}
                                              max={subjects.semesters.length}
                                              step={1}
                                              defaultValue={1}
                        />
                        <SelectSubjectMenu onChange={e => setSelectedSubject(e.target.value)} name={'Subject'} data={subjectsData} placeholder={'Przedmioty'}/>
                    </SelectMenuWrapper>
                    <Button disabled={!selectedSubject} onClick={ async () => await addSubjectToSemester(subjects.course)}>
                        Dodaj przedmiot
                    </Button>
                </StyledContentWrapper>
            </AddCourseSubjectWrapper>
        </>
    );
};

export default AddCourseSubject