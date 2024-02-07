"use client";

import { ThemeOptions, createTheme } from "@mui/material/styles";
import { merge } from "lodash-es";
import { Roboto } from "next/font/google";
import { componentsOverrides } from "./overrides";
import { customShadows } from "./custom-shadows";
import { darkMode } from "./options/dark-mode";
import { presets } from "./options/presets";
import { direction } from "./options/right-to-left";
import { palette } from "./palette";
import { shadows } from "./shadows";
import { typography } from "./typography";

const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});
// ----------------------------------------------------------------------

type Props = {
	children: React.ReactNode;
};

// export default function ThemeProvider({ children }: Props) {
// 	const settings = useSettingsContext();

// 	const darkModeOption = darkMode(settings.themeMode);

// 	const presetsOption = presets(settings.themeColorPresets);

// 	const directionOption = direction(settings.themeDirection);

// 	const baseOption = useMemo(
// 		() => ({
// 			palette: palette("light"),
// 			shadows: shadows("light"),
// 			customShadows: customShadows("light"),
// 			typography,
// 			shape: { borderRadius: 8 },
// 		}),
// 		[],
// 	);

// 	const memoizedValue = useMemo(
// 		() =>
// 			merge(
// 				// Base
// 				baseOption,
// 				// Direction: remove if not in use
// 				directionOption,
// 				// Dark mode: remove if not in use
// 				darkModeOption,
// 				// Presets: remove if not in use
// 				presetsOption,
// 			),
// 		[baseOption, darkModeOption, directionOption, presetsOption],
// 	);

// 	const theme = createTheme(memoizedValue as ThemeOptions);
// 	let a = componentsOverrides(theme);

// 	theme.components = a;

// 	return (
// 		<MuiThemeProvider theme={theme}>
// 			<RTL themeDirection={settings.themeDirection}>
// 				<CssBaseline />
// 				{children}
// 			</RTL>
// 		</MuiThemeProvider>
// 	);
// }

const darkModeOption = darkMode("light");

const presetsOption = presets("default");

const directionOption = direction("ltr");

const baseOption = {
	palette: palette("light"),
	shadows: shadows("light"),
	customShadows: customShadows("light"),
	typography,
	shape: { borderRadius: 8 },
};
const memoizedValue = merge(
	// Base
	baseOption,
	// Direction: remove if not in use
	directionOption,
	// Dark mode: remove if not in use
	darkModeOption,
	// Presets: remove if not in use
	presetsOption,
);
const theme = createTheme(memoizedValue as ThemeOptions);

theme.components = componentsOverrides(theme);

export default theme;
