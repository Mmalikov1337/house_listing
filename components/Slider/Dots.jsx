import React from "react";
import {Dot, DotsContainer} from "./style";

export default function Dots(props) {
	return <DotsContainer>
		{
			[...Array(props.len)].map((_, ix) => (
				<Dot key={ix} active={props.activeIndex === ix} onClick={() => props.setActive(ix)}/>)
			)
		}
	</DotsContainer>
}