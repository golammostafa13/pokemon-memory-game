import React from 'react';
import styled from 'styled-components';
const Footer = () => {
    return (
        <FooterComponent>
            <p>Copyright &copy; <strong>Golam Mostafa-2021</strong></p>
        </FooterComponent>
    );
};

export default Footer;

const FooterComponent = styled.div`
    text-align: center;
    background-color: #3a3a3a;
    color: #ececec;
    font-size: 18px;
    padding: 3px;
`;