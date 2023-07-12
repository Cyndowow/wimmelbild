import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <HeaderWrapper>
            <Navbar>
                <HeaderElement to="/info">
                    Info
                </HeaderElement>
                <HeaderElement to="/">
                    Home
                </HeaderElement>
                <HeaderElement to="/leaderboard">
                    Leaderboard
                </HeaderElement>
            </Navbar>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    background-color: #2e2d2b;
    margin: 0;
    padding: 0;
    height: 60px;
`

const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 7rem;
`

const HeaderElement = styled(Link)`
    padding: 1rem;
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;

    &: hover {
        transform: scale(1.1)
    }
`

export default Header;