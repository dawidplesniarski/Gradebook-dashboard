import React, {useState} from "react";
import {StyledFormTitle, TextInputWrapper, EditSubjectFormWrapper} from './EditSubjectForm.styles';
import {connect} from 'react-redux';
import axios from 'axios';
import SubjectTypeMenu from "../../Atoms/SubjectTypeSelectMenu/SubjectTypeMenu";
import TextInput from "../../Atoms/TextInput/TextInput";
import {API_URL, TOKEN} from "../../../utils/helpers";
import AlertComponent from "../../Atoms/Alert/Alert";
import Button from "../../Atoms/Button/Button";

const EditSubjectForm = ({subjectReducer}) => {
    const [type, setType] = useState(subjectReducer.currentSubject.subjectDetails.type);
    const [ects, setEcts] = useState(subjectReducer.currentSubject.subjectDetails.ects);
    const [hours, setHours] = useState(subjectReducer.currentSubject.subjectDetails.hours);
    const [subjectName, setSubjectName] = useState(subjectReducer.currentSubject.subject.subjectName);
    const [alertVisible, setAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);

    const editSubject = (subject) => {
        axios.put(`${API_URL}/subject/editSubjectWithDetails`,  {
            subjectName: subject,
            newSubjectName: subjectName,
            ects: ects,
            type: type,
            hours: hours
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
          {alertVisible && <AlertComponent type={'success'} message={'Przedmiot został zaktualizowany'} onClick={() => setAlertVisible(false)}/>}
          {errorAlertVisible && <AlertComponent type={'error'} message={`Przedmiot o nazwie ${subjectName} już istnieje!`} onClick={() => setErrorAlertVisible(false)}/>}
          <EditSubjectFormWrapper>
              {subjectReducer.currentSubject &&
                  <>
                      <StyledFormTitle>Edycja przedmiotu {subjectReducer.currentSubject.subject.subjectName}</StyledFormTitle>
                      <TextInputWrapper>
                          <SubjectTypeMenu onChange={e => setType(e.target.value)} name={'Type'} placeholder={`${subjectReducer.currentSubject.subjectDetails.type}`}/>
                          <TextInput onChange={e => setSubjectName(e.target.value)} type={'text'} name={'Name'} defaultValue={subjectReducer.currentSubject.subject.subjectName}/>
                          <TextInput onChange={e => setEcts(e.target.value)} type={'text'} name={'Ects'} defaultValue={subjectReducer.currentSubject.subjectDetails.ects}/>
                          <TextInput onChange={e => setHours(e.target.value)} type={'text'} name={'Hours'} defaultValue={subjectReducer.currentSubject.subjectDetails.hours}/>
                      </TextInputWrapper>
                      <Button disabled={!hours || !subjectName || !ects || !type} onClick={async () => await editSubject(subjectReducer.currentSubject.subject.subjectName)}>
                          Zaktualizuj
                      </Button>
                  </>
              }

          </EditSubjectFormWrapper>
      </>
  );
};

const mapStateToProps = ({subjectReducer}) => {
    return {subjectReducer};
};

export default connect (mapStateToProps)(EditSubjectForm);