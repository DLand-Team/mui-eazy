import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { Stack, IconButton, Button, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useFormContext, Controller } from '../../node_modules/.pnpm/react-hook-form@7.50.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.js';
import '../../hooks/use-fields.js';
import { useGetField } from '../../hooks/use-get-field.js';
import '../../utils/myDay.js';
import '../../utils/highlight.js';
import '../../node_modules/.pnpm/numeral@2.0.6/node_modules/numeral/numeral.js';
import { uuidv4 } from '../../utils/uuidv4.js';
import { Iconify } from '../iconify/iconify.js';
import '../../node_modules/.pnpm/react-lazy-load-image-component@1.6.0_react-dom@18.2.0_react@18.2.0/node_modules/react-lazy-load-image-component/build/index.js';
import '../upload/upload-drag/cropModal.js';
import '../../node_modules/.pnpm/react-quill@2.0.0_react-dom@18.2.0_react@18.2.0/node_modules/react-quill/lib/index.js';
import '../editor/styles.js';
import '../../node_modules/.pnpm/react-google-autocomplete@2.7.3_react@18.2.0/node_modules/react-google-autocomplete/lib/usePlacesAutocompleteService.js';

function FieldMul(props) {
  const {
    name,
    mulType = 'one',
    addLabel,
    itemFieldConfig,
    childFieldConfig
  } = props;
  const {
    setValue,
    getValues,
    unregister,
    register
  } = useFormContext();
  const {
    control
  } = useFormContext();
  let value = getValues(name);
  const [arr, setArr] = useState([{
    id: uuidv4(),
    label: name
  }]);
  useEffect(() => {
    value && Array.isArray(value) && setArr(value?.map?.(() => {
      return {
        id: uuidv4(),
        label: name
      };
    }));
  }, []);
  const getField = useGetField();
  let comp;
  const fields = arr.map((entity, index) => {
    const {
      id
    } = entity;
    let itemName = `${name}.${index}`;
    let fields;
    if (mulType == 'one') {
      fields = childFieldConfig ? getField(itemName, childFieldConfig) : getField(itemName, {
        label: itemFieldConfig?.placeholder || itemFieldConfig?.label,
        fieldConfig: itemFieldConfig || props
      });
      comp = jsxRuntimeExports.jsxs(Stack, {
        sx: {
          marginBottom: '10px'
        },
        direction: "row",
        children: [fields, jsxRuntimeExports.jsx(IconButton, {
          sx: {
            width: '51px',
            height: '51px'
          },
          onClick: _ => {
            if (arr.length <= 1) {
              return;
            }
            let temp = [...arr];
            const targetId = arr.findIndex(item => {
              return item.id === id;
            });
            temp.splice(targetId, 1);
            let formValue = [...getValues(name)];
            // 删除值
            formValue.splice(targetId, 1);
            unregister(`${name}`, {
              keepDefaultValue: false,
              keepDirty: false
            });
            for (let i in temp) {
              unregister(`${name}.${i}`, {
                keepDefaultValue: false,
                keepDirty: false
              });
            }
            register(`${name}`);
            for (let i in temp) {
              register(`${name}.${i}`);
            }
            setValue(`${name}`, formValue);
            formValue.forEach((value, index) => {
              setValue(`${name}.${index}`, value);
            });
            setArr(temp);
          },
          children: jsxRuntimeExports.jsx(Iconify, {
            icon: 'icon-park-outline:delete'
          })
        })]
      }, id);
    } else if (childFieldConfig) {
      fields = Object.entries(childFieldConfig).map(([key, value]) => {
        value.name = `${itemName}.${key}`;
        let temp = {
          ...value
        };
        if (value.labelMap?.[index]) {
          temp.label = value.labelMap?.[index];
        }
        return jsxRuntimeExports.jsx(Stack, {
          sx: {
            mb: 2,
            width: '100%'
          },
          direction: "row",
          children: getField(`${itemName}.${key}`, temp)
        }, value.name);
      });
      comp = jsxRuntimeExports.jsxs(Stack, {
        sx: {
          width: '100%'
        },
        children: [fields, jsxRuntimeExports.jsx(Stack, {
          sx: {
            width: '100%',
            mb: 2
          },
          direction: "row",
          children: jsxRuntimeExports.jsx(IconButton, {
            sx: {},
            onClick: _ => {
              if (arr.length <= 1) {
                return;
              }
              let temp = [...arr];
              const targetId = arr.findIndex(item => {
                return item.id === id;
              });
              temp.splice(targetId, 1);
              let formValue = [...getValues(name)];
              // 删除值
              formValue.splice(targetId, 1);
              for (let i in temp) {
                unregister(`${name}.${i}`, {
                  keepDefaultValue: false,
                  keepDirty: false
                });
              }
              for (let i in temp) {
                register(`${name}.${i}`);
              }
              setValue(`${name}`, formValue);
              formValue.forEach((value, index) => {
                setValue(`${name}.${index}`, value);
              });
              setArr(temp);
            },
            children: jsxRuntimeExports.jsx(Iconify, {
              icon: 'icon-park-outline:delete'
            })
          })
        })]
      }, id);
    } else {
      return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
        children: "error"
      });
    }
    return comp;
  });
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: jsxRuntimeExports.jsx(Controller, {
      name: name,
      control: control,
      render: ({
        fieldState: {
          error
        }
      }) => {
        return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
          children: [fields, jsxRuntimeExports.jsx("div", {
            children: jsxRuntimeExports.jsx(Button, {
              onClick: _ => {
                setArr([...arr, {
                  id: uuidv4(),
                  label: name
                }]);
              },
              startIcon: jsxRuntimeExports.jsx(Iconify, {
                color: '#256CCB',
                width: '32px',
                height: '32px',
                icon: 'formkit:add'
              }),
              children: jsxRuntimeExports.jsx(Typography, {
                fontSize: '14px',
                color: '#256CCB',
                children: addLabel || `add ${name}`
              })
            })
          }), (error?.root?.message || error?.message) && jsxRuntimeExports.jsx("div", {
            style: {
              color: '#FF5630',
              lineHeight: 1.5,
              fontSize: '0.75rem',
              fontWeight: 400,
              textAlign: 'left',
              marginRight: '14px',
              marginBottom: '0',
              marginLeft: '14px'
            },
            children: error?.message || error?.root?.message
          })]
        });
      }
    })
  });
}

export { FieldMul as default };
