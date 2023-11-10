import PropsTable from "@site/src/components/PropsTable";
import { useFields, uuidv4 } from "../components";
import dayjs from "dayjs";
import type { FormConfig } from "mui-eazy";
import * as Yup from "yup";

export const FieldTextProps = () => {
  let params = {
    name: {
      type: "string",
      defaultValue: "",
      desc: "form item name",
    },
    label: {
      type: "number",
      defaultValue: "",
      desc: "form item label",
    },
    defaultValue: {
      type: "any",
      defaultValue: "",
      desc: "The default value. Use when the component is not controlled.",
    },
    value: {
      type: "any",
      defaultValue: "",
      desc: "The value of the input element, required for a controlled component.",
    },
    type: {
      type: "string",
      defaultValue: "",
      desc: "Type of the input element. It should be a valid HTML5 input type.",
    },
    required: {
      type: "boolean",
      defaultValue: "false",
      desc: "If true, the label is displayed as required and the input element is required.",
    },
  };
  return <PropsTable params={params} />;
};

//code----------------------------------------------------------------------
const useFormConfigCreater_root = (
  props: { id?: string } = {}
): (() => FormConfig) => {
  return () => ({
    title: {
      fieldConfig: {
        required: true,
      },
    },
    sub_title: {
      label: "subTitle",
    },
    amount: {
      schema: Yup.number().min(1, "Amount must be greater than or equal to 1"),
      fieldConfig: {
        type: "number",
      },
      label: "Amount",
    },
    ask_desc: {
      schema: Yup.string().max(
        1000,
        "Description must be less than 1000 characters"
      ),
      fieldConfig: {
        type: "textarea",
      },
      label: "Description of Ask",
    },
    vendor_financing: {
      label: "Vendor Financing",
      type: "checkbox",
      fieldConfig: {},
    },
    expire_at: {
      type: "datePicker",
      defaultValue: dayjs(),
    },
    logo: {
      type: "upload",
      label: "Logo",
      fieldConfig: {
        multiple: false,
        uploadAction: async (file) => {
          return uuidv4();
        },
      },
    },
    highlights: {
      type: "editer",
    },
  });
};

const FormDemo = () => {
  const formConfig = useFormConfigCreater_root()();
  const { formNode } = useFields(formConfig);
  return <>{formNode}</>;
};

export default FormDemo;
