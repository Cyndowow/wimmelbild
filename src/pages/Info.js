import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Spongebob from "../assets/characters/spongebob.jpeg";
import CJ from "../assets/characters/CJ.webp";
import Duo from "../assets/characters/Duo.webp";

const Info = () => {
    return(
        <Container>
                <Point>To finish the game, find these 3 Characters:</Point>
                <Point><Image src={Spongebob} /> <Image src={CJ}/> <Image src={Duo}/></Point>
                <Point>They won't look exactly like in these pictures.</Point>
                <Button to="/">Go back to the Game</Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height; 100%;
` 
const Point = styled.div`
    padding: 1rem;
    font-size: 2rem;
`


const Image = styled.img`
    height: 20rem;
    padding-left: 2rem;
`

const Button = styled(Link)`
    padding: 1.5rem 1rem;
    border-radius: 1rem;
    border: none;
    background-color: white;
    cursor: pointer; 
    font-weight: bolder;
    font-size: 1.5rem;
    text-decoration: none;
    color: black;

    &:hover {
        transform: scale(1.1)
    }
`

export default Info;