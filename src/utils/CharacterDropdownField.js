import React from "react";
import styled from "styled-components";

const CharacterDropdownField = ({title, onClick}) => {
    return(
        <ListElement
            key={title}
            href="#menuitem"
            onClick={onClick()}
            role="menuitem"
        >
            <Dropdown>
                <Title>{title}</Title>
            </Dropdown>
        </ListElement>
    )
}

export default CharacterDropdownField;

const ListElement = styled.li`
    display: flex;
    height: 2rem;
`

const Dropdown = styled.div`
    display: flex;
`

const Title = styled.div`
    display: flex;
`