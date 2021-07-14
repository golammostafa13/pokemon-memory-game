import React from 'react';
import styled from 'styled-components';
const Card = ({pokemon, handleCardClick}) => {
    return (
        <CardComponent onClick={handleCardClick}>
            <img src={pokemon.image} alt={pokemon.id}/>
            <p>{pokemon.name}</p>
        </CardComponent>
    );
};

export default Card;

const CardComponent = styled.div`
    color: red;
    background-color: white;
    text-align: center;
    cursor: pointer;
    transition: transfrom 0.8s ease;
    &:hover{
        background-color: black;
        transform: scale(1.02);
    }
    & img{
        pointer-events: none;
    }
    & p{
        pointer-events: none;
    }
`;