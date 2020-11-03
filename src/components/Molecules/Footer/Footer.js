import React from "react";
import styled from 'styled-components';

const StyledFooter = styled.footer`
  border-top: 1px solid #e3e3e3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  overflow: hidden;
  background-color: #FFF;
`;

const StyledFooterText = styled.p`
  font-family: Montserrat, sans-serif;
  font-weight: normal;
  font-size: 1rem;
  color: #423F43;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const StyledHref = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Footer = () => {
  return(
      <StyledFooter>
          <StyledFooterText>
              <StyledHref href={'https://github.com/dawidplesniarski'}>
                  App developed by Dawid Pleśniarski 2020 &copy;
              </StyledHref>
          </StyledFooterText>
      </StyledFooter>
  );
};

export default Footer;