import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Listings(props) {
  const router = useRouter();

  const nextPage = () => {
    const params = new URLSearchParams();
    const limit = props.limit;
    const offset = props.offset + props.limit;
    params.append("limit", limit);
    params.append("offset", offset);
    router.push("?" + params);
  };
  const prevPage = () => {
    const params = new URLSearchParams();
    const limit = props.limit;
    const offset = props.offset - props.limit > 0 ? props.offset - props.limit : 0 ;
    params.append("limit", limit);
    params.append("offset", offset);
    router.push("?" + params);
  };
  React.useEffect(() => {}, [router.isReady, router.query]);
  return (
    <div>
      <Head>
        <title>Houses for Sale</title>
      </Head>
      <div>
        <h2>Houses for Sale</h2>
        {props.houses.map((item) => (
          <div key={item.id}>{item.product}</div>
        ))}
      </div>
      <button onClick={nextPage}>next</button>
      <button onClick={prevPage}>prev</button>
    </div>
  );
}

import dotenv from "dotenv";

export async function getServerSideProps(context) {
  dotenv.config();
  const resolvedURL = new URL(`${process.env.ROOT_URL}${context.resolvedUrl}`);
  const apiRequestURL = new URL(`${process.env.API_URL}/api/listings`);
  const limit = ~~resolvedURL.searchParams.get("limit")
    ? ~~resolvedURL.searchParams.get("limit")
    : 10;
  const offset = Number(resolvedURL.searchParams.get("offset"))
    ? Number(resolvedURL.searchParams.get("offset"))
    : 0;
  apiRequestURL.searchParams.append("limit", limit);
  apiRequestURL.searchParams.append("offset", offset);

  const response = await fetch(apiRequestURL);

  const houses = await response.json();
  if (!response.ok || houses.length === 0) {
    console.log("Failed to fetch", response.status, houses);
    return {
      notFound: true,
    };
  }
  return {
    props: {
      houses,
      limit,
      offset,
    },
  };
}
