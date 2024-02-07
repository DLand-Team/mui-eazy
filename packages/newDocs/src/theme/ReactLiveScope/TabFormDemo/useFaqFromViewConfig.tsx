import { FormConfig } from "mui-eazy";
import { useMemo } from "react";
import { Yup } from "../components";
import { FromWrapper } from "./wrapper";

export const useFaqFromViewConfig = ({
  defaultValues,
  type,
}: {
  id?: string;
  defaultValues?: any;
  type?: string;
}): FormConfig => {
  return useMemo<FormConfig>(() => {
    return {
      faq: {
        name: "components.faq",
        label: "Upload documents (optional)",
        type: "multiple",
        defaultValue: defaultValues?.["components"]?.["faq"],
        schema: Yup.array().of(
          Yup.object().shape({
            question: Yup.string()
              .optional()
              .test({
                test(value: any, ctx) {
                  if (ctx.parent.answer) {
                    if (value) {
                      return true;
                    } else {
                      return ctx.createError({ message: "This is required!" });
                    }
                  }
                  return true;
                },
              }),
            answer: Yup.string().test({
              test(value: any, ctx) {
                if (ctx.parent.question) {
                  if (value) {
                    return true;
                  } else {
                    return ctx.createError({ message: "This is required!" });
                  }
                }
                return true;
              },
            }),
          })
        ),
        fieldConfig: {
          addLabel: "Add Faq",
          mulType: "obj",
          childFieldConfig: {
            question: {
              label: "Question (optional)",
              fieldConfig: {
                multiline: true,
                minRows: 2,
                type: "textarea",
              },
              watch(props) {
                const {
                  info: { name: eventName = "" },
                  values,
                  currentConfig,
                  api,
                } = props;
                const { name = "", fieldConfig = {} } = currentConfig;
                let mulId = eventName.split(".").slice(-2, -1)[0];
                const arr = values.components.faq;
                let targetEventKey = `components.faq.${mulId}.answer`;
                const targetValue = arr[Number(mulId)]?.answer;

                if (eventName == targetEventKey) {
                  console.log(name);
                }
                if (eventName == targetEventKey) {
                  if (!currentConfig.labelMap) {
                    currentConfig.labelMap = {};
                  }
                  if (targetValue) {
                    currentConfig.labelMap[mulId] = "Question";
                  } else {
                    currentConfig.labelMap[mulId] = "Question (optional)";
                  }
                }
                api.trigger(targetEventKey);
              },
            },
            answer: {
              label: "Answer (optional)",
              fieldConfig: {
                multiline: true,
                minRows: 2,
                type: "textarea",
              },
              watch(props) {
                const {
                  info: { name: eventName = "" },
                  values,
                  currentConfig,
                  api,
                } = props;
                const { name = "" } = currentConfig;
                let mulId = eventName.split(".").slice(-2, -1)[0];
                const arr = values.components.faq;
                let targetEventKey = `components.faq.${mulId}.question`;
                const targetValue = arr[Number(mulId)]?.question;
                if (eventName == targetEventKey) {
                  if (!currentConfig.labelMap) {
                    currentConfig.labelMap = {};
                  }
                  if (targetValue) {
                    currentConfig.labelMap[mulId] = "Answer";
                  } else {
                    currentConfig.labelMap[mulId] = "Answer (optional)";
                  }
                }
                api.trigger(targetEventKey);
              },
            },
          } as FormConfig,
        },
        wrapper: ({ children }) => {
          return (
            <FromWrapper
              name="FAQs"
              tipInfo="Anticipate questions from potential partners or investors and provide answers.
              This helps clarify common queries upfront.">
              {children}
            </FromWrapper>
          );
        },
      },
    };
  }, [defaultValues]);
};
