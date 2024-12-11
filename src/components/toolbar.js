import styled from 'styled-components';
import { MdLibraryMusic } from "react-icons/md";
import { BsDisplay } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { fetchTracks } from '../services/deezerService';

const Container = styled.div`
border-radius: 5px;
background-color: rgba(255,255,255,0.5);
width:210px;
padding: 7px 12px;
color: white;
display: flex;
align-items: center;
gap: 7px;
`

const Toolbar = ({changeBackground}) => {
    const [currentTime, setCurrentTIme] = useState('');

    const getTime = () => {
        const date = new Date();
        const options = { weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: true };
        return new Intl.DateTimeFormat('en-US', options).format(date).slice(0, 12);
    }

    const getMusic = () => {
        fetchTracks();
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTIme(getTime());
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <Container>
            <BsDisplay size={24} onClick={changeBackground}></BsDisplay>
            <MdLibraryMusic size={24} onClick={getMusic}></MdLibraryMusic>
            <div></div>
            {currentTime}
        </Container>
    )

}

export default Toolbar