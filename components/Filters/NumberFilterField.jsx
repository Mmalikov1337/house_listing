import React from "react";
import {FilterContext} from "../../context";
import {Input} from "../common";

export default function NumberFilterField(props) {
	const {filters, setFilters} = React.useContext(FilterContext);
	const onChange = (e) => {
		const temp = {...filters};
		temp[props.field] = e.target.value;
		setFilters(temp);
	};
	return (
		<Input
			type="number"
			onChange={(e) => onChange(e)}
			placeholder={props.name}
		/>
	);
}
