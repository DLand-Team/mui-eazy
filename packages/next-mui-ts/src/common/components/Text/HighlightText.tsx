"use client";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";

type HighlightTextPropsType = {
	className?: string;
	size?: "small" | "default" | "large";
} & React.PropsWithChildren;

const HighlightText = styled((props: HighlightTextPropsType) => {
	const [vars, setVars] = React.useState<React.CSSProperties>(
		{} as React.CSSProperties
	);
	const setFontSize = (value: string) => {
		setVars({ "--font-size": value } as React.CSSProperties);
	};

	useEffect(() => {
		switch (props.size) {
			case "small":
				setFontSize("16px");
				break;
			case "default":
				setFontSize("24px");
				break;
			case "large":
				setFontSize("36px");
				break;
			default:
				setFontSize("24px");
				break;
		}
	}, [props.size]);

	return (
		<Box style={vars} {...props}>
			{props.children}
		</Box>
	);
})((theme) => ({
	color: "#222222",
	fontWeight: "bold",
	fontSize: "var(--font-size)",
}));

export default HighlightText;
