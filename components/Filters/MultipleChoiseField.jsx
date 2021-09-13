import React from "react";
import {Flex, LightText, MergedBorders, Button} from "../common";
import {darken} from "polished";
import {FilterContext} from "../../context";

export default function MultipleChoiseField(props) {
	const [active, setActive] = React.useState(-1);
	const {filters, setFilters} = React.useContext(FilterContext);

	const select = (index) => {
		const temp = {...filters};
		if (active === index) {
			temp[props.filter.value] = undefined;
			setFilters(temp);
			return setActive(-1);
		}
		temp[props.filter.value] = props.filter.fields[index];
		setFilters(temp);
		setActive(index);
	};

	React.useEffect(() => {
		const notEqual = props.filter.names.length !== props.filter.fields.length;
		if (!notEqual) return;
	}, []);

	return (
		<Flex direction="column">
			<LightText>{props.filter.title}</LightText>
			<Flex justify="flex-start">
				<MergedBorders>
					{props.filter.names.map((it, index) => (
						<Button
							key={it}
							background={active === index ? darken(0.05, "#039BE5") : null}
							onClick={() => select(index)}
						>
							{it}
						</Button>
					))}
				</MergedBorders>
			</Flex>
		</Flex>
	);
}
