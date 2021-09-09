import React from "react";
import styled from "styled-components";
import { MeasurementContext } from "../../context";
import LoadableImage from "../LoadableImage";
import { P, Group, BoldText, LightText } from "./../common";
const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  /* flex: 0 1 24.5%; */
  flex: 0 1 33%;
  flex-wrap: wrap;
  min-height: 250px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  margin-top: 10px;
`;
const Container = styled.div`
  padding: 2px 16px 10px 16px;
`;

const ImageContainer = styled.div`
  margin: 0px 0px 20px 0px;
  padding: 0px 0px 73% 0px;
  overflow: hidden;
  position: relative;
`;

const Separated = styled.span`
  font-weight: 500;

  & + & {
    padding: 0 0 0 5px;
    margin-left: 5px;
    border-left: 1px solid #00000049;
  }
`;
export default function HouseCard(props) {
  const { price, square } = React.useContext(MeasurementContext);
  return (
    <Card>
      <ImageContainer>
        <LoadableImage src={props.house.images[0]} />
      </ImageContainer>
      <Container>
        <LightText>{props.house.product}</LightText>
        <Group>
          <BoldText fontSize="20px">
            {props.house.price} {price}
          </BoldText>
          <LightText>
            {props.house.square} {square}
          </LightText>
        </Group>
        <Group>
          <Separated>{props.house.type}</Separated>
          <Separated>{props.house.garage} garage </Separated>
          <Separated>{props.house.bedrooms} bedrooms </Separated>
          <P>{props.house.address.street}</P>
        </Group>
      </Container>
    </Card>
  );
}
