"use client";
import { Public_Sans_font } from "@/components/font";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Iconify } from "mui-eazy";
import { useEffect, useRef, useState } from "react";
function isInViewPortOfTwo(el: HTMLElement) {
	const rect = el.getBoundingClientRect();
	if (rect.top < window.innerHeight && rect.bottom > 0) {
		return true;
	} else {
		return false;
	}
}

const BtnItem = () => {
	const [isHover, setIsHover] = useState(false);
	return (
		<Button
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			sx={{
				width: "100%",
				background: "#f8fafd",
				"&:hover": {
					background: "#c2e7ff",
				},
				height: "112px",
				borderRadius: "24px",
			}}
		>
			<Stack
				direction={"row"}
				sx={{
					width: "100%",
					height: "100%",
				}}
			>
				<Box
					sx={{
						height: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						paddingLeft: "24px",
						textAlign: "left",
					}}
				>
					<Typography
						sx={{
							fontSize: "24px",
							fontWeight: "475",
							fontFamily: Public_Sans_font.style.fontFamily,
							mb: "10px",
						}}
					>
						预览地址
					</Typography>
					<Typography
						sx={{
							fontSize: "16px",
							fontWeight: "400",
							fontFamily: Public_Sans_font.style.fontFamily,
						}}
					>
						预览地址
					</Typography>
				</Box>

				<Box
					sx={{
						position: "absolute",
						top: "16px",
						right: "20px",
					}}
				>
					<Box
						sx={{
							position: "relative",
							width: "40px",
							height: "40px",
						}}
					>
						<svg
							_ngcontent-pwx-c15=""
							width="100%"
							height="100%"
							viewBox="0 0 40 40"
							xmlns="http://www.w3.org/2000/svg"
							style={{
								transition: "all cubic-bezier(.4,0,.2,1) .25s",
							}}
						>
							<path
								_ngcontent-pwx-c15=""
								d="M.887 14.467C-2.845 5.875 5.875-2.845 14.467.887l1.42.617a10.323 10.323 0 0 0 8.225 0l1.42-.617c8.593-3.732 17.313 4.988 13.581 13.58l-.617 1.42a10.323 10.323 0 0 0 0 8.225l.617 1.42c3.732 8.593-4.989 17.313-13.58 13.581l-1.42-.617a10.323 10.323 0 0 0-8.225 0l-1.42.617C5.874 42.845-2.846 34.125.886 25.533l.617-1.42a10.323 10.323 0 0 0 0-8.225l-.617-1.42Z"
								fill={isHover ? "#00639b" : "#fff"}
								style={{
									transition:
										"fill .3s cubic-bezier(.2,0,0,1)",
								}}
							></path>
						</svg>
						<Iconify
							sx={{
								position: "absolute",
								left: "5px",
								top: "5px",
							}}
							width={"30px"}
							color={isHover ? "#fff" : "rgb(68, 71, 70)"}
							icon="material-symbols:search"
						></Iconify>
					</Box>
				</Box>
			</Stack>
		</Button>
	);
};

