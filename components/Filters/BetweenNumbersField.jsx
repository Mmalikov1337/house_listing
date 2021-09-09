import React from "react";
import { Group, Flex, LightText } from "../common";
import NumberFilterField from "./NumberFilterField";
import styled from "styled-components";

const MergedInputs = styled.div`
  input:last-child {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-left: none;
  }
  input:first-child {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

export default function BetweenNumbersField(props) {
  return (
    // <Group>
    <Flex direction="column">
      <LightText>{props.filter.title}</LightText>
      <Flex justify="flex-start">
        <MergedInputs>
          <NumberFilterField
            name={props.filter.gteName}
            field={props.filter.gteField}
          />
          <NumberFilterField
            name={props.filter.lteName}
            field={props.filter.lteField}
          />
        </MergedInputs>
      </Flex>
    </Flex>
    // </Group>
  );
}
