import Provider from "@/provider/SetupLazyProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import "mui-eazy/dist/style.css";
import * as React from "react";
import Menu from "./components/menu";
import { Container, Stack } from "@mui/material";

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<Provider>
						<CssBaseline />
						<Stack direction="row">
							<Menu />
							{props.children}
						</Stack>
					</Provider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
