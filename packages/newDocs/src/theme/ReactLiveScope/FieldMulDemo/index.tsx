import { Button, Stack } from "@mui/material";
import PropsTable from "@site/src/components/PropsTable";
import { FieldMul, FormProvider, notify, useFormRef } from "../components";
import { FormConfig, FormConfigItem } from "mui-eazy";
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

export const FieldMulDemo2 = () => {
  const formRef = useFormRef({});
  const { handleSubmit } = formRef;
  const onSubmit = handleSubmit(() => {
    notify.success(JSON.stringify(formRef.getValues()));
  });
  const config:FormConfig = {
    itemA: {
      type: 'editer',
      fieldConfig: {
        sx:{
          width:'100%'
        },
        required: true,
      },
    },
    itemB: {
      type: "datePicker",
      fieldConfig: {
        sx:{
          width:'100%'
        },
        required: true,
      },
    },
    itemc: {
      fieldConfig: {
        required: true,
      },
    },
  };
  return (
    <FormProvider formRef={formRef} onSubmit={onSubmit}>
      <FieldMul mulType="obj" mulFromConfig={config} name="FieldMul" />
      <Stack
        direction="row"
        sx={{
          justifyContent: "end",
        }}>
        <Button
          sx={{
            marginTop: "10px",
          }}
          variant="contained"
          type="submit">
          Submit
        </Button>
      </Stack>
      {}
    </FormProvider>
  );
};

const FieldMulDemo1 = () => {
  const formRef = useFormRef({});
  const { handleSubmit } = formRef;
  const onSubmit = handleSubmit(() => {
    notify.success(JSON.stringify(formRef.getValues()));
  });
  const config: FormConfigItem = {
    label: "test",
    fieldConfig: {
      required: true,
    },
  };
  return (
    <FormProvider formRef={formRef} onSubmit={onSubmit}>
      <FieldMul mulType="one" mulFromConfig={config} name="FieldMul" />
      <Stack
        direction="row"
        sx={{
          justifyContent: "end",
        }}>
        <Button
          sx={{
            marginTop: "10px",
          }}
          variant="contained"
          type="submit">
          Submit
        </Button>
      </Stack>
      {}
    </FormProvider>
  );
};

export default FieldMulDemo1;
