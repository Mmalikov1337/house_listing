import React from "react";
import ReactMapboxGl, {Layer, Feature, Marker} from 'react-mapbox-gl';
import {P} from "../common";


function MapboxMap(props) {
	const Map = ReactMapboxGl({
		accessToken: props.mapboxToken,
	});
	return (
		<Map
			style="mapbox://styles/mapbox/streets-v9"
			containerStyle={{
				height: '500px',
				width: '100%'
			}}
			center={[props.longitude, props.latitude]}
		>
			<Layer
				type="symbol"
				layout={{"icon-image": "harbor-15"}}>
				<Feature coordinates={[props.longitude, props.latitude]}/>
			</Layer>
			<Marker
				coordinates={[props.longitude, props.latitude]}
				anchor="bottom">
				<P>lat {props.latitude}</P>
				<P>lon {props.longitude}</P>
				<img src={"https://www.freepngimg.com/thumb/map/66981-map-google-pin-places-maps-maker.png"} width={30}
					 height={30}/>
			</Marker>
		</Map>
	)
}

export default MapboxMap