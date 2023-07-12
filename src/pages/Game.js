import React, { useState, useRef } from "react";
import styled from "styled-components";
//import { firestore } from "../firebase";
import CharacterDropdown from "../components/CharacterDropdown";
import { getByTestId } from "@testing-library/react";

//import Modal from "../components/Modal";


const Game = ({
    image,
    characters,
    toggleFound,
    handleWin
}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [menuCoords, setMenuCoords] = useState({ x: 0, y: 0 });
    const [clickLocation, setClickLocation] = useState({ left: "0%", top: "0%"})

    const getLocationImageClick = (e) => {
        /*const xCoord = Math.round(
            (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
        );
        const yCoord = Math.round(
            (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
        );

        const coords = {xCoord, yCoord};*/

        const coords = { x: e.pageX, y: e.pageY }

        return coords;
    } 

    const updateClickLocation = (coords) => {
        const { xCoord, yCoord } = coords;
        const updatedCoords = { left: xCoord + "%", top: yCoord + "%"};
        setClickLocation(updatedCoords);
        setShowDropdown(true);

    }

    const handleImageClick= (e) => {
        e.preventDefault();
        const coords = getLocationImageClick(e)
        setMenuCoords(coords);
        updateClickLocation(coords);
    }

    const hideDropdown = () => setShowDropdown(false)

    const imgRef = useRef();

    const handleMenuClick = async (itemName, itemId, x, y) => {
        try {
            const width = imgRef.current.offsetWidth;
            const height = imgRef.current.offsetHeight;

            //relativity so screen size doesn't matter / 60 because header height
            const relX = x / width;
            const relY = (y-60) / height;

            //TODO: Coords from Firestore
            //dummy coords
            const coords = [x, y]

            //click error margin
            const testX = Math.abs(relX - coords.relX0) < 0.042;
            const testY = Math.abs(relY - coords.relY0) < 0.01;

            if(testX && testY) {
                alert(`You found ${itemName}!`);
                toggleFound(itemId)
            } else {
                alert("Nice Try. Keep searching.")
            }

            hideDropdown();
        } catch (error) {
            console.error("Error incoming!", error)
        }



    }


    return(
    <GameContainer
        //onClick={handleImageClick}
        ref={imgRef}
    >
        <ImageContainer onClick={handleImageClick}>
            {showDropdown && (
                <CharacterDropdown 
                    characters={characters}
                    xPos={menuCoords.x}
                    yPos={menuCoords.y}
                    handleMenuClick={handleMenuClick}
                    handleWin={handleWin}
                />
            )}
            <Image src={image}/>
        </ImageContainer>
    </GameContainer>
    )
}

const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ImageContainer = styled.div`
    display: flex;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

export default Game;