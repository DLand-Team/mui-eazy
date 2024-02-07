import { Button, MenuItem, Stack } from "@mui/material";
import {
  FieldUpload,
  FormProvider,
  useFormRef,
  notify,
  FieldSelect,
} from "../components";
import PropsTable from "@site/src/components/PropsTable";
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

const Demo = () => {
  const formRef = useFormRef({});
  const { handleSubmit } = formRef;
  const onSubmit = handleSubmit(() => {
    notify.success(JSON.stringify(formRef.getValues()));
  });
  const options = ["1", "2"];
  return (
    <FormProvider formRef={formRef} onSubmit={onSubmit}>
      <FieldSelect label="Field" name="Field">
        {options?.map((item: any) => {
          return (
            <MenuItem
              key={typeof item == "string" ? item : item.key}
              value={typeof item == "string" ? item : item.value}>
              {typeof item == "string" ? item : item.label}
            </MenuItem>
          );
        })}
      </FieldSelect>
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
    </FormProvider>
  );
};

export default Demo;