export default () => {
	const ref1 = useRef<HTMLDivElement>();
	const ref2 = useRef<HTMLDivElement>();
	const ref3 = useRef<HTMLDivElement>();
	const ref4 = useRef<HTMLDivElement>();
	const containerRef = useRef<HTMLDivElement>(null);
	const [step, setStep] = useState(1);
	const checkElementVisibility = () => {
		const flag1 = ref1.current && isInViewPortOfTwo(ref1.current);
		const flag2 = ref2.current && isInViewPortOfTwo(ref2.current);
		const flag3 = ref3.current && isInViewPortOfTwo(ref3.current);
		const flag4 = ref4.current && isInViewPortOfTwo(ref4.current);
		if (flag2) {
			debugger;
			step !== 2 && setStep(2);
		} else if (flag3) {
			step !== 3 && setStep(3);
		} else if (flag4) {
			step !== 4 && setStep(4);
		} else if (flag1) {
			step !== 1 && setStep(1);
		}
	};
	useEffect(() => {
		containerRef.current!?.addEventListener(
			"scroll",
			checkElementVisibility,
		);
	}, [containerRef.current]);
	return (
		<Container
			maxWidth={false}
			sx={{
				height: "100vh",
				overflow: "auto",
				"&.MuiContainer-root": {
					padding: "8px 10px 10px 10px",
				},
			}}
			ref={containerRef}
		>
			<Stack
				sx={{
					marginBottom: "10px",
				}}
			>
				<img
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						width: "100%",
						height: "80vh",
						borderRadius: "24px",
						backgroundPosition: "center",
						objectFit: "cover",
						transform: "translateZ(0)",
						transition: "opacity .5s cubic-bezier(.2,0,0,1)",
					}}
					src="/assets/img/img3.png"
				/>
			</Stack>
			<Stack direction={"row"}>
				<Stack flex={1}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							mt: "200px",
						}}
					>
						<Box
							sx={{
								width: "100%",
								maxWidth: "640px",
								margin: "24px 0px",
							}}
						>
							<Typography
								sx={{
									fontWeight: "475",
									fontFamily:
										Public_Sans_font.style.fontFamily,
									fontSize: "57px",
									mb: "20px",
								}}
							>
								What's Material?
							</Typography>
							<Box
								ref={ref1}
								sx={{
									padding: "10px",
								}}
							>
								res1
							</Box>
							<Typography
								sx={{
									fontSize: "16px",
									fontWeight: "400",
									mb: "20px",
									fontFamily:
										Public_Sans_font.style.fontFamily,
								}}
							>
								Material Design is a design system built and
								supported by Google designers and developers.
								Material.io includes in-depth UX guidance and UI
								component implementations for Android, Flutter,
								and the Web.
							</Typography>
							<Typography
								sx={{
									fontSize: "16px",
									fontWeight: "400",
									fontFamily:
										Public_Sans_font.style.fontFamily,
								}}
							>
								Material Design is a design system built and
								supported by Google designers and developers.
								Material.io includes in-depth UX guidance and UI
								component implementations for Android, Flutter,
								and the Web.
							</Typography>
							<Stack
								sx={{
									gap: "24px",
									mt: "40px",
								}}
							>
								<BtnItem />
								<BtnItem />
								<BtnItem />
							</Stack>
						</Box>
					</Box>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<svg
							_ngcontent-pwx-c25=""
							aria-hidden="true"
							width="155"
							height="9"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							style={{
								margin: "80px 0px",
							}}
						>
							<path
								_ngcontent-pwx-c25=""
								d="M1.5 4.5c5.067-4.667 10.133-4.667 15.2 0s10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0"
								stroke="#a8c7fa"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
						</svg>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Box
							sx={{
								width: "100%",
								maxWidth: "640px",
								margin: "24px 0px",
							}}
						>
							<Typography
								sx={{
									fontWeight: "475",
									fontFamily:
										Public_Sans_font.style.fontFamily,
									fontSize: "57px",
									mb: "20px",
								}}
							>
								What's Material?
							</Typography>
							<Box
								ref={ref2}
								sx={{
									padding: "10px",
								}}
							>
								res2
							</Box>
							<Typography
								sx={{
									fontSize: "16px",
									fontWeight: "400",
									mb: "20px",
									fontFamily:
										Public_Sans_font.style.fontFamily,
								}}
							>
								Material Design is a design system built and
								supported by Google designers and developers.
								Material.io includes in-depth UX guidance and UI
								component implementations for Android, Flutter,
								and the Web.
							</Typography>
							<Typography
								sx={{
									fontSize: "16px",
									fontWeight: "400",
									fontFamily:
										Public_Sans_font.style.fontFamily,
								}}
							>
								Material Design is a design system built and
								supported by Google designers and developers.
								Material.io includes in-depth UX guidance and UI
								component implementations for Android, Flutter,
								and the Web.
							</Typography>
							<Stack
								sx={{
									gap: "24px",
									mt: "40px",
								}}
							>
								<BtnItem />
								<BtnItem />
								<BtnItem />
							</Stack>
						</Box>
					</Box>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<svg
							_ngcontent-pwx-c25=""
							aria-hidden="true"
							width="155"
							height="9"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							style={{
								margin: "80px 0px",
							}}
						>
							<path
								_ngcontent-pwx-c25=""
								d="M1.5 4.5c5.067-4.667 10.133-4.667 15.2 0s10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0"
								stroke="#a8c7fa"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
						</svg>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Box
							sx={{
								width: "100%",
								maxWidth: "640px",
								margin: "24px 0px",
							}}
						>
							<Typography
								sx={{
									fontWeight: "475",
									fontFamily:
										Public_Sans_font.style.fontFamily,
									fontSize: "57px",
									mb: "20px",
								}}
							>
								What's Material?
							</Typography>
							<Box
								ref={ref3}
								sx={{
									padding: "10px",
								}}
							>
								res3
							</Box>
							<Typography
								sx={{
									fontSize: "16px",
									fontWeight: "400",
									mb: "20px",
									fontFamily:
										Public_Sans_font.style.fontFamily,
								}}
							>
								Material Design is a design system built and
								supported by Google designers and developers.
								Material.io includes in-depth UX guidance and UI
								component implementations for Android, Flutter,
								and the Web.
							</Typography>
							<Typography
								sx={{
									fontSize: "16px",
									fontWeight: "400",
									fontFamily:
										Public_Sans_font.style.fontFamily,
								}}
							>
								Material Design is a design system built and
								supported by Google designers and developers.
								Material.io includes in-depth UX guidance and UI
								component implementations for Android, Flutter,
								and the Web.
							</Typography>
							<Stack
								sx={{
									gap: "24px",
									mt: "40px",
								}}
							>
								<BtnItem />
								<BtnItem />
								<BtnItem />
							</Stack>
						</Box>
					</Box>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<svg
							_ngcontent-pwx-c25=""
							aria-hidden="true"
							width="155"
							height="9"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							style={{
								margin: "80px 0px",
							}}
						>
							<path
								_ngcontent-pwx-c25=""
								d="M1.5 4.5c5.067-4.667 10.133-4.667 15.2 0s10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0"
								stroke="#a8c7fa"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
						</svg>
					</Box>
				</Stack>
				<Box
					flex={1}
					sx={{
						position: "sticky",
						top: 0,
						height: "100vh",
					}}
				>
					<img
						style={{
							position: "absolute",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							width: "100%",
							height: "100%",
							borderRadius: "24px",
							backgroundPosition: "center",
							objectFit: "cover",
							transform: "translateZ(0)",
							transition: "opacity .5s cubic-bezier(.2,0,0,1)",
							opacity: step == 1 ? 1 : 0,
						}}
						src="/assets/img/img2.png"
					/>
					<img
						style={{
							position: "absolute",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							width: "100%",
							height: "100%",
							borderRadius: "24px",
							backgroundPosition: "center",
							objectFit: "cover",
							opacity: step == 2 ? 1 : 0,
							transform: "translateZ(0)",
							transition: "opacity .5s cubic-bezier(.2,0,0,1)",
						}}
						src="/assets/img/img1.png"
					/>
					<img
						style={{
							position: "absolute",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							width: "100%",
							height: "100%",
							borderRadius: "24px",
							backgroundPosition: "center",
							objectFit: "cover",
							opacity: step == 3 ? 1 : 0,
							transform: "translateZ(0)",
							transition: "opacity .5s cubic-bezier(.2,0,0,1)",
						}}
						src="/assets/img/img4.png"
					/>
				</Box>
			</Stack>
		</Container>
	);
};
