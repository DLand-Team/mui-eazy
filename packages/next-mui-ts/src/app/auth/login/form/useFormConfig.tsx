import { useMemo } from "react";
import { FormConfig, myYup as yup } from "mui-eazy";

export const useFormConfig = ({
	defaultValues,
	type,
}: {
	defaultValues?: any;
	type?: string;
}): FormConfig => {
	return useMemo<FormConfig>(() => {
		return {
			title: {
        type:'editer',
				label: "Deal Name",
				defaultValue: defaultValues?.["title"],
				schema: yup.string().min(2).max(50),
				fieldConfig: {
					placeholder: "Maximum 50 characters.",
					required: true,
				},
			},
		};
	}, []);
};
