"use client";

import { LazyMotion, domMax, m } from "framer-motion";
// ----------------------------------------------------------------------

type Props = {
	children: React.ReactNode;
};

function SetupProvider({ children }: Props) {
	return (
		<LazyMotion strict features={domMax}>
			<m.div style={{ height: "100%" }}>{children}</m.div>
		</LazyMotion>
	);
}

export default SetupProvider;
