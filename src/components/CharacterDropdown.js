import React, { useEffect } from "react";
import CharacterDropdownField from "../utils/CharacterDropdownField";
import styled from "styled-components";


const CharacterDropdown = ({
    characters,
    xPos,
    yPos,
    handleWin,
    handleMenuClick
}) => {

    const notFound = characters.filter((item) => !item.found).map((item) => {
        <CharacterDropdownField
            key={item.id}
            title={item.name}
            onClick={(e) => {
                e.stopPropagation();
                handleMenuClick(item.name, item.id, xPos, yPos)}
            }
        >
            
        </CharacterDropdownField>
    });

    useEffect(
        () => {
            const win = characters.every((item) => item.found);
            if (win) {
                handleWin();
            }
        }, [characters, handleWin]
    )


    return(
        <Context style={{ top: `calc(${yPos}px - 3.75rem)`, left: `${xPos}px`}}>
            <Fields>
                {notFound}
            </Fields>
        </Context>
    )
}

export default CharacterDropdown;

const Context = styled.div`
    position: absolute;
    height: 10rem;
    widht: 10rem;
    background-color: black;
    color: red;
`
//top: calc${yPos}px;
//left: ${xPos}px;

const Fields = styled.ul`
    display: flex;
`