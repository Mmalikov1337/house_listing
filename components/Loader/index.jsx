import React from "react"
import {Ball, Holder, Ring, Wraper} from "./styles";
export default function Loader(props) {
	if (!props.doRender) {
		return null;
	}
	return (
		<Wraper id="bowlG">
			<Ring id="bowl_ringG">
				<Holder className="ball_holderG">
					<Ball className="ballG"></Ball>
				</Holder>
			</Ring>
		</Wraper>
	);
}