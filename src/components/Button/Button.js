import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleMenu } from '../../../actions/toggleActions';
import { StyledButton } from './Button.styles';

const Button = ({ children, onClick, isMenu, toggleMenu }) => (
  <StyledButton
    onClick={() => {
      onClick && onClick();
      isMenu && toggleMenu();
    }}
    isMenuButton={isMenu}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  isMenu: PropTypes.bool
};

Button.defaultProps = {
  isMenu: false
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => dispatch(toggleMenu())
  };
};

export default connect(null, mapDispatchToProps)(Button);
