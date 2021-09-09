import React from "react";
import { Group, Flex, LightText, MergedBorders, Button } from "../common";
import NumberFilterField from "./NumberFilterField";
import styled from "styled-components";
import { darken } from "polished";
import { FilterContext } from "../../context";

export default function MultipleChoiseField(props) {
  const [active, setActive] = React.useState(-1);
  const { filters, setFilters } = React.useContext(FilterContext);

  const select = (index) => {
    console.log(
      "props.filter.value]",
      props.filter.value,
      props.filter.fields[index],
      props
    );
    // if (active === -1) return;
    const temp = { ...filters };
    if (active === index) {
      console.log("active === index",active, index);
      temp[props.filter.value] = undefined;
      setFilters(temp);
      return setActive(-1);
    }
    temp[props.filter.value] = props.filter.fields[index];
    console.log("temp",temp);
    setFilters(temp);
    setActive(index);
  };

  React.useEffect(() => {
    const notEqual = props.filter.names.length !== props.filter.fields.length;
    if (!notEqual) return;
    console.log(
      notEqual,
      "MultipleChoise names length must be equal fields length",
      props.filter.names.length,
      props.filter.fields.length
    );
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
