import { useState } from 'react';
import styled from 'styled-components';
import Timer from "./timer";

// Define the Container styled component and prevent bgImage from being forwarded to the DOM
const Background = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'bgImage',
})`
    width: 100%;
    height: 100vh;
    background-image: ${props => `url(${props.bgImage})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `;




const BackgroundImage = () => {
  const [backgroundImage, setBackgroundImage] = useState('backgrounds/dana-andreea-gheorghe-1lbKXsSCAhc-unsplash.jpg');
  return (
    <Background bgImage={backgroundImage}>
        <Timer></Timer>
    </Background>
  )

}

export default BackgroundImage