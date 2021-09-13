import React from "react";
import Top from "../Top";
import {FooterContainer} from "../Bottom/footer";

export default function WithHeaderAndFooter(props) {
	return (
		<>
			<Top {...props}/>
			{props.children}
			<FooterContainer/>
		</>
	);
}
