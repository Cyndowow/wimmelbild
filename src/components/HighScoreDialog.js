import React, { useState } from "react";
import {useInput} from "../hooks/useInput";
import styled from "styled-components"

function HighScoreDialog({imageId, time, handleRestart}) {
    const [showForm, setShowForm] = useState(false);
    const [name, handleChange] = useInput("");
    const [hasAddedScore, setHasAddedScore] = useState(false);
    //scores
    const timeElapsed = (time.end - time.start) / 1000;



    return(
        <ScoreContainer>
            <Scores>
                <h1>High Scores</h1>
            </Scores>
        </ScoreContainer>
    )
}

const ScoreContainer = styled.div`
    display: flex;
`

const Scores = styled.div`
    display: flex;
`