import React from 'react';
import styled from 'styled-components';

// Define Button with responsive sizes from sm to xl
const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'primary'
})`
  padding: ${props => (props.size === 'sm' ? '8px 16px' :
        props.size === 'md' ? '10px 20px' :
            props.size === 'lg' ? '12px 24px' :
                props.size === 'xl' ? '14px 28px' :
                    '10px 20px')};
  font-size: ${props => (props.size === 'sm' ? '12px' :
        props.size === 'md' ? '14px' :
            props.size === 'lg' ? '16px' :
                props.size === 'xl' ? '18px' :
                    '14px')};
  background-color: ${props => props.primary ? '#007bff' : 'rgba(255,255,255,0.5)'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display:flex;
  align-items: center;
  gap:5px;

  &:hover {
    background-color: ${props => props.primary ? '#0056b3' : '#999'};
  }

  // Responsive design
  @media (max-width: 576px) {
    padding: 6px 12px;
    font-size: 12px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    padding: 10px 20px;
    font-size: 16px;
  }

  @media (min-width: 1200px) {
    padding: 12px 24px;
    font-size: 18px;
  }
`;

const ButtonComponent = ({ size = 'md', primary = false, onClick, children }) => {
    return <Button size={size} primary={primary} onClick={onClick}>{children}</Button>;
};

export default ButtonComponent;
