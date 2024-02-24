import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Provider from "@/provider/SetupLazyProvider";
import "mui-eazy/dist/style.css";

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<Provider>
						<CssBaseline />
						<Header></Header>
						{props.children}
						<Footer></Footer>
					</Provider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
