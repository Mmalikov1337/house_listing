import React from "react";
import Head from "next/head";
import {MeasurementContext} from "../../context";
import styled from "styled-components";
import {BoldText, CenterContainer, Flex, Group, LightText, Main, P, primary} from "../../components/common";
import dotenv from "dotenv";
import Slider from "../../components/Slider";
import MapboxMap from "../../components/Map";
import ChevronLeft from "../../components/SVG/ChevronLeft";
import {useRouter} from "next/router";
import WithHeaderAndFooter from "../../components/Layouts/WithHeaderAndFooter";

const Title = styled.h4`
  font-size: 30px;
  font-weight: normal;
  margin: 0;
`
const Price = styled(P)`
  display: inline-block;
  font-weight: 500;
  font-size: 30px;
`
const Characteristics = styled.div`
  & + & {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #00000099;
  }
`
const CharacteristicsTitle = styled(BoldText)`

`
const CharacteristicsProperty = styled(BoldText)`
  display: inline-block;

`
const CharacteristicsValue = styled(LightText)`

`
const Description = styled(P)`
  text-align: justify;
  text-indent: 30px;
`

export default function House(props) {
	const {price, square} = React.useContext(MeasurementContext);
	const entryMargin = "15px 0 0 0 "
	return (
		<>
			<Head>
				<title>Houses for Sale</title>
			</Head>
			<WithHeaderAndFooter title={"House page"} back={true}>

				<Main>
					<CenterContainer>
						<Flex margin={"15px 0 15px 0"}>

							<Title>
								{props.house.product}
							</Title>
							<Price>
								{props.house.price} {price}
							</Price>
						</Flex>
						<Slider images={props.house.images}/>
						<Flex margin="15px 0  15px 0 ">
							<Description>
								{props.house.description}
							</Description>
						</Flex>
						<Characteristics>
							<CharacteristicsTitle fontSize={"20px"}>Address</CharacteristicsTitle>
							<Flex margin={entryMargin}>
								<CharacteristicsProperty>Street</CharacteristicsProperty>
								<CharacteristicsValue>{props.house.address.street}</CharacteristicsValue>
							</Flex>
							<Flex margin={entryMargin}>
								<CharacteristicsProperty>City</CharacteristicsProperty>
								<CharacteristicsValue>{props.house.address.city}</CharacteristicsValue>
							</Flex>
							<Flex margin={entryMargin}>
								<CharacteristicsProperty>State</CharacteristicsProperty>
								<CharacteristicsValue>{props.house.address.state}</CharacteristicsValue>
							</Flex>
							<Flex margin={entryMargin}>
								<CharacteristicsProperty>Zip</CharacteristicsProperty>
								<CharacteristicsValue>{props.house.address.zip}</CharacteristicsValue>
							</Flex>
						</Characteristics>

						<Characteristics>
							<CharacteristicsTitle fontSize={"20px"}>House info</CharacteristicsTitle>
							<Flex margin={entryMargin}>
								<CharacteristicsProperty>Builder</CharacteristicsProperty>
								<CharacteristicsValue>{props.house.builder}</CharacteristicsValue>
							</Flex>
							<Flex margin={entryMargin}>
								<CharacteristicsProperty>Has basement</CharacteristicsProperty>
								<CharacteristicsValue>{props.house.hasBasement ? "Yes" : "No"}</CharacteristicsValue>
							</Flex>
							<Flex margin={entryMargin}>
								<CharacteristicsProperty>Garage</CharacteristicsProperty>
								<CharacteristicsValue>{props.house.garage}</CharacteristicsValue>
							</Flex>
							<Flex margin={entryMargin}>
								<CharacteristicsProperty>Bedrooms</CharacteristicsProperty>
								<CharacteristicsValue>{props.house.bedrooms}</CharacteristicsValue>
							</Flex>
							<Flex margin={entryMargin}>
								<CharacteristicsProperty>type</CharacteristicsProperty>
								<CharacteristicsValue>{props.house.type}</CharacteristicsValue>
							</Flex>
							<Flex margin={entryMargin}>
								<CharacteristicsProperty>Amenities</CharacteristicsProperty>
								<CharacteristicsValue>{props.house.amenities.reduce((acc, curr) => acc += ", " + curr)}</CharacteristicsValue>
							</Flex>
							<Flex margin={entryMargin}>
								<CharacteristicsProperty>Amenities</CharacteristicsProperty>
								<CharacteristicsValue>{props.house.square} {square}</CharacteristicsValue>
							</Flex>
						</Characteristics>
						<Group>

						<MapboxMap mapboxToken={props.mapboxToken} longitude={props.house.address.coordinates.longitude}
								   latitude={props.house.address.coordinates.latitude}/>
						</Group>
					</CenterContainer>
				</Main>
			</WithHeaderAndFooter>
		</>
	)
		;
}

export async function getServerSideProps(context) {
	dotenv.config();
	const apiRequestURL = new URL(`${process.env.API_URL}${process.env.PORT ? ":"+process.env.PORT : ""}/api/listings/${context.params.id}`);
	const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN
	const response = await fetch(apiRequestURL);
	const {house} = await response.json();
	if (!response.ok || !house) {
		console.log("Failed to fetch", response.status);
		return {
			notFound: true,
		};
	}
	return {
		props: {
			house,
			mapboxToken
		},
	};
}
