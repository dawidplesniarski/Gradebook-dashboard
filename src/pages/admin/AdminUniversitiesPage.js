import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import Burger from "../../components/Molecules/Hamburger/Burger";
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import BackButton from "../../components/Atoms/BackButton/BackButton";
import {getUniversities} from "../../actions/universityActions";
import AllUniversitiesTable from "../../components/Tables/AllUniversitiesTable";
import AllUniversitiesImage from '../../assets/images/all-universities.svg';
import {Paper} from "@material-ui/core";
import AddButton from "../../components/Atoms/AddButton/AddButton";
import AddUniversityForm from "../../components/Forms/AddUniversityForm/AddUniversityForm";
import Footer from "../../components/Molecules/Footer/Footer";
import TextInput from "../../components/Atoms/TextInput/TextInput";

const StyledUniversitiesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const SearchBarWrapper = styled.div`
  width: 40%;
`;

const AdminUniversitiesPage = ({history, universityReducer, getUniversities}) => {
    const [formVisible, setFormVisible] = useState(false);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        getUniversities();
    }, []);
    return (
        <>
            <Burger isAdminOpened={true}/>
            <BackButton onClick={() => history.push('/adminMainPage')}/>
            <AddButton open={formVisible} onClick={() => setFormVisible(!formVisible)}/>
            <StyledUniversitiesPageContainer>
                {!formVisible ?
                    <>
                        <img src={AllUniversitiesImage} alt={'Universities'}/>
                        <SearchBarWrapper>
                            <TextInput onChange={e => setFilter(e.target.value)} type={'text'} name={'Search'} placeholder={'Filtruj po nazwie'}/>
                        </SearchBarWrapper>
                        <Paper elevation={5}>
                            <AllUniversitiesTable data={universityReducer.universities.filter(e => e.universityName.toLowerCase().includes(filter.toLowerCase()))}/>
                        </Paper>
                    </>
                     :
                    <AddUniversityForm/>
                }
            </StyledUniversitiesPageContainer>
            <Footer/>
        </>
    );
};

const mapStateToProps = ({universityReducer}) => {
    return {universityReducer};
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUniversities: () => dispatch(getUniversities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminUniversitiesPage));