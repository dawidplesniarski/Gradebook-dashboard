import React, {useState, useEffect} from "react";
import SelectTestCategory from "../../Atoms/SelectTestCategory/SelectTestCategory";
import axios from 'axios';
import {API_URL, compareSubjectArrays, getEmployeeSubjects} from "../../../utils/helpers";
import {connect} from "react-redux";
import TextInput from "../../Atoms/TextInput/TextInput";
import Button from "../../Atoms/Button/Button";
import {AddQuizFormWrapper, StyledFormTitle, StyledQuestionBox, StyledAnswersBox} from './AddQuiz.styles'



const AddQuiz = ({loginReducer}) => {
    const [subject, setSubject] = useState('');
    const [question, setQuestion] = useState('');
    const [answerA, setAnswerA] = useState('');
    const [answerB, setAnswerB] = useState('');
    const [answerC, setAnswerC] = useState('');
    const [answerD, setAnswerD] = useState('');
    const [subjectsData, setSubjectsData] = useState([]);
    const employeeSubjects = getEmployeeSubjects(loginReducer.loginData.employee.subjectId);

    const fetchSubjects = () => {
        try {
            axios.get(`${API_URL}/subject/findAll`).then(res => {
                setSubjectsData(res.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    const addQuizTask = () => {
        try {
            axios.post(`${API_URL}/test/addQuestion`,{
                category: subject,
                question: question,
                answers: [answerA, answerB, answerC, answerD],
                correctAnswer: answerB
            })
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchSubjects();
    }, []);

    return (
        <AddQuizFormWrapper>
            <StyledFormTitle>Wybierz temat testu</StyledFormTitle>
            <SelectTestCategory
                onChange={(event) => setSubject(event.target.value)}
                name={'subjectName'}
                placeholder={'Temat'}
                data={compareSubjectArrays(subjectsData, employeeSubjects)}
            />
            <StyledQuestionBox>
                <TextInput onChange={(event) => setQuestion(event.target.value)} type={'text'} name={'Question'} placeholder={'Wpisz treść pytania'}/>
            </StyledQuestionBox>
            <StyledAnswersBox>
                <TextInput onChange={(event) => setAnswerA(event.target.value)} type={'text'} name={'AnswerA'} placeholder={'Wpisz odpowiedź'}/>
                <TextInput onChange={(event) => setAnswerB(event.target.value)} type={'text'} name={'AnswerB'} placeholder={'Wpisz odpowiedź'}/>
                <TextInput onChange={(event) => setAnswerC(event.target.value)} type={'text'} name={'AnswerC'} placeholder={'Wpisz odpowiedź'}/>
                <TextInput onChange={(event) => setAnswerD(event.target.value)} type={'text'} name={'AnswerD'} placeholder={'Wpisz odpowiedź'}/>
                <Button disabled={question === '' || answerA === '' || answerB === '' || answerC === '' || answerD === '' || subject === ''}
                        onClick={async () => await addQuizTask()}>
                    Dodaj pytanie
                </Button>
            </StyledAnswersBox>
        </AddQuizFormWrapper>
    );
};

const mapStateToProps = (loginReducer) => {
    return loginReducer;
}

export default connect(mapStateToProps)(AddQuiz);