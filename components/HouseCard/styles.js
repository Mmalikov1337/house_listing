import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  flex: 0 1 33%;
  flex-wrap: wrap;
  min-height: 250px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  margin-top: 10px;
`;
export const Container = styled.div`
  padding: 2px 16px 10px 16px;
`;

export const ImageContainer = styled.div`
  margin: 0px 0px 20px 0px;
  padding: 0px 0px 73% 0px;
  overflow: hidden;
  position: relative;
`;

export const Separated = styled.span`
  font-weight: 500;

  & + & {
    padding: 0 0 0 5px;
    margin-left: 5px;
    border-left: 1px solid #00000049;
  }
`;