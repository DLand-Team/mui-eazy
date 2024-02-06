import PropsTable from "@site/src/components/PropsTable";
import { Tree, notify } from "../components";
import useTreeConfig from "./treeConfig";

export const TreeProps = () => {
	let params = {
		treeRoot: {
			type: "TreeItemProps",
			defaultValue: "",
			desc: "tree item data",
		},
		record: {
			type: "{ [key: string]: TreeItemProps }",
			defaultValue: "",
			desc: "the flat result ref of the tree,pass a value to the tree",
		},
		update: {
			type: "() => void",
			defaultValue: "",
			desc: "handle cliek",
		},
		onSwitch: {
			type: "(id: string, record: any) => void;",
			defaultValue: "",
			desc: "handle tree item click",
		},
		sx: {
			type: "SxProps<Theme>",
			defaultValue: "",
			desc: "custom styles.",
		},
	};
	return <PropsTable params={params} />;
};

const Demo = () => {
	const treeFromConfig = useTreeConfig();
	return (
		<Tree
			onSwitch={(id, record) => {
				notify.success("选中的ID:" + id);
			}}
			treeRoot={treeFromConfig}
		/>
	);
};

export default Demo;
