import React, {useState, useEffect} from "react";
import SelectTestCategory from "../../Atoms/SelectTestCategory/SelectTestCategory";
import axios from 'axios';
import {API_URL, compareSubjectArrays, getEmployeeSubjects} from "../../../utils/helpers";
import {connect} from "react-redux";
import TextInput from "../../Atoms/TextInput/TextInput";
import Button from "../../Atoms/Button/Button";
import {AddQuizFormWrapper, StyledFormTitle, StyledQuestionBox, StyledAnswersBox, StyledAnswer} from './AddQuiz.styles'
import { Checkbox } from '@material-ui/core';
import AnswerTextInput from "../../Atoms/AnswerTextInput/AnswerTextInput";
import AlertComponent from "../../Atoms/Alert/Alert";



const AddQuiz = ({loginReducer}) => {
    const [subject, setSubject] = useState('');
    const [question, setQuestion] = useState('');
    const [answerA, setAnswerA] = useState('');
    const [answerB, setAnswerB] = useState('');
    const [answerC, setAnswerC] = useState('');
    const [answerD, setAnswerD] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [subjectsData, setSubjectsData] = useState([]);
    const [alertVisible, setAlertVisible] = useState(true);
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

    const addQuizTask = (successCallback) => {
        try {
            axios.post(`${API_URL}/test/addQuestion`,{
                category: subject,
                question: question,
                answers: [answerA, answerB, answerC, answerD],
                correctAnswer: correctAnswer
            })
            successCallback();
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
                <StyledAnswer>
                    <Checkbox onClick={() => {setCorrectAnswer(answerA)}} disabled={answerA === '' || correctAnswer !== ''}/>
                    <AnswerTextInput onChange={(event) => setAnswerA(event.target.value)} type={'text'} name={'AnswerA'} placeholder={'Wpisz odpowiedź'}/>
                </StyledAnswer>
                <StyledAnswer>
                    <Checkbox onClick={() => {setCorrectAnswer(answerB)}} disabled={answerB === '' || correctAnswer !== ''}/>
                    <AnswerTextInput onChange={(event) => setAnswerB(event.target.value)} type={'text'} name={'AnswerB'} placeholder={'Wpisz odpowiedź'}/>
                </StyledAnswer>
                <StyledAnswer>
                    <Checkbox onClick={() => {setCorrectAnswer(answerC)}} disabled={answerC === '' || correctAnswer !== ''}/>
                    <AnswerTextInput onChange={(event) => setAnswerC(event.target.value)} type={'text'} name={'AnswerC'} placeholder={'Wpisz odpowiedź'}/>
                </StyledAnswer>
                <StyledAnswer>
                    <Checkbox onClick={() => {setCorrectAnswer(answerD)}} disabled={answerD === '' || correctAnswer !== ''}/>
                    <AnswerTextInput onChange={(event) => setAnswerD(event.target.value)} type={'text'} name={'AnswerD'} placeholder={'Wpisz odpowiedź'}/>
                </StyledAnswer>
                <Button disabled={question === '' || answerA === '' || answerB === '' || subject === '' || correctAnswer === ''}
                        onClick={async () => await addQuizTask(() => {setAlertVisible(true)})}>
                    Dodaj pytanie
                </Button>
            </StyledAnswersBox>
            {alertVisible === true ? <AlertComponent type={'success'} onClick={() => setAlertVisible(false)} message={'Pytanie zostało dodane pomyślnie'}/> : <></>}
        </AddQuizFormWrapper>
    );
};

const mapStateToProps = (loginReducer) => {
    return loginReducer;
}

export default connect(mapStateToProps)(AddQuiz);