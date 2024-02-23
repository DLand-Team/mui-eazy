"use client";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
type IProps = React.PropsWithChildren;
let cssVarsValue: any = {};
const Comp: React.FC<IProps> = ({ children, ...rest }) => {
	const [vars, setVars] = React.useState<React.CSSProperties>(
		{} as React.CSSProperties
	);
	const matchesUpper800 = useMediaQuery("(min-width: 800px)");
	const matchesUpper1200 = useMediaQuery("(min-width: 1200px)");

	const setContentFlexDirection = (value: "row" | "column") => {
		cssVarsValue = { ...cssVarsValue, "--content-flex-direction": value };
	};
	const setBlockListFlexDirection = (value: "row" | "column") => {
		cssVarsValue = {
			...cssVarsValue,
			"--block-list-flex-direction": value,
		};
		switch (value) {
			case "row":
				cssVarsValue = {
					...cssVarsValue,
					"--divide-margin": "24px 0",
					"--divide-border-bottom": "1px solid #DDDDDD",
				};
				break;
			case "column":
				cssVarsValue = {
					...cssVarsValue,
					"--divide-margin": "0",
					"--divide-border-bottom": "none",
				};
				break;
		}
	};
	const setBlockListEachWidth = (value: string) => {
		cssVarsValue = { ...cssVarsValue, "--block-list-each-width": value };
	};

	useEffect(() => {
		if (matchesUpper1200) {
			setContentFlexDirection("row");
			setBlockListFlexDirection("column");
			setBlockListEachWidth("100%");
		} else {
			setContentFlexDirection("column");
			setBlockListFlexDirection("row");
			if (matchesUpper800) {
				setBlockListEachWidth("33.3%");
			} else {
				setBlockListEachWidth("50%");
			}
		}
		setVars(cssVarsValue as React.CSSProperties);
	}, [matchesUpper800, matchesUpper1200]);

	return (
		<Box style={vars} {...rest}>
			{children}
		</Box>
	);
};
const FooterContainer = styled(Comp)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	padding: "48px 80px",
	background: "#F7F7F7",
	borderTop: "1px solid #DDDDDD",

	"& > .content": {
		display: "flex",
		flexDirection: "var(--content-flex-direction)",
		gap: "12px",

		"& > .divide": {
			margin: "var(--divide-margin)",
			borderBottom: "var(--divide-border-bottom)",
		},

		"& > .block": {
			flex: "1",

			"& > .title": {
				fontSize: "14px",
				fontWeight: "bold",
				color: "#222222",
			},

			"& > .list": {
				display: "flex",
				flexDirection: "var(--block-list-flex-direction)",
				flexWrap: "wrap",
				justifyContent: "flex-start",
				alignItems: "flex-start",

				"& > .each": {
					width: "var(--block-list-each-width)",
					marginTop: "16px",
					fontSize: "14px",
					color: "#222222",
					whiteSpace: "nowrap",
					cursor: "pointer",

					":hover": {
						textDecoration: "underline",
					},
				},
			},
		},
	},

	"& > .bottom": {
		marginTop: "24px",
		paddingTop: "16px",
		fontSize: "12px",
		color: "#717171",
		borderTop: "1px solid #DDDDDD",
	},
}));

export default FooterContainer;
