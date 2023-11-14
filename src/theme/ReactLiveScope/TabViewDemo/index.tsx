import PropsTable from "@site/src/components/PropsTable";
import { FormConfig, TabView, TabViewItem, useFields } from "mui-eazy";
import { useMemo } from "react";
export const TabViewProps = () => {
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
const useFormConfig_1 = (props: { id?: string } = {}): FormConfig => {
  return useMemo(() => {
    return {
      title: {
        fieldConfig: {
          required: true,
        },
      },
      sub_title: {
        label: "subTitle",
      },
    };
  }, []);
};
const useFormConfig_2 = (props: { id?: string } = {}): FormConfig => {
  return useMemo(() => {
    return {
      title: {
        type: "checkbox",
        fieldConfig: {
          required: true,
        },
      },
      sub_title: {
        label: "subTitle",
      },
    };
  }, []);
};
const useFormConfig_3 = (props: { id?: string } = {}): FormConfig => {
  return useMemo(() => {
    return {
      content: {
        type: "editer",
      },
      name: {
        label: "subTitle",
        type: "upload",
      },
    };
  }, []);
};

const Demo = () => {
  const config1 = useFormConfig_1();
  const config2 = useFormConfig_2();
  const config3 = useFormConfig_3();
  const { formNode: formNode1 } = useFields(config1, {
    onSubmit: (props) => {
      const { isRight, values, formRef } = props || {};
      if (isRight) {
        alert(JSON.stringify(values));
      }
    },
  });
  const { formNode: formNode2 } = useFields(config2, {
    onSubmit: (props) => {
      const { isRight, values, formRef } = props || {};
      if (isRight) {
        alert(JSON.stringify(values));
      }
    },
  });
  const { formNode: formNode3 } = useFields(config3, {
    onSubmit: (props) => {
      const { isRight, values, formRef } = props || {};
      if (isRight) {
        alert(JSON.stringify(values));
      }
    },
  });
  const tabValues = useMemo<TabViewItem[]>(() => {
    return [
      {
        label: "tab1",
        node: formNode1,
      },
      {
        label: "tab2",
        node: formNode2,
      },
      {
        label: "tab3",
        node: formNode3,
      },
    ];
  }, []);
  return <TabView tabs={tabValues} />;
};

export default Demo;
