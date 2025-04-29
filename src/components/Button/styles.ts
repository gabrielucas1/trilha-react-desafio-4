import styled from 'styled-components';


export const ButtonContainer = styled.button.attrs((props) => ({
  }))<React.ButtonHTMLAttributes<HTMLButtonElement>>`
    width: 100%;
    height: 42px;
    background-color: ${(props) => (props.disabled ? "rgb(255, 0, 0)" : "#81259D")};
    color: #FFF;

    border: 1px solid transparent;
    border-radius: 21px;


`;