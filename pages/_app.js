import "./../public/style.css";
import "./../public/mapbox-gl.css";
import Router from "next/router";
import {LoadingContext, MeasurementContext} from "../context";
import {createGlobalStyle} from "styled-components";
import React from "react"
import {primary} from "../components/common";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background: #d6d6d6;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #a3a3a3;
    width: 8px;
    &:hover {
      background: ${primary};
    }
  }
`

export default function App({Component, pageProps}) {
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		const startHandler = () => {
			console.log("routeChangeStart")
			setLoading(true)
		}
		const completeHandler = () => {
			console.log("routeChangeComplete")
			setLoading(false)
		}
		Router.events.on("routeChangeStart", startHandler)
		Router.events.on("routeChangeComplete", completeHandler)
		return () => {
			Router.events.off("routeChangeStart", startHandler)
			Router.events.off("routeChangeComplete", completeHandler)
		}
	})
	return (
		<>
			<GlobalStyle/>
			<MeasurementContext.Provider
				value={{
					price: "USD",
					square: "Square foots",
				}}
			>
				<LoadingContext.Provider value={{loading}}>
					<Component {...pageProps} />
				</LoadingContext.Provider>
			</MeasurementContext.Provider>
		</>
	)
}
