"use client";
import { Public_Sans_font } from "@/components/font";
import { BoxProps, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";
import { Iconify } from "mui-eazy";
import * as React from "react";
import Tree from "./tree";

interface NewBoxProps extends BoxProps {
	checked?: boolean;
}
const MyBox = styled(Box)<NewBoxProps>(({ checked }) => {
	return {
		"& .MuiButtonBase-root.MuiBox-root:hover": {
			backgroundColor: "#c2e7ff",
			borderRadius: "0px",
		},
		"& .MuiButtonBase-root.MuiBox-root": {
			borderRadius: "0px",
		},

		"& .MuiButtonBase-root.MuiIconButton-root": {
			width: "60px",
			height: "36px",
			borderRadius: "20px",
			...(checked
				? {
						background:
							"linear-gradient(0deg, #c2e7ff, rgba(68, 71, 70, .08))",
					}
				: {}),
		},
		"& .MuiButtonBase-root.MuiIconButton-root:hover": {
			width: "60px",
			height: "36px",
			borderRadius: "20px",
			display: "flex",
			alignItems: "center",
		},
	};
});
const drawerWidth = 239;
const menuBoardWidth = 88;
const styles = `@keyframes showBorder {
  0% {
      border-left-color: transparent; /* 初始状态：透明的左边框 */
  }
  100% {
      border-left-color: #e1e3e1; /* 最终状态：灰色的左边框 */
  }
}`;

const MenuBoard: React.FC<React.PropsWithChildren<{ switchOpen: any }>> = ({
	switchOpen,
}) => {
	return (
		<MyBox
			sx={{
				width: "88px",
				backgroundColor: "#f3f6fc",
				height: "100vh",
				position: "absolute",
				left: 0,
				zIndex: 10000,
				top: 0,
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-start",
				alignItems: "center",
				paddingTop: "20px",
				gap: "22px",
			}}
		>
			<Box
				sx={{
					background: "#c4eed0",
					width: "56px",
					height: "56px",
					borderRadius: "16px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Iconify
					width={"30px"}
					color="rgb(68, 71, 70)"
					icon="material-symbols:search"
				></Iconify>
			</Box>
			<Box
				onClick={() => {
					switchOpen();
				}}
			>
				<MyBox
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<IconButton>
						<Iconify
							width={"30px"}
							color="rgb(68, 71, 70)"
							icon={"material-symbols:home-app-logo"}
							sx={{
								position: "relative",
								bottom: "3px",
							}}
						/>
					</IconButton>

					<Typography
						sx={{
							fontSize: "12px",
							marginTop: "8px",
							fontFamily: Public_Sans_font.style.fontFamily,
							fontWeight: "700",
							letterSpacing: ".1px",
							color: "rgb(68, 71, 70)",
							lineHeight: "16px",
						}}
					>
						首页
					</Typography>
				</MyBox>
			</Box>
			<Box
				onClick={() => {
					switchOpen();
				}}
			>
				<MyBox
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<IconButton>
						<Iconify
							width={"30px"}
							color="rgb(68, 71, 70)"
							icon={"majesticons:rocket-3-start"}
						/>
					</IconButton>

					<Typography
						sx={{
							fontSize: "12px",
							marginTop: "8px",
							fontFamily: Public_Sans_font.style.fontFamily,
							fontWeight: "700",
							letterSpacing: ".1px",
							color: "rgb(68, 71, 70)",
							lineHeight: "16px",
							textAlign: "center",
						}}
					>
						项目模版
					</Typography>
				</MyBox>
			</Box>
			<Box
				onClick={() => {
					switchOpen();
				}}
			>
				<MyBox
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<IconButton>
						<Iconify
							width={"30px"}
							color="rgb(68, 71, 70)"
							icon={"mingcute:openai-line"}
						/>
					</IconButton>

					<Typography
						sx={{
							fontSize: "12px",
							marginTop: "8px",
							fontFamily: Public_Sans_font.style.fontFamily,
							fontWeight: "700",
							letterSpacing: ".1px",
							color: "rgb(68, 71, 70)",
							lineHeight: "16px",
							textAlign: "center",
						}}
					>
						Ai探索
					</Typography>
				</MyBox>
			</Box>

			<Box
				onClick={() => {
					switchOpen();
				}}
			>
				<MyBox
					checked={true}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<IconButton>
						<Iconify
							width={"30px"}
							color="rgb(68, 71, 70)"
							icon={"streamline:ai-prompt-spark"}
							sx={{
								position: "relative",
								left: "3px",
							}}
						/>
					</IconButton>

					<Typography
						sx={{
							fontSize: "12px",
							marginTop: "8px",
							fontFamily: Public_Sans_font.style.fontFamily,
							fontWeight: "700",
							letterSpacing: ".1px",
							color: "rgb(68, 71, 70)",
							lineHeight: "16px",
							textAlign: "center",
						}}
					>
						文章教程
					</Typography>
				</MyBox>
			</Box>
			<Box
				onClick={() => {
					switchOpen();
				}}
			>
				<MyBox
					checked={true}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<IconButton>
						<Iconify
							width={"30px"}
							color="rgb(68, 71, 70)"
							icon={"tabler:code-circle-2"}
							sx={{
								position: "relative",
							}}
						/>
					</IconButton>

					<Typography
						sx={{
							fontSize: "12px",
							marginTop: "8px",
							fontFamily: Public_Sans_font.style.fontFamily,
							fontWeight: "700",
							letterSpacing: ".1px",
							color: "rgb(68, 71, 70)",
							lineHeight: "16px",
							textAlign: "center",
						}}
					>
						开源项目
					</Typography>
				</MyBox>
			</Box>
		</MyBox>
	);
};

const Drawer = styled(
	MuiDrawer,
	{},
)(({ theme, open }) => ({
	...(open && {
		"& .MuiDrawer-paper": {
			boxShadow: "initial",
			overflow: "initial",
			borderRadius: "20px",
		},
		"& .MuiDrawer-paper:hover": {
			borderRadius: "20px",
			borderRight: "initial",
		},
	}),
	...(!open && {
		"& .MuiDrawer-paper": {
			borderRight: "initial",
			boxShadow: "initial",
		},
	}),

	"& .MuiButtonBase-root.MuiListItemButton-root:hover": {
		backgroundColor: "#c2e7ff",
		borderRadius: "30px",
		paddingLeft: "20px",
		border: "initial",
	},
	"& .MuiButtonBase-root.MuiListItemButton-root": {
		borderRadius: "30px",
		paddingLeft: "20px",
		border: "initial",
		marginBottom: "2px",
	},
}));

export default function MiniDrawer() {
	const theme = useTheme();
	const [open, setOpen] = React.useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex", minWidth: menuBoardWidth }}>
			<style>{styles}</style>
			<Box
				sx={{
					position: "relative",
					height: "100vh",
				}}
			>
				<Drawer
					sx={{
						width: menuBoardWidth,
					}}
					hideBackdrop={true}
					open={open}
				>
					<Box
						sx={{
							backgroundColor: "#f3f6fc",
							width: drawerWidth,
							height: "100%",
							marginLeft: "88px",
							transitionDuration: "300ms",
							transitionProperty: "transform, box-shadow",
							borderRadius: "0 20px 20px 0",
							animation:
								"showBorder 300ms ease forwards" /* 动画效果 */,
							borderLeft:
								"1px solid transparent" /* 初始状态：透明的左边框 */,
							overflow: "hidden",
							padding: "12px 10px",
							"&:hover": {
								boxShadow:
									"2px 0 2px rgb(0 0 0 / 5%),2px 0 2px rgb(0 0 0 / 5%)",
								transitionDuration: "300ms",
								transitionProperty: "transform, box-shadow",
								borderRadius: "0 20px 20px 0",
							},
						}}
					>
						<Tree />
					</Box>
				</Drawer>
				<MenuBoard
					switchOpen={() => {
						setOpen(!open);
					}}
				/>
			</Box>
		</Box>
	);
}
