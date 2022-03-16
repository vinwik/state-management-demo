import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  border: none;
  background-color: var(--secondary-color);
  padding: 2em;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;

export default Button;
