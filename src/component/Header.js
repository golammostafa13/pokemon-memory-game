import React from 'react';
import styled from 'styled-components';
const Header = () => {
    return (
        <HeaderComponent>
            <h1>Pokemon-Memory Game</h1>
        </HeaderComponent>
    );
};

export default Header;

const HeaderComponent = styled.div`
    text-align:center;
    background-color: #5a5a5a;
    font-size: 20px;
    color: #10afc4;
    font-family: Arial, sans-serif;
    padding: 3px;
`