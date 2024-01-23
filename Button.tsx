import styled from 'styled-components';

interface ButtonProps {
    $randomleft: string;
    $randomtop: string;
    $hasstarted: boolean
}

const Button = styled.button<ButtonProps>`
  position: ${({ $hasstarted }) => ($hasstarted ? "absolute" : "relative")};;
  transition: all 0.05s ease-in-out;
  left: ${({ $hasstarted, $randomleft }) => ($hasstarted ? $randomleft : '0')};
  top: ${({ $hasstarted, $randomtop }) => ($hasstarted ? $randomtop : '0')};
`;

export default Button;
