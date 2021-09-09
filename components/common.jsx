import React from "react";
import styled from "styled-components";
import { darken, lighten } from "polished";

export const primary = "#039BE5";
export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => props.wrap || "no-wrap"};
  justify-content: ${(props) => props.justify || "space-between"};
  align-items: ${(props) => props.align || "unset"};
  margin: ${(props) => props.margin || "unset"};
  & + & {
    margin: ${(props) => props.gap || "unset"};
  }
`;
export const P = styled.p`
  margin-top: ${(props) => props.mt ?? "0"};
  margin-bottom: ${(props) => props.mb ?? "0"};
`;
export const Group = styled.div`
  margin: 10px 0;
`;
export const BoldText = styled(P)`
  font-weight: 500;
  font-size: ${(props) => props.fontSize ?? "16px"};
`;
export const LightText = styled(P)`
  font-size: ${(props) => props.fontSize ?? "16px"};
  font-weight: normal;
  color: #00000099;
`;
export const LightTextInline = styled.span`
  font-size: ${(props) => props.fontSize ?? "16px"};
  font-weight: normal;
  color: #00000099;
  margin: ${(props) => props.margin || "unset"};
`;
export const Input = styled.input`
  outline: none;
  border: 1px solid #00000099;
  border-radius: 5px;
  padding: 6px;
  width: 75px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const CenterContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const Button = styled.button`
  border: none;
  border-radius: 5px;
  font-weight: 500;
  color: ${(props) => props.color ?? "white"};
  background: ${(props) => props.background ?? primary};
  /* font-size: 20px; */
  padding: 7px 20px;
  transition: all 0.5s;
  &:hover {
    background: ${(props) => darken(0.05, props.background ?? primary)};
  }
  &:active {
    background: ${(props) => darken(0.1, props.background ?? primary)};
  }
`;
export const MergedBorders = styled.div`
  * {
    border-radius: 0;
  }
  *:last-child {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: none;
  }

  *:first-child {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
