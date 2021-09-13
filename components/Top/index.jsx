import React from "react";
import styled from "styled-components";
import {CenterContainer, Flex, P, primary} from "../common";
import ChevronLeft from "../SVG/ChevronLeft";
import {useRouter} from "next/router";
import Loader from "../Loader";
import {LoadingContext} from "../../context";

const Header = styled.header`
  width: 100%;
  height: 50px;
  background: ${primary};
  color: white;
  font-family: Roboto, serif;
  font-size: 30px;
`
const Back = styled.div`
  height: 18px;
  width: 18px;
  padding: 7px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 15px;
  transition: all .5s;
  display: flex;
  align-items: center;
  background: transparent;

  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }

  svg {
    transform: translateX(-1px);
    fill: white;
  }
`
export default function Top(props) {
	const router = useRouter()
	const {loading} = React.useContext(LoadingContext)
	return (
		<Header>
			<Flex align="center" height={"100%"}>
				<CenterContainer>
					<Flex align={"center"} justify={"space-between"}>

					{props.back ? <Flex align="center" justify={"flex-start"}>
							<Back onClick={router.back}>
								<ChevronLeft/>
							</Back>
							<P>{props.title}</P>
						</Flex>
						:
						<P>{props.title}</P>
					}
					<Loader doRender={loading}/>
					</Flex>
				</CenterContainer>

			</Flex>
		</Header>
	);
}
