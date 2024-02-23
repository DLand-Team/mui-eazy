import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "@/common/components/Footer";
import Header from "@/common/components/Header";
import dynamic from "next/dynamic";

const SetupLazyProvider = dynamic(
	() => import("@/common/provider/SetupLazyProvider"),
	{
		ssr: false,
	},
);

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<SetupLazyProvider>
						<CssBaseline />
						<Header></Header>
						{props.children}
						<Footer></Footer>
					</SetupLazyProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
