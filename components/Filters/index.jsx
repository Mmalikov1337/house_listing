import React from "react";
import styled from "styled-components";
import BetweenFilterNumber from "../../Classes/BetweenFilterNumber";
import CheckFilter from "../../Classes/CheckFilter";
import SelectFilter from "../../Classes/SelectFilter";
import BetweenNumbersField from "./BetweenNumbersField";
import {Button, CenterContainer, Flex} from "../common";
import {FilterContext} from "../../context";
import {useRouter} from "next/router";
import MultipleChoise from "../../Classes/MultipleChoise";
import BinaryChoiseField from "./MultipleChoiseField";
import CheckField from "./CheckField";
import SelectField from "./SelectField";

const Container = styled(CenterContainer)`
  border-bottom: 1px solid #00000099;
  padding-bottom: 10px;
`;

const availableFilters = [
	//Вложенные массивы - строки, экземпляры классов - колонки
	[
		new BetweenFilterNumber("From", "Until", "Price", "price_gte", "price_lte"),
		new BetweenFilterNumber(
			"From",
			"Until",
			"Square",
			"square_gte",
			"square_lte"
		),
		new BetweenFilterNumber(
			"From",
			"Until",
			"Garage",
			"garage_gte",
			"garage_lte"
		),
	],
	[
		new BetweenFilterNumber(
			"From",
			"Until",
			"Bedrooms",
			"bedrooms_gte",
			"bedrooms_lte"
		),
		new SelectFilter(
			["Has basement", "No basement"],
			"Basement",
			["Has_basement", "No_basement"],
			"hasBasement"
		),
		new MultipleChoise(["MultiFamily", "SingleFamily"], "Type", "type", [
			"MultiFamily",
			"SingleFamily",
		]),
	],
];

const getCompByType = (filter, key) => {
	if (filter instanceof BetweenFilterNumber) {
		return <BetweenNumbersField filter={filter} key={key}/>;
	}
	if (filter instanceof MultipleChoise) {
		return <BinaryChoiseField filter={filter} key={key}/>;
	}
	if (filter instanceof CheckFilter) {
		return <CheckField filter={filter} key={key}/>;
	}
	if (filter instanceof SelectFilter) {
		return <SelectField filter={filter} key={key}/>;
	}
	console.log("getCompByType, default", filter);
};
export default function FiltersField(props) {
	const [filters, setFilters] = React.useState({});
	const router = useRouter();

	const applyFilters = () => {
		if (!router.isReady) return;
		const entries = Object.entries(filters);
		const newQuery = {};
		for (let [key, value] of entries) {
			if (!value || !key) continue;
			newQuery[key] = value;
		}
		router.push({pathname: router.pathname, query: newQuery});
	};
	return (
		<Container>
			{availableFilters.map((row, index) => {
				return (
					<Flex key={index} margin={"10px 0 0 0"}>
						<FilterContext.Provider
							value={{
								filters,
								setFilters,
							}}
						>
							{row.map((it, ix) => getCompByType(it, ix))}
						</FilterContext.Provider>
					</Flex>
				);
			})}
			<Flex align="center" justify="center" margin={"10px 0 0 0"}>
				<Button onClick={applyFilters}>Apply filters</Button>
			</Flex>
		</Container>
	);
}
