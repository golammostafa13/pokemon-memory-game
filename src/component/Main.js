import styled from 'styled-components';
import React from 'react';
import ScoreCard from '../component/ScoreCard';
import GameBoard from '../component/GameBoard';
import {useEffect, useState} from 'react';
import {fetchPokemons, suffleArray} from '../utils';
const Main = ({name}) => {
    // const pokeAmount = 12;
    const [pokemonsAmount, setPokemonsAmount] = useState(4);
    const [pokemons, setPokemons] = useState([]);
    const [clickedPokemons, setClickedPokemons] = useState([]);
    const [current, setCurrent] = useState(0);
    const [best, setBest] = useState(0);
    const [round, setRound] = useState(1);
    useEffect(() => {
        const loadCards = async () => {
            setPokemons(await fetchPokemons(pokemonsAmount))
            };
        loadCards();
    }, [pokemonsAmount]);

    const handleCardClick = (e) => {
        // e.preventDefault();
        let name = e.target.childNodes[1].innerText;
        // console.log(name);
        roundPlay(name);
    }
    const roundPlay = (name) => {
        if(clickedPokemons.includes(name)){
            resetGame();
        }else{
            let currentScore = current + 1;
            if(currentScore === 4){
                setRound(2);
                setClickedPokemons([]);
                setPokemonsAmount(8);
            }else if(currentScore === 12){
                setRound(3);
                setClickedPokemons([]);
                setPokemonsAmount(12);
            }else if(currentScore === 24){
                resetGame();
            }else{
                setClickedPokemons([...clickedPokemons, name]);
            }
            if(currentScore > best){
                setBest(currentScore);
            }
            if(current !== 24)setCurrent(currentScore);
        }
        setPokemons(suffleArray(pokemons));
    }
    const resetGame = () =>{
        setClickedPokemons([]);
        setCurrent(0);
        setPokemonsAmount(4);
        setRound(1);
    }
    return (
        <MainComponent>
            <ScoreCard name={name} best={best} current={current}></ScoreCard>
            <h1>Round {round}/3</h1>
            <GameBoard pokemons={pokemons} handleCardClick={handleCardClick}></GameBoard>
        </MainComponent>
    );
};

export default Main;


const MainComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
	min-height: 100vh;
    background-color: #10afc4;
    color: #888;
`;