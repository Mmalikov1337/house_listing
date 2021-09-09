import styled from "styled-components";
import { primary } from "./../common";
import { lighten } from "polished";

export const PaginationContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  font-weight: bold;
  user-select: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 15px 0;
`;
export const PaginationIcon = styled.li`
  width: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;

  path {
    fill: ${primary};
  }

  &:hover {
    path {
      fill: ${lighten(0.1, primary)};
    }
  }
`;
export const PaginationElement = styled.li`
  & + & {
    margin-left: 5px;
  }
`;
export const PaginationNumber = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;

  border: ${(props) => props.active && "1px solid" + primary};
  background: ${(props) => props.active && primary};
  color: ${(props) => props.active && "#ffffff"};
  &:hover {
    border: 1px solid ${primary};
  }
`;

export const Dots = styled.li`
  padding: 10px;
`;
