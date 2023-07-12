import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
//import { useToggle } from "./hooks/useToggle";
import Game from "./pages/Game";
import Info from "./pages/Info";
import Header from "./components/Header";
import {styled, createGlobalStyle} from "styled-components";
import levelData from "./allLevelData";
import "./styles.css"


export default function App() {

    const [modalOpen, toggleModalOpen] = useState(true);
    const [time, setTime] = useState({ start: 0, end: 0 });
    const [isGameOver ,setIsGameOver] = useState(true);
    const [stageModal, setStageModal] = useState("start");

    const handleStart = () => {
        setIsGameOver(false);
        setTime({...time, start: Date.now() });
        toggleModalOpen();
    }
    
    const handleWin = () => {
        if (!modalOpen) {
            setIsGameOver(true);
            setTime({ ...time, end: Date.now() });
            setStageModal("highscore");
            toggleModalOpen();
        }   
    }
    
    return(
        <Body>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Game  handleWin={handleWin} image={levelData.board} characters={levelData.characters}/>} />
                <Route path="/info" element={<Info />} />
            </Routes>
        </Body>
    )
}

const Body = styled.div`
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: grey;
`
const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  height: 100vh;
}
`