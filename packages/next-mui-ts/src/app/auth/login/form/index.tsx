import { Typography } from "@mui/material";
import { MutableRefObject, useEffect } from "react";
import { useFields, Carousel } from "mui-eazy";
import { primaryFont } from "src/theme/typography";
import { useFormConfig } from "./useFormConfig";

//TODO 在组件库对react-hook-form进行导出
export type FromRefType = any;

export const LoginForm = ({
	defaultValues = {},
	formRef,
}: {
	defaultValues: any;
	formRef: MutableRefObject<FromRefType>;
}) => {
	const formConfig = useFormConfig({ defaultValues });
	const { methods, formNode } = useFields(formConfig);
	useEffect(() => {
		formRef.current = methods;
	}, [methods]);
	return (
		<>
			<Carousel></Carousel>
			<Typography
				fontFamily={primaryFont.style.fontFamily}
				fontSize={"14px"}
				fontStyle={"normal"}
				fontWeight={400}
				lineHeight={"22px"}
				mb={"24px"}
			>
				* Required information
			</Typography>
			{formNode}
		</>
	);
};
