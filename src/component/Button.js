import React from 'react';
import styled from 'styled-components';
const Button = ({handleButton}) => {
    return (
        <ButtonComponent>
            <button onClick={handleButton}>Sign In with Google</button>
        </ButtonComponent>
    );
};

export default Button;

const ButtonComponent = styled.div`
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;