import { FormConfig, myYup } from "mui-eazy";
import { useMemo } from "react";
import { FormWrapper } from "./formWrapper";

export const useDealBasicsFormViewConfig = ({
	defaultValues,
}: {
	id?: string;
	defaultValues?: any;
}): FormConfig => {
	return useMemo<FormConfig>(() => {
		let config: FormConfig = {
			sub_title: {
				defaultValue: defaultValues?.["sub_title"],
				label: "Sub-heading",
				schema: myYup.string(),
				fieldConfig: {
					required: true,
				},
				wrapper: ({ children }) => {
					return (
						<FormWrapper
							isShowDivider={false}
							name="Deal details"
							tipInfo="The Sub-heading is your opportunity to complete the headline with a punchy and
                          brief description. This is your chance to provide a little more context or
                          excitement about your deal. Think of it as a tagline that adds flavor to your
                          Deal Title. Keep it concise but compelling, giving potential investors or
                          partners a sneak peek into what makes your opportunity special. Make them want
                           to read more!"
						>
							{children}
						</FormWrapper>
					);
				},
			},
			highlights: {
				name: "components.highlights",
				defaultValue: defaultValues?.["components"]?.["highlights"] || [
					"",
					"",
					"",
				],
				label: "Highlights",
				type: "multiple",
				fieldConfig: {
					addLabel: "Add highlight",
					label: "highlights",
					validateFunc: (file) => {
						let flag = true;
						let info = "";
						if (file.size > 6 * 1024 * 1024) {
							flag = false;
							info = "The file size cannot be larger than 2M";
						}
						return [flag, info];
					},
					itemFieldConfig: {
						label: "Enter highlights",
						required: true,
					},
				},
				schema: myYup
					.array()
					.of(
						myYup
							.string()
							.max(200)
							.required("This is a required field"),
					)
					.test({
						test(value, ctx) {
							if (value!?.length >= 3) {
								return true;
							} else {
								return ctx.createError({
									message:
										"You need to create at least 3 Highlights!",
								});
							}
						},
					}),
				wrapper: ({ children }) => {
					return (
						<FormWrapper
							name="Highlights"
							tipInfo="This is your chance to grab attention quickly. Use bullet points to highlight
              the key features or benefits of your deal. Keep it concise and impactful.
              Minimum 3."
						>
							{children}
						</FormWrapper>
					);
				},
			},
			amount: {
				defaultValue: defaultValues?.["amount"] || "0",
				schema: myYup
					.number()
					.min(0, "Amount must be greater than or equal to 0"),
				fieldConfig: {
					type: "number",
				},
				label: "Amout",
				wrapper: ({ children }) => {
					return (
						<FormWrapper
							isShowDivider={false}
							name="Ask"
							tipInfo="Be explicit about what you're seeking from potential investors or partners.
              Whether it's funding, expertise, resources, or something else, clarity is
              key."
						>
							{children}
						</FormWrapper>
					);
				},
			},
			ask_desc: {
				defaultValue: defaultValues?.["ask_desc"] || "",
				schema: myYup
					.string()
					.max(1000, "Description must be less than 1000 characters"),
				fieldConfig: {
					multiline: true,
					minRows: 4,
					type: "textarea",
				},
				label: "Ask Description",
				wrapper: ({ children }) => {
					return (
						<FormWrapper isShowDivider={true}>
							{children}
						</FormWrapper>
					);
				},
			},
			pics: {
				type: "upload",
				label: "Upload logo (optional)",
				name: "components.pics",
				defaultValue: defaultValues?.["components"]?.["pics"] || [],
				schema: myYup.array().test({
					test(value, ctx) {
						if (value!?.length >= 3) {
							return true;
						} else {
							return ctx.createError({
								message:
									"You need to create at least 3 Pictures!",
							});
						}
					},
				}),
				fieldConfig: {
					isCrop: true,
					multiple: true,
					validateFunc: (file) => {
						let flag = true;
						let info = "";
						if (file.size > 6 * 1024 * 1024) {
							flag = false;
							info = "The file size cannot be larger than 6M";
						}
						return [flag, info];
					},
					uploadAction: async (file) => {
						return "https://qiniu.moderate.run/img/1687610945521";
					},
				},
			},
			logo: {
				type: "upload",
				label: "Upload logo (optional)",
				name: "components.logo",
				defaultValue: defaultValues?.["components"]?.["logo"] || null,
				fieldConfig: {
					required: true,
					multiple: false,
					validateFunc: (file) => {
						let flag = true;
						let info = "";
						if (file.size > 2 * 1024 * 1024) {
							flag = false;
							info = "The file size cannot be larger than 2M";
						}
						return [flag, info];
					},
					uploadAction: async (file) => {
						return "https://qiniu.moderate.run/img/1687610945521";
					},
				},
			},
		};

		return config;
	}, [defaultValues]);
};
