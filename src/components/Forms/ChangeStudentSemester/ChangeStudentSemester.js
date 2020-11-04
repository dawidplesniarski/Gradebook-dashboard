import React, {useState} from "react";
import styled from 'styled-components';
import SelectStudentCourses from "../../Atoms/SelectStudentCoursesMenu/SelectStudentCourses";
import {connect} from 'react-redux';

const ChangeSemesterFormWrapper = styled.div`
  background-color: #FFF;
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

const ChangeStudentSemester = ({studentReducer}) => {
    const [index, setIndex] = useState(0);
   return (
       <>
        <ChangeSemesterFormWrapper>
            <SelectStudentCourses
                onChange={(event) => setIndex(event.target.value)}
                name={'subjectName'}
                placeholder={'Temat'}
                data={studentReducer.currentStudent.courseId}/>
                <span>{index}</span>
        </ChangeSemesterFormWrapper>
       </>
   );
};

const mapStateToProps = ({studentReducer}) => {
    return {studentReducer};
};

export default connect(mapStateToProps)(ChangeStudentSemester);