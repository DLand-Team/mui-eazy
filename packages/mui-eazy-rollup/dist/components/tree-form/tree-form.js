import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { Box } from '@mui/material';
import { useMemo, useRef, useEffect, useState } from 'react';
import { useFields } from '../../hooks/use-fields.js';
import { useResponsive } from '../../hooks/use-responsive.js';
import { processRecordLoop, Tree } from '../tree/tree.js';
import '../../node_modules/.pnpm/@iconify_react@4.1.1_react@18.2.0/node_modules/@iconify/react/dist/iconify.js';
import '../tree/styles.js';
import cloneDeep from '../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/cloneDeep.js';
import Grid from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Unstable_Grid2/Grid2.js';
import Card from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Card/Card.js';
import CardHeader from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/CardHeader/CardHeader.js';
import LoadingButton from '../../node_modules/.pnpm/@mui_lab@5.0.0-alpha.165_@emotion_react@11.11.3_@emotion_styled@11.11.0_@mui_material@5.15.10_rj7nkmnq6xz32luabwnzcovv4q/node_modules/@mui/lab/LoadingButton/LoadingButton.js';

// ----------------------------------------------------------------------
const FormItemTe = ({
  formRef,
  id,
  formConfig
}) => {
  const {
    formNode,
    methods
  } = useFields(formConfig, {
    formId: id
  });
  useEffect(() => {
    formRef.current[id] = methods;
  }, []);
  return formNode;
};
const setDefault = (fields, defaltValues) => {
  if (defaltValues) {
    Object.entries(fields).forEach(([key, value]) => {
      if (value.type == 'checkbox') {
        value.defaultValue = defaltValues[key] ? true : false;
      } else {
        value.defaultValue = defaltValues[key] || value.defaultValue || '';
      }
    });
  }
};
const useCreateTreeData = ({
  value = {},
  transfer,
  baseData
}) => {
  const result = useMemo(() => {
    if (value && Object.values(value).length) {
      value = transfer(cloneDeep(value));
      const loop = (base, v) => {
        base?.formConfig && setDefault(base?.formConfig, v);
        if (base.sections) {
          base.sections.forEach(item => {
            let valueTemp = v[item.name];
            if (item.type !== 'array') {
              valueTemp && loop(item, valueTemp);
            } else {
              item.sections = [];
              if (Array.isArray(valueTemp)) {
                valueTemp.forEach(itemChild => {
                  let {
                    formConfig,
                    ...rest
                  } = item.formCreater();
                  if (itemChild) {
                    setDefault(formConfig, itemChild);
                  }
                  let fields = {
                    ...rest,
                    active: false,
                    formConfig: formConfig,
                    onDelete: (id, listArr) => {
                      let targetId = listArr.findIndex(item => {
                        return item.id == id;
                      });
                      listArr.splice(targetId, 1);
                    }
                  };
                  item.sections?.push(fields);
                });
              }
            }
          });
        }
      };
      loop(baseData, value);
    }
    return baseData;
  }, [value, baseData]);
  return result;
};
function TreeForm({
  handleClick,
  treeConfig,
  actionBtnArr,
  transferResult,
  transferInput,
  value
}) {
  const mdUp = useResponsive('up', 'md');
  const allFormRef = useRef({});
  const treeValue = useCreateTreeData({
    value,
    transfer: transferInput,
    baseData: treeConfig
  });
  useEffect(() => {
    mockData.current = treeValue;
    update();
  }, [treeValue]);
  let mockData = useRef(treeValue);
  const [mockDataMeo, setMockDataMeo] = useState(treeValue);
  const record = useMemo(() => {
    let value = {};
    processRecordLoop(mockData.current, '0', value);
    return value;
  }, [mockDataMeo]);
  const update = () => {
    setMockDataMeo({
      ...mockData.current
    });
  };
  const _handleSubmit = async () => {
    let result = {};
    const loop = (value, treeDataItem, id = 0) => {
      let fromIns = allFormRef.current[id];
      if (fromIns) {
        Object.assign(value, fromIns.getValues());
        for (let i in treeDataItem.formConfig) {
          let current = treeDataItem.formConfig[i];
          if (current.isNotInForm && treeDataItem.type !== 'array' && treeDataItem.type !== 'object') {
            delete value[i];
          }
        }
      }
      if (treeDataItem.sections?.length) {
        treeDataItem.sections.forEach(item => {
          if (item.type == 'array') {
            let current = value[item.name || item.label] = [];
            item.sections?.forEach(item => {
              let val = {};
              loop(val, item, item.id);
              current.push(val);
            });
          } else {
            if (item.judeShow && !item.judeShow()) {
              return;
            }
            let current = value[item.name || item.label] = {};
            loop(current, item, item.id);
          }
        });
      }
    };
    loop(result, mockDataMeo);
    let isSuccess = true;
    // 校验
    for (let i in record) {
      if (allFormRef.current[i]) {
        const isRight = await allFormRef.current[i]?.trigger();
        record[i].isError = !isRight;
        if (!isRight) {
          isSuccess = false;
        }
        update();
      }
    }
    transferResult?.(result);
    return {
      isSuccess,
      result
    };
  };
  const renderDetails = jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [mdUp && jsxRuntimeExports.jsx(Grid, {
      md: 4,
      children: jsxRuntimeExports.jsx(Tree, {
        record: record,
        update: update,
        treeRoot: mockDataMeo
      })
    }), jsxRuntimeExports.jsx(Grid, {
      xs: 12,
      md: 8,
      children: jsxRuntimeExports.jsxs(Card, {
        children: [!mdUp && jsxRuntimeExports.jsx(CardHeader, {
          title: "Details"
        }), Object.values(record).map(item => {
          let active = item.isCurrent;
          return jsxRuntimeExports.jsx(Box, {
            style: active ? {} : {
              display: 'none'
            },
            children: item.formConfig && jsxRuntimeExports.jsx(FormItemTe, {
              formRef: allFormRef,
              id: item.id,
              formConfig: item.formConfig
            })
          }, item.id);
        })]
      })
    })]
  });
  const renderActions = jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [mdUp && jsxRuntimeExports.jsx(Grid, {
      md: 4
    }), jsxRuntimeExports.jsxs(Grid, {
      xs: 12,
      md: 12,
      sx: {
        display: 'flex',
        alignItems: 'center'
      },
      children: [jsxRuntimeExports.jsx(Box, {
        sx: {
          flex: 1
        }
      }), actionBtnArr.map((item, key) => {
        return jsxRuntimeExports.jsx(LoadingButton, {
          sx: {
            mr: 2
          },
          onClick: async () => {
            const {
              isSuccess,
              result
            } = await _handleSubmit();
            handleClick({
              type: item.name,
              isSuccess,
              result
            });
          },
          type: "submit",
          variant: "contained",
          size: "large",
          children: item.name
        }, key);
      })]
    })]
  });
  return jsxRuntimeExports.jsxs(Grid, {
    container: true,
    children: [renderDetails, renderActions]
  });
}

export { TreeForm, setDefault, useCreateTreeData };
