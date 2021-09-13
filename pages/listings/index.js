import React from "react";
import Head from "next/head";
import HouseCard from "../../components/HouseCard";
import {CenterContainer, Flex, Main} from "../../components/common";
import dotenv from "dotenv";
import FiltersField from "../../components/Filters";
import Pagination from "../../components/Pagination";
import {useRouter} from "next/router";
import WithHeaderAndFooter from "../../components/Layouts/WithHeaderAndFooter";


export default function Listings(props) {
	const router = useRouter()
	return (
		<>
			<Head>
				<title>Houses for Sale</title>
			</Head>
			<WithHeaderAndFooter title={"Houses for Sale"}>
				<Main>
					<FiltersField/>
					<CenterContainer>
						<Flex direction="row" wrap="wrap">
							{props.houses.map((item) => (//{pathname: "/listings/[id]", query:{id:item.id}}
								<HouseCard house={item}
										   onClick={() => router.push({
											   pathname: "/listings/[id]",
											   query: {id: item.id}
										   })}/>
							))}
						</Flex>
						<Pagination
							total={props.count}
							limit={props.limit}
							offset={props.offset}
							displayQuantity={7}
						/>
					</CenterContainer>
				</Main>
			</WithHeaderAndFooter>
		</>
	)
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
		: ~~process.env.DEFAULT_LIMIT;
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

	const {count, houses} = await response.json();
	if (!response.ok || houses.length === 0) {
		console.log("Failed to fetch", response.status, houses, count);
		return {
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
