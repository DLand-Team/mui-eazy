"use client";

import theme from "@/theme";
import { ThemeProvider } from "@mui/material/styles";
import { LazyMotion, domMax, m } from "framer-motion";
// ----------------------------------------------------------------------

type Props = {
	children: React.ReactNode;
};

function SetupProvider({ children }: Props) {
	return (
		<LazyMotion strict features={domMax}>
			<m.div style={{ height: "100%" }}>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</m.div>
		</LazyMotion>
	);
}

export default SetupProvider;
