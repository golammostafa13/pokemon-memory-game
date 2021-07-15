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
    background-color: #02525c;
    text-align: center;
    cursor: pointer;
    transition: transform 0.6s ease;
    border-radius: 4px;
    &:hover{
        opacity: 0.7;
        transform: scale(1.04);
    }
    & img{
        pointer-events: none;
        width: 70%;
        height: 60%;
    }
    & p{
        pointer-events: none;
        height: 20%;
        color: white;
        font-weight: bolder;
        text-transform: capitalize;
    }
`;