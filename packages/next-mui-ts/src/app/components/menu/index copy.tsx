"use client";
import { StarBorder } from "@mui/icons-material";
import { Collapse, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CSSObject, Theme, styled, useTheme } from "@mui/material/styles";
import * as React from "react";

const drawerWidth = 330 - 88;
const styles = `@keyframes showBorder {
  0% {
      border-left-color: transparent; /* 初始状态：透明的左边框 */
  }
  100% {
      border-left-color: #e1e3e1; /* 最终状态：灰色的左边框 */
  }
}`;
const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
	borderRadius: "0px 20px 20px 0px",
});

const MenuBoard: React.FC<React.PropsWithChildren<{ switchOpen: any }>> = ({
	switchOpen,
}) => {
	return (
		<Box
			sx={{
				width: "88px",
				// backgroundColor: "#f3f6fc",
				height: "100vh",
				position: "absolute",
				left: 0,
				zIndex: 10000,
				top: 0,
			}}
		>
			<IconButton
				onClick={() => {
					switchOpen();
				}}
			>
				123
			</IconButton>
		</Box>
	);
};

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: 0,
	// [theme.breakpoints.up("sm")]: {
	// 	width: `calc(${theme.spacing(8)} + 1px)`,
	// },
});

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",

	...(open && {
		...openedMixin(theme),

		"& .MuiDrawer-paper": {
			...openedMixin(theme),
			transitionDuration: "200ms",
			transitionProperty: "transform, box-shadow",
			marginLeft: "88px",
			paddingRight: "8px",
			paddingLeft: "8px",
			borderLeft: "1px solid transparent" /* 初始状态：透明的左边框 */,
			animation: "showBorder 300ms ease forwards" /* 动画效果 */,
		},
		"& .MuiDrawer-paper:hover": {
			boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.2)",
			transitionDuration: "300ms",
			transitionProperty: "transform, box-shadow",
		},
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": {
			...closedMixin(theme),
			paddingRight: "8px",
			borderRight: "initial",
		},
	}),

	"& .MuiButtonBase-root.MuiListItemButton-root:hover": {
		backgroundColor: "#c2e7ff",
		borderRadius: "30px",
	},
	"& .MuiButtonBase-root.MuiListItemButton-root": {
		borderRadius: "30px",
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
		<Box sx={{ display: "flex", width: "100vw" }}>
			<style>{styles}</style>
			<Box
				sx={{
					position: "relative",
					height: "100vh",
				}}
			>
				<MuiDrawer
					
					variant="permanent"
					open={open}
				>
					<List>
						{["Inbox", "Starred", "Send email", "Drafts"].map(
							(text, index) => (
								<ListItem
									key={text}
									disablePadding
									sx={{ display: "block" }}
								>
									<ListItemButton
										sx={{
											minHeight: 48,
											justifyContent: open
												? "initial"
												: "center",
											px: 2.5,
										}}
									>
										<ListItemText
											primary={text}
											sx={{ opacity: open ? 1 : 0 }}
										/>
									</ListItemButton>
								</ListItem>
							),
						)}
					</List>
					<List>
						{["All mail", "Trash", "Spam"].map((text, index) => (
							<ListItem
								key={text}
								disablePadding
								sx={{ display: "block" }}
							>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open
											? "initial"
											: "center",
										px: 2.5,
									}}
								>
									<ListItemText
										primary={text}
										sx={{ opacity: open ? 1 : 0 }}
									/>
								</ListItemButton>
								<Collapse
									sx={{
										pl: 4,
									}}
									in={true}
									timeout="auto"
									unmountOnExit
								>
									<List component="div" disablePadding>
										<ListItemButton sx={{ pl: 4 }}>
											<ListItemIcon>
												<StarBorder />
											</ListItemIcon>
											<ListItemText primary="Starred" />
										</ListItemButton>
									</List>
								</Collapse>
							</ListItem>
						))}
					</List>
				</MuiDrawer>
				<MenuBoard
					switchOpen={() => {
						setOpen(!open);
					}}
				/>
			</Box>
		</Box>
	);
}
