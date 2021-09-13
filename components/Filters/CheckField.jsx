import React from "react";
import {FilterContext} from "../../context";
import {Flex, LightTextInline, primary} from "../common";
import styled from "styled-components";
import {lighten} from "polished";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
const HiddenCheckbox = styled.input.attrs({type: "checkbox"})`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? primary : lighten(0.5, primary))};
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid ${primary};

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${lighten(0.5, primary)};
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const Checkbox = ({checked, ...props}) => (
	<CheckboxContainer>
		<HiddenCheckbox checked={checked} {...props} />
		<StyledCheckbox checked={checked}>
			<Icon viewBox="0 0 24 24">
				<polyline points="20 6 9 17 4 12"/>
			</Icon>
		</StyledCheckbox>
	</CheckboxContainer>
);
export default function CheckField(props) {
	const {filters, setFilters} = React.useContext(FilterContext);
	const [checked, setChecked] = React.useState(false);
	const onChange = (e) => {
		const temp = {...filters};
		temp[props.filter.field] = e.target.checked;
		setFilters(temp);
		setChecked(e.target.checked);
	};
	return (
		<Flex direction="row" align="center" margin="15px 0 0 0 ">
			<label>
				<Checkbox checked={checked} onChange={onChange}/>
				<LightTextInline margin="0 0 0 5px">
					{props.filter.title}
				</LightTextInline>
			</label>
		</Flex>
	);
}
