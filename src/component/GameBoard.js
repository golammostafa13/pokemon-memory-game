import React from 'react';
import styled from 'styled-components';
import Card from '../component/Card';

const GameBoard = ({pokemons, handleCardClick}) => {
    // console.log(pokemons);
    return (
        <GameBoardComponent>
            {
                pokemons.map(pk => <Card pokemon={pk} handleCardClick={handleCardClick} key={pk.id}></Card>)
            }
        </GameBoardComponent>
    );
};

export default GameBoard;

const GameBoardComponent = styled.div`
    width: 75%;
    height: 75%;
    padding: 5px 0;
    color: white;
    display: grid;
    margin: auto 0px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: repeat(3, minmax(200px, 1fr));
    grid-gap: 3px;
    align-items: center;
    justify-content: center;
`;