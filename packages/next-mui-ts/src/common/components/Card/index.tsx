"use client";
import React from "react";
import Box from "@mui/material/Box";
import heartLineSVG from "@/assets/svg/heart-line.svg";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";

type ItemCardPropsType = {
	className?: string;
	onClick?: () => void;
	image: string;
	title: string;
};

const LandCard = styled((props: ItemCardPropsType) => {
	const router = useRouter();
	return (
		<Box
			className={props.className}
			onClick={() => router.push("/detail")}
			{...props}
		>
			<div className="image">
				<img className="content" src={props.image} alt={props.title} />
				<img className="favorite" src={heartLineSVG.src} alt="" />
			</div>
			<div className="title">{props.title}</div>
		</Box>
	);
})((theme) => ({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	maxWidth: "700px",

	"& > .image": {
		position: "relative",
		width: "100%",
		paddingBottom: "100%",
		borderRadius: "12px",
		overflow: "hidden",
		transition: "0.35s",
		cursor: "pointer",

		":hover": {
			boxShadow: "0 5px 10px rgba(50, 50, 50, 0.5)",
		},

		"& > .content": {
			position: "absolute",
			width: "100%",
			height: "100%",
			objectFit: "cover",
		},

		"& > .favorite": {
			position: "absolute",
			width: "24px",
			height: "24px",
			top: "12px",
			right: "12px",
		},
	},

	"& > .title": {
		marginTop: "8px",
		fontSize: "16px",
		fontWeight: "600",
	},
}));

export default LandCard;
