import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {withRouter} from "react-router";
import Burger from "../components/Molecules/Hamburger/Burger";
import BackButton from "../components/Atoms/BackButton/BackButton";
import axios from 'axios';
import {connect} from "react-redux";
import {API_URL, compareGradesArrays, getEmployeeSubjects} from "../utils/helpers";
import GradesTable from "../components/Tables/GradesTable";
import SearchBar from "../components/Atoms/SearchBar/SearchBar";
import jsPDF from 'jspdf';
import "jspdf-autotable";
import EmployeeSubjectsMenu from "../components/Atoms/EmployeeSubjectsMenu/EmployeeSubjectsMenu";
import PdfIcon from '../assets/images/pdf.png';
import {Paper} from "@material-ui/core";
import {MainTableWrapper, MainPageContainer, StyledWrapper, TableWrapper} from "../styles/MainPage.styles";
import TeacherImage from '../assets/images/teacher-board.svg'


const ExportFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  padding: 15px;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border-radius: 50%;
  border: 0;
  &:hover {
    img {
      opacity: 50%;
    }
  }
`;

const StudentGradesPage = ({history, studentReducer, universityReducer, loginReducer}) => {
    const [studentGradesData, setStudentGradesData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [gradesFilter, setGradesFilter] = useState('');
    const [selectedSubject, setSelectedSubject] = useState(null);
    const employeeSubjects = getEmployeeSubjects(loginReducer.loginData.employee.subjectId);
    const [protocolData, setProtocolData] = useState([]);

    const exportToPdf = () => {
        const unit = "pt";
        const size = "A4";
        const orientation = "portrait";
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
        const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        // const date = (new Date()).format('DD-MM.YYYY');
        doc.setFontSize(15);
        const title = `Protokol ocen z przedmiotu ${selectedSubject}`;
        const headers = [["Imie", "Nazwisko", "Album", "Ocena", "Data", "Podpis"]];
        const data = protocolData.map(element => [element.name, element.lastName, element.album, element.average, utc]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("protokol_ocen.pdf");
    };

    const fetchStudentGrades = (studentAlbum) => {
        try {
            axios.get(`${API_URL}/grades/findByAlbum/${studentAlbum}`).then(res => {
                setStudentGradesData(res.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    const fetchPdfData = (universityId, courseId, semester, subject, successCallback) => {
        try {
            axios.get(`${API_URL}/grades/findBySemesterAndSubject/${universityId}/${courseId}/${semester}/${subject}`).then(res => {
                setProtocolData(res.data);
            })
        } catch (err) {
            console.log(err);
        } finally {
            if (protocolData.length > 0) {
                successCallback();
            }
        }
    }

    const fetchStudentSubjects = (courseName, albumNo) => {
        try {
            axios.get(`${API_URL}/subject/findByStudent/${courseName}/${albumNo}`).then(res => {
                setFilterData(res.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        console.log(studentReducer.currentStudentSubjects);
        fetchStudentSubjects(universityReducer.currentCourse.courseName, studentReducer.currentStudent.albumNo);
        fetchStudentGrades(studentReducer.currentStudent.albumNo);
    }, []);

    return (
        <>
            <Burger/>
            <BackButton onClick={() => history.push('/studentDetails')}/>
            <StyledWrapper>
                <MainPageContainer>
                    <MainTableWrapper>
                        <img src={TeacherImage} alt={'teacher'}/>
                        <ExportFormWrapper>
                            <EmployeeSubjectsMenu placeholder={'Przedmiot'}
                                                  onChange={e => setSelectedSubject(e.target.value)}
                                                  data={studentReducer.currentStudentSubjects} name={'Przedmioty'}/>
                            <StyledButton
                                // TODO: Muszę poprawić wywołanie funkcji
                                onClick={async () => await fetchPdfData(
                                    universityReducer.currentUniversity._id,
                                    universityReducer.currentCourse._id,
                                    studentReducer.currentSemester,
                                    selectedSubject,
                                    () => exportToPdf())}>
                                <img src={PdfIcon} alt={'Export to pdf'}/>
                            </StyledButton>
                        </ExportFormWrapper>
                        <TableWrapper>
                            <SearchBar placeholder={'Wyszukaj po przedmiocie'}
                                       onChange={(e) => setGradesFilter(e.target.value)}/>
                            {studentGradesData.length > 0 && filterData.length > 0 ?
                                <Paper elevation={5}>
                                    <GradesTable
                                        data={compareGradesArrays(studentGradesData, filterData).filter(grade => grade.subject.subjectName.toLowerCase().includes(gradesFilter.toLowerCase()))}
                                        employeeSubjects={employeeSubjects}/>
                                </Paper>

                                : <></>}
                        </TableWrapper>
                    </MainTableWrapper>
                </MainPageContainer>
            </StyledWrapper>
        </>
    );
};

const mapStateToProps = ({studentReducer, universityReducer, loginReducer}) => {
    return {studentReducer, universityReducer, loginReducer};
}

export default connect(mapStateToProps)(withRouter(StudentGradesPage));