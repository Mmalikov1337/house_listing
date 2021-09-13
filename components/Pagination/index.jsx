import {useRouter} from "next/router";
import React from "react";
import ChevronLeft from "../SVG/ChevronLeft";
import ChevronRight from "../SVG/ChevronRight";
import createPages from "./createPages";
import {
	PaginationContainer,
	PaginationIcon,
	PaginationNumber,
	Dots,
} from "./style";

export default function Pagination(props) {
	const offsetOn = 3;
	const current = Math.ceil(props.offset / props.limit) + 1;
	const totalPage = Math.ceil(props.total / props.limit)
	const pages = createPages(
		totalPage,
		current,
		props.displayQuantity,
		offsetOn
	);
	const router = useRouter();
	const last = Math.ceil(props.total / props.limit);
	const nextPage = () => {
		if (!router.isReady) return;
		const limit = props.limit;
		const offset = props.offset + props.limit;
		if (offset >= props.total) return
		router.query["limit"] = limit;
		router.query["offset"] = offset;
		router.push({pathname: router.pathname, query: router.query});
	};
	const prevPage = () => {
		if (!router.isReady) return;
		const limit = props.limit;
		const offset =
			props.offset - props.limit > 0 ? props.offset - props.limit : 0;
		router.query["limit"] = limit;
		router.query["offset"] = offset;
		router.push({pathname: router.pathname, query: router.query});
	};
	const setPage = (current) => {
		if (!router.isReady) return;
		const offset = Math.ceil((current - 1) * props.limit);
		router.query["limit"] = props.limit;
		router.query["offset"] = offset;
		router.push({pathname: router.pathname, query: router.query});
	};
	return (
		<PaginationContainer>
			<PaginationIcon onClick={prevPage}>
				<ChevronLeft/>
			</PaginationIcon>
			{pages[0] !== 1 && (
				<>
					<PaginationNumber onClick={() => setPage(1)}>{1}</PaginationNumber>
					{pages[0] !== 2 && <Dots>...</Dots>}
				</>
			)}
			{pages.map((it) => (
				<PaginationNumber active={it === current} onClick={() => setPage(it)} key={it}>
					{it}
				</PaginationNumber>
			))}
			{pages[pages.length - 1] !== last && (
				<>
					<Dots>...</Dots>
					<PaginationNumber onClick={() => setPage(last)}>
						{last}
					</PaginationNumber>
				</>
			)}
			<PaginationIcon onClick={nextPage}>
				<ChevronRight/>
			</PaginationIcon>
		</PaginationContainer>
	);
}
