import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import axios from 'axios';
import {API_URL, TOKEN} from "../../../utils/helpers";
import SelectMenu from "../../Atoms/SelectMenu/SelectMenu";
import Button from "../../Atoms/Button/Button";
import AlertComponent from "../../Atoms/Alert/Alert";

const AddEmployeeSubjectWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #fafafa;
  border-radius: 15px;
  width: 700px;
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  align-items: center;
  @media (max-width: 1000px) {
    width: 500px;
  }
  @media (max-width: 800px) {
    width: 400px;
  }
  @media (max-width: 700px) {
    width: 350px;
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  width: 80%;
`;

const StyledFormTitle = styled.p`
  font-family: Montserrat,serif;
  font-weight: 500;
  font-size: 25px;
  @media(max-width: 768px) {
    font-size: 20px;
  }
`;

const AddEmployeeSubject = ({currentEmployee}) => {
    const [subjectsData, setSubjectsData] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [alertVisible, setAlertVisible] = useState(false);

    const fetchAllSubjects = () => {
        axios.get(`${API_URL}/subject/findAll`).then(res => {
            setSubjectsData(res.data);
        }).catch(err => {
            console.log(err);
        })
    };

    const addEmployeeSubject = (employeeId) => {
        axios.put(`${API_URL}/employee/addEmployeeSubject`, {
            employeeId: employeeId,
            subjectId: selectedSubject
        }, {
            headers: {'Authorization': `Bearer ${TOKEN}`}
        }).then(setAlertVisible(true));
    }

    useEffect(() => {
        fetchAllSubjects();
    }, [])

    return (
        <>
            {alertVisible && <AlertComponent type={'success'} message={'Przedmiot został dodany pomyślnie'}
                                             onClick={() => setAlertVisible(false)}/>}
            <AddEmployeeSubjectWrapper>
                <StyledContentWrapper>
                    <StyledFormTitle>Dodaj nowy przedmiot:</StyledFormTitle>
                    {subjectsData.length > 0 &&
                    <SelectMenu onChange={e => setSelectedSubject(e.target.value)} name={'Subject'}
                                placeholder={'Przedmioty'} data={subjectsData}/>}
                    <Button disabled={!selectedSubject} onClick={async () => await addEmployeeSubject(currentEmployee._id)}>
                        Dodaj przedmiot
                    </Button>
                </StyledContentWrapper>
            </AddEmployeeSubjectWrapper>
        </>
    );
};

export default AddEmployeeSubject;