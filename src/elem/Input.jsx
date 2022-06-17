import React from "react";
import styled, { css } from "styled-components";

export default function Input({ children, ...restProps }) {
  return <StInput {...restProps} />;
}

const StInput = styled.input`
  margin: 0 16px;
  width: 100%;
  border: none;
  outline: none;
`;
