import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import HouseCard from "../../components/HouseCard";
import { MeasurementContext } from "../../context";
import styled from "styled-components";
import { CenterContainer, Flex } from "../../components/common";
import dotenv from "dotenv";
import FiltersField from "../../components/Filters";
import Pagination from "../../components/Pagination";
import {defaultOnPage} from "./../../config"
const Main = styled.main`
  font-family: Roboto;
`;

export default function Listings(props) {

  return (
    <MeasurementContext.Provider
      value={{
        price: "USD",
        square: "Square foots",
      }}
    >
      <Head>
        <title>Houses for Sale</title>
      </Head>
      <Main>
        <h2>Houses for Sale</h2>
        <FiltersField />
        <CenterContainer>
          <Flex direction="row" wrap="wrap">
            {props.houses.map((item) => (
              <HouseCard house={item} key={item.id} />
            ))}
          </Flex>
        </CenterContainer>
        <Pagination
          total={props.count}
          limit={props.limit}
          offset={props.offset}
          displayQuantity={7}
        />
      </Main>
    </MeasurementContext.Provider>
  );
}

export async function getServerSideProps(context) {
  dotenv.config();
  const resolvedURL = new URL(`${process.env.ROOT_URL}${context.resolvedUrl}`);
  const apiRequestURL = new URL(`${process.env.API_URL}/api/listings`);
  const entries = resolvedURL.searchParams.entries();
  for (let [key, value] of entries) {
    apiRequestURL.searchParams.append(key, value);
  }
  const limit = ~~resolvedURL.searchParams.get("limit")
    ? ~~resolvedURL.searchParams.get("limit")
    : defaultOnPage;
  const offset = Number(resolvedURL.searchParams.get("offset"))
    ? Number(resolvedURL.searchParams.get("offset"))
    : 0;
  if (
    !apiRequestURL.searchParams.has("offset") ||
    !apiRequestURL.searchParams.has("limit")
  ) {
    apiRequestURL.searchParams.append("limit", limit);
    apiRequestURL.searchParams.append("offset", offset);
  }
  const response = await fetch(apiRequestURL);

  const { count, houses } = await response.json();
  if (!response.ok || houses.length === 0) {
    console.log("Failed to fetch", response.status, houses, count);
    return {
      //
      props: {
        houses,
        limit,
        offset,
        count,
      },
    };
  }
  console.log("count", count);
  return {
    props: {
      houses,
      limit,
      offset,
      count,
    },
  };
}
