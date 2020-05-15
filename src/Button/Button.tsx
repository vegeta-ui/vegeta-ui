// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";

import { ButtonProps } from "./Button.types";

import "./Button.scss";

const Button: React.FC<ButtonProps> = props => {
  const { children, vegeta } = props;

  const StyledButton = styled.button`
    -webkit-appearance: none;
    position: relative;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    border: 0;
    border-radius: 0.3em;
    line-height: 38px;
    white-space: nowrap;
    font-weight: 500;
    min-width: 170px;
    height: 40px;
    font-size: 0.875rem;
    flex-shrink: 0;
    color: #fff;
    background-color: ${props => props.theme.primary};
    user-select: none;
    cursor: pointer;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    padding: 0px 25px;
    margin: 0px;
    transition: all 0.2s ease 0s;
    overflow: hidden;
    outline: none;
  `;

  return <StyledButton data-testid="Button">{children}</StyledButton>;
};

export default Button;
