import React from "react";
import {MeasurementContext} from "../../context";
import LoadableImage from "../LoadableImage";
import {P, Group, BoldText, LightText} from "../common";
import {Card, ImageContainer, Container, Separated} from "./styles";

export default function HouseCard(props) {
	const {price, square} = React.useContext(MeasurementContext);
	return (
		<Card onClick={props.onClick}>
			<ImageContainer>
				<LoadableImage src={props.house.images[0]}/>
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
