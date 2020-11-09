import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import Burger from "../../components/Molecules/Hamburger/Burger";
import BackButton from "../../components/Atoms/BackButton/BackButton";
import Footer from "../../components/Molecules/Footer/Footer";
import {getSubjects} from "../../actions/subjectActions";
import AllSubjectsTable from "../../components/Tables/AllSubjectsTable";
import {Paper} from "@material-ui/core";
import AddButton from "../../components/Atoms/AddButton/AddButton";
import AddSubjectWithDetails from "../../components/Forms/AddSubjectWithDetails/AddSubjectWithDetails";
import TextInput from "../../components/Atoms/TextInput/TextInput";
import AllSubjectsImage from '../../assets/images/all-subjects.svg';


const StyledSubjectsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 70px;
`;

const SearchBarWrapper = styled.div`
  width: 40%;
`;

const AdminSubjectsPage = ({history, getSubjects, subjectReducer}) => {
    const [formVisible, setFormVisible] = useState(false);
    const [filter, setFilter] = useState('');
    useEffect(() => {
        getSubjects();
    },[])
  return(
      <>
          <Burger isAdminOpened={true}/>
          <BackButton onClick={() => history.push('/adminMainPage')}/>
          <AddButton open={formVisible} onClick={() => setFormVisible(!formVisible)}/>
          <StyledSubjectsPageContainer>
              {!formVisible ?
                  <>
                      <img src={AllSubjectsImage} alt={'subjects'}/>
                      <SearchBarWrapper>
                          <TextInput onChange={e => setFilter(e.target.value)} type={'texr'} name={'Filter'} placeholder={'Filtruj po nazwie'}/>
                      </SearchBarWrapper>
                      <Paper elevation={5}>
                          <AllSubjectsTable data={subjectReducer.subjects.filter(e => e.subjectName.toLowerCase().includes(filter.toLowerCase()))}/>
                      </Paper>
                  </> :
                  <AddSubjectWithDetails/>
              }

          </StyledSubjectsPageContainer>
          <Footer/>
      </>
  );
};

const mapStateToProps = ({subjectReducer}) => {
    return {subjectReducer};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSubjects: () => dispatch(getSubjects())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminSubjectsPage));