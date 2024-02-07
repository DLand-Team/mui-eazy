import dayjs from "dayjs";
import type { FormConfig } from "mui-eazy";
import * as Yup from "yup";
import { uuidv4 } from "../components";

// root-form-config
export const useFormConfigCreater_root = (
  props: { id?: string } = {}
): (() => FormConfig) => {
  // TODO 配置参数
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

//

export const useGetFormConfig2 = (): (() => FormConfig) => {
  return () => {
    return {
      first_name: {},
      last_name: {
        type: "editer",
      },
    };
  };
};



export const useFormConfigCreater_general = (
  props: { id?: string } = {}
): (() => FormConfig) => {
  return () => {
    return {
      title: {
        fieldConfig: {},
      },
      sub_title: {
        fieldConfig: {},
      },
      description: {},
      content: {
        type: "editer",
      },
      video: {},
    };
  };
};


