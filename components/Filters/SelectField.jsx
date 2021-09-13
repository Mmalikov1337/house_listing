import React from "react";
import { FilterContext } from "../../context";
import { Flex, LightText, LightTextInline, primary } from "../common";
import styled from "styled-components";

const Label = styled.label`
  position: relative;
  display: inline;
  box-sizing: border-box;
  border-radius: 5px;
  background: white;
  box-shadow: 0 1px 3px -2px #9098a9;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  transition: all 150ms ease;

  &::after {
    box-sizing: border-box;
    content: "";
    position: absolute;
    top: 50%;
    right: 5px;
    display: block;
    background: transparent;
    transform: translateY(-50%);
    pointer-events: none;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 5px 0 5px;
    border-color: ${primary} transparent transparent transparent;
  }
`;
const Select = styled.select`
  max-width: 200px;
  -webkit-appearance: none;
  padding: 4px 40px 4px 12px;
  width: 100%;
  border: 1px solid #e8eaed;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 1px 3px -2px #9098a9;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  transition: all 150ms ease;
  color:#00000099;
  &:required {
    &:invalid {
      color: #5a667f;
    }
  }

  &:focus {
    outline: none;
  }

`;

const Option = styled.option`
  color: #223254;
  transition: 1s;

  &[value=""][disabled] {
    display: none;
  }
`;
export default function SelectField(props) {
  const { filters, setFilters } = React.useContext(FilterContext);
  const onChange = (e) => {
    const temp = { ...filters };
    if (!e.target.value || e.target.value === "none") {
      temp[props.filter.field] = undefined;
      setFilters(temp);
      return;
    }
    temp[props.filter.field] = e.target.value;
    setFilters(temp);
  };
  return (
    <Flex direction="column" >
      <LightText >{props.filter.title}</LightText>
      <Label htmlFor="filter_select">
        <Select
          id="filter_select"
          required={true}
          onChange={onChange}
          defaultValue=""
        >
          <Option value="" disabled={true}>
            Select option
          </Option>
          <Option value="none">None</Option>
          {props.filter.names.map((name, index) => (
            <Option value={props.filter.values[index]} key={name}>
              {name}
            </Option>
          ))}
        </Select>
      </Label>
    </Flex>
  );
}
