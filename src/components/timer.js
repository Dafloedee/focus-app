import { useState, useRef } from 'react';
import styled from 'styled-components';
import ButtonComponent from './button';
import { IoPauseCircle, IoPlayCircle, IoReloadCircle } from "react-icons/io5";

const Time = styled.h1`
    color:white;
    font-weight: 600;
    font-size: clamp(160px, 2vw, 200px);
    letter-spacing:10px;
    text-align:center;
    font-variant-numeric: tabular-nums;
  `;

const Container = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
`;

const ButtonContainer = styled.div`
  display:flex;
  gap:30px;
`;

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isStart, setIsStart] = useState(false); // 0 - stop, 1 - play
    const intervalRef = useRef(null);

    const handleTimer = () => {
        if (!isStart) {
            setIsStart(true);
            startTimer();
        } else {
            setIsStart(false);
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    const startTimer = () => {
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
    }

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setSeconds(0);
        setIsStart(false);
    }

    const timerCalc = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    }

    let button;
    if (isStart) {
        button = <ButtonComponent onClick={handleTimer}><IoPauseCircle size={24}></IoPauseCircle>Pause</ButtonComponent>
    } else if (!isStart && seconds !== 0) {
        button = <ButtonComponent onClick={handleTimer}><IoPlayCircle size={24}></IoPlayCircle>Resume</ButtonComponent>
    } else {
        button = <ButtonComponent onClick={handleTimer}><IoPlayCircle size={24}></IoPlayCircle>Start</ButtonComponent>

    }
    return (
        <Container>
            <Time>{timerCalc(seconds)}</Time>
            <ButtonContainer>
                {button}
                <ButtonComponent onClick={resetTimer}><IoReloadCircle size={24}></IoReloadCircle>Reset</ButtonComponent>
            </ButtonContainer>
        </Container>
    )
}

export default Timer