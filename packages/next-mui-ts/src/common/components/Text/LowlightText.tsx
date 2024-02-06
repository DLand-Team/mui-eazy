import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";

type LowlightTextPropsType = {
	className?: string;
	size?: "small" | "default" | "large";
} & React.PropsWithChildren;

const LowlightText = styled((props: LowlightTextPropsType) => {
	const [vars, setVars] = React.useState<React.CSSProperties>(
		{} as React.CSSProperties
	);
	const setFontSize = (value: string) => {
		setVars({ "--font-size": value } as React.CSSProperties);
	};

	useEffect(() => {
		switch (props.size) {
			case "small":
				setFontSize("14px");
				break;
			case "default":
				setFontSize("16px");
				break;
			case "large":
				setFontSize("18px");
				break;
			default:
				setFontSize("16px");
				break;
		}
	}, [props.size]);

	return (
		<Box style={vars} {...props}>
			{props.children}
		</Box>
	);
})((theme) => ({
	color: "#717171",
	fontSize: "var(--font-size)",
}));

export default LowlightText;
