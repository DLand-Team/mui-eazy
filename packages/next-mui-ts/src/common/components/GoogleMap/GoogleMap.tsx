"use client";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

const key = "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";

type GoogleMapPropsType = {
	className?: string;
	street?: string;
	state?: string;
	country?: string;
};

// q=${props.street}+Street,+${props.state}+${props.country},

const GoogleMap = styled((props: GoogleMapPropsType) => {
	const [query, setQuery] = useState("");

	useEffect(() => {
		let param = "";
		if (props.street) {
			param += `+${props.street},`;
		}
		if (props.state) {
			param += `+${props.state},`;
		}
		if (props.country) {
			param += `+${props.country},`;
		}
		param = param.substring(1, param.length);
		param = param.substring(0, param.length - 1);
		setQuery(param);
	}, [props]);

	return (
		<div className={props.className} {...props}>
			<iframe
				className="google-map-frame"
				src={`https://www.google.com/maps/embed/v1/place?q=${query}&key=${key}`}
				width="100%"
				height="100%"
				allowFullScreen={false}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			/>
		</div>
	);
})((theme) => ({
	width: "100%",
	height: "450px",

	"& > .google-map-frame": {
		border: "0",
	},
}));

export default GoogleMap;
