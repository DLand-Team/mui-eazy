"use client";

import { Button } from "@mui/material";
import { TabForm, TabFormRef } from "mui-eazy";
import { useMemo, useRef, useState } from "react";
import { useDealBasicsFormViewConfig } from "./useDealTypeFormViewConfig";

function Demo() {
	const [tabId, setTabId] = useState("1");
	const tabFormRef = useRef<TabFormRef>();
	const defaultValues = {};
	const dealBasicsFormViewConfig = useDealBasicsFormViewConfig({
		defaultValues,
	});

	const tabConfig = useMemo(() => {
		return [
			{
				id: "2",
				label: "Deal Basics",
				node: dealBasicsFormViewConfig,
			},
		];
	}, []);

	return (
		<>
			<TabForm
				tabId={tabId}
				handleTabChange={(newTabId) => {
					setTabId(newTabId);
				}}
				tabConfig={tabConfig}
				ref={tabFormRef}
			/>
			<Button
				onClick={() => {
					tabFormRef.current!?.validate(
						Object.values(tabFormRef.current.getTabFormRef()),
					);
				}}
			>
				Submit
			</Button>
		</>
	);
}

export default Demo;
