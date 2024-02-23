import { merge } from "lodash-es";
import { Theme } from "@mui/material/styles";
import { alert } from "./components/alert";
import { appBar } from "./components/appbar";
import { avatar } from "./components/avatar";
import { badge } from "./components/badge";
import { button } from "./components/button";
import { card } from "./components/card";
import { chip } from "./components/chip";
import { dialog } from "./components/dialog";
import { drawer } from "./components/drawer";
import { fab } from "./components/fab";
import { list } from "./components/list";
import { menu } from "./components/menu";
import { paper } from "./components/paper";
import { popover } from "./components/popover";
import { rating } from "./components/rating";
import { select } from "./components/select";
import { slider } from "./components/slider";
import { stepper } from "./components/stepper";
import { switchs } from "./components/switch";
import { table } from "./components/table";
import { tabs } from "./components/tabs";
import { accordion } from "./components/accordion";
import { autocomplete } from "./components/autocomplete";
import { backdrop } from "./components/backdrop";
import { breadcrumbs } from "./components/breadcrumbs";
import { buttonGroup } from "./components/button-group";
import { checkbox } from "./components/checkbox";
import { container } from "./components/container";
import { cssBaseline } from "./components/css-baseline";
import { dataGrid } from "./components/data-grid";
import { datePicker } from "./components/date-picker";
import { loadingButton } from "./components/loading-button";
import { pagination } from "./components/pagination";
import { progress } from "./components/progress";
import { radio } from "./components/radio-button";
import { skeleton } from "./components/skeleton";
import { svgIcon } from "./components/svg-icon";
import { textField } from "./components/textfield";
import { timeline } from "./components/timeline";
import { toggleButton } from "./components/toggle-button";
import { tooltip } from "./components/tooltip";
import { treeView } from "./components/tree-view";
import { typography } from "./components/typography";
import { defaultProps } from "./default-props";
// ----------------------------------------------------------------------

export function componentsOverrides(theme: Theme) {
	const components = merge(
		container(theme),
		fab(theme),
		tabs(theme),
		chip(theme),
		card(theme),
		menu(theme),
		list(theme),
		badge(theme),
		table(theme),
		paper(theme),
		alert(theme),
		radio(theme),
		select(theme),
		button(theme),
		rating(theme),
		dialog(theme),
		appBar(theme),
		avatar(theme),
		slider(theme),
		drawer(theme),
		switchs(theme),
		stepper(theme),
		tooltip(theme),
		popover(theme),
		svgIcon(theme),
		checkbox(theme),
		dataGrid(theme),
		skeleton(theme),
		timeline(theme),
		treeView(theme),
		backdrop(theme),
		progress(theme),
		textField(theme),
		accordion(theme),
		typography(theme),
		pagination(theme),
		datePicker(theme),
		buttonGroup(theme),
		breadcrumbs(theme),
		cssBaseline(theme),
		autocomplete(theme),
		toggleButton(theme),
		loadingButton(theme),
		defaultProps(theme),
	);

	return components;
}
