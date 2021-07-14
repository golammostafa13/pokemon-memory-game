import React from 'react';
import styled from 'styled-components';
const ScoreCard = ({name, best, current}) => {
    return (
        <ScoreCardComponent>
            <h1>Hi, <span>{name}</span></h1>
            <Scores>
                <Current>Your score: <strong>{current}</strong></Current>
                <Best>Best score: <strong>{best}</strong></Best>
            </Scores>
        </ScoreCardComponent>
    );
};

export default ScoreCard;

const ScoreCardComponent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25%;
    width: 100%;
    position: sticky;
    top: 0;
    background-color: #02525c;
    & h1{
        flex: 2;
        & span{
            color: white;
        }
    }
`;

const Scores = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1;
`;

const Current = styled.p`
    color: white;
    font-size: 20px;
`;

const Best = styled.p`
    color: white;
`;