import { useState } from 'react';
import styled, { } from 'styled-components';
import Timer from "../components/timer";
import Toolbar from '../components/toolbar';

// Define the Container styled component and prevent bgImage from being forwarded to the DOM
const Background = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'nextImage'
})`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  `;

const BackgroundLayer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'bgImage' && prop !== 'triggerAnimation',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${props => (props.triggerAnimation ? 'fade 1s' : 'none')};
  -webkit-animation: ${props => (props.triggerAnimation ? 'fade 1s' : 'none')};
  z-index: 2;

  @-webkit-keyframes fade {
    0% { -webkit-opacity: 0; }
    20% { -webkit-opacity: 0; }
    33% { -webkit-opacity: 0; }
    53% { -webkit-opacity: 0; }
    100% { -webkit-opacity: 1; }
  }

  @keyframes fade {
    0% { opacity: 0; }
    20% { opacity: 0; }
    33% { opacity: 0; }
    53% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const BackgroundLayerTwo = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'nextImage' && prop !== 'triggerAnimation',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.nextImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
`;

const Content = styled.div`
  z-index: 3;
  color: white;
  text-align: center;
  position: relative;
`;

const ToolbarContainer = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 3;
  `;

const TimerContainer = styled.div`
  z-index:3`

const Main = () => {
  const [currentBg, setCurentBg] = useState('backgrounds/dana-andreea-gheorghe-1lbKXsSCAhc-unsplash.jpg');
  const [nextBg, setNextBg] = useState('backgrounds/marek-piwnicki-CwbnBCXgssk-unsplash.jpg');
  const [index, setIndex] = useState(0);
  const [triggerAnimation, setTriggerAnimation] = useState(false);


  const imageList = [
    'backgrounds/dana-andreea-gheorghe-1lbKXsSCAhc-unsplash.jpg',
    'backgrounds/marek-piwnicki-CwbnBCXgssk-unsplash.jpg',
  ];

  let indexs;
  const toogleBackground = () => {
    setTriggerAnimation(false);
    if (index === (imageList.length - 1)) {
      setIndex(0);
      indexs = 0;
      setTimeout(() => {
        setTriggerAnimation(true);
        setCurentBg(imageList[indexs]);
        setNextBg(imageList[indexs + 1]);

      }, 10);
    } else {
      setIndex(index + 1);
      indexs = index + 1;
      setTimeout(() => {
        setTriggerAnimation(true);
        setCurentBg(imageList[indexs]);
        if (index + 1 === (imageList.length - 1)) {
          setNextBg(imageList[0]);
        } else {
          setNextBg(imageList[indexs + 1]);
        }

      }, 10);

    }
  }
  return (
    <Background nextImage={nextBg}>
      <BackgroundLayer bgImage={currentBg} triggerAnimation={triggerAnimation}></BackgroundLayer>
      <BackgroundLayerTwo nextImage={nextBg} triggerAnimation={triggerAnimation}></BackgroundLayerTwo>
      <ToolbarContainer>
        <Toolbar changeBackground={toogleBackground}></Toolbar>
      </ToolbarContainer>
      <TimerContainer>
        <Timer></Timer>
      </TimerContainer>

    </Background>
  )
}

export default Main