import { j as jsxRuntimeExports } from '../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { createElement } from 'react';
import { Stack, Typography } from '@mui/material';
import { getField } from '../utils/get-field.js';
import MenuItem from '../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/MenuItem/MenuItem.js';

const useGetField = (methods = null) => {
  const useGetFieldByFormConfig = (keyBase, item) => {
    const {
      isHidden,
      type,
      label = keyBase,
      config,
      prefix = '',
      fieldConfig,
      wrapper
    } = item;
    if (isHidden) return;
    let key = keyBase;
    if (prefix) {
      if (Array.isArray(prefix)) {
        let temp = [...prefix];
        temp.push(key);
        key = temp.join('.');
      } else {
        key = prefix + '.' + key;
      }
    }
    let fieldNode;
    if (type === 'select') {
      const FieldItem = getField(type);
      fieldNode = /*#__PURE__*/createElement(FieldItem, {
        ...fieldConfig,
        name: key,
        label: label,
        key: key
      }, config?.options?.map(item => {
        return jsxRuntimeExports.jsx(MenuItem, {
          value: typeof item == 'string' ? item : item.value,
          children: typeof item == 'string' ? item : item.label
        }, typeof item == 'string' ? item : item.key);
      }));
    } else if (type === 'editer') {
      const FieldItem = getField(type);
      fieldNode = jsxRuntimeExports.jsxs(Stack, {
        sx: {
          width: '100%'
        },
        spacing: 1.5,
        children: [jsxRuntimeExports.jsx(Typography, {
          variant: "subtitle2",
          children: label
        }), jsxRuntimeExports.jsx(FieldItem, {
          ...fieldConfig,
          simple: true,
          name: key
        })]
      }, key);
    } else if (type === 'autoCompleteGoogle') {
      const FieldItem = getField(type);
      fieldNode = jsxRuntimeExports.jsx(FieldItem, {
        name: key,
        label: label
      }, key);
    } else if (type === 'checkbox') {
      const FieldItem = getField(type);
      fieldNode = /*#__PURE__*/createElement(FieldItem, {
        ...fieldConfig,
        name: key,
        label: label,
        key: key
      });
    } else if (type === 'datePicker') {
      const FieldItem = getField(type);
      fieldNode = /*#__PURE__*/createElement(FieldItem, {
        ...fieldConfig,
        name: key,
        label: label,
        key: key
      });
    } else if (type === 'multiple') {
      const FieldItem = getField(type);
      fieldNode = /*#__PURE__*/createElement(FieldItem, {
        methods: methods,
        ...fieldConfig,
        name: key,
        key: key
      });
    } else if (type === 'upload') {
      const FieldItem = getField(type);
      fieldNode = jsxRuntimeExports.jsxs(Stack, {
        sx: {
          width: '100%'
        },
        spacing: 1.5,
        children: [jsxRuntimeExports.jsx(Typography, {
          variant: "subtitle2",
          children: label
        }), /*#__PURE__*/createElement(FieldItem, {
          ...fieldConfig,
          name: key,
          key: key
        })]
      });
    } else if (type === 'uploadBox') {
      const FieldItem = getField(type);
      fieldNode = jsxRuntimeExports.jsxs(Stack, {
        spacing: 1.5,
        children: [jsxRuntimeExports.jsx(Typography, {
          variant: "subtitle2",
          children: label
        }), /*#__PURE__*/createElement(FieldItem, {
          ...fieldConfig,
          name: key,
          key: key
        })]
      });
    } else if (type === 'radio') {
      const FieldItem = getField(type);
      let options = [];
      if (config?.options?.length && typeof config?.options[0] == 'string') {
        options = config?.options.map(item => {
          return {
            value: item,
            key: item,
            label: item
          };
        });
      } else {
        options = config?.options;
      }
      fieldNode = jsxRuntimeExports.jsxs(Stack, {
        spacing: 1.5,
        children: [jsxRuntimeExports.jsx(Typography, {
          variant: "subtitle2",
          children: label
        }), /*#__PURE__*/createElement(FieldItem, {
          options: options,
          ...fieldConfig,
          name: key,
          key: key
        })]
      });
    } else if (type === 'multiSelect') {
      const FieldItem = getField('multiSelect');
      fieldNode = jsxRuntimeExports.jsxs(Stack, {
        spacing: 1.5,
        children: [jsxRuntimeExports.jsx(Typography, {
          variant: "subtitle2",
          children: label
        }), /*#__PURE__*/createElement(FieldItem, {
          ...fieldConfig,
          name: key,
          label: label,
          key: key
        })]
      });
    } else {
      const FieldItem = getField('string');
      fieldNode = /*#__PURE__*/createElement(FieldItem, {
        ...fieldConfig,
        name: key,
        label: label,
        key: key
      });
    }
    if (wrapper) {
      let Wrapper = wrapper;
      return jsxRuntimeExports.jsx(Wrapper, {
        children: fieldNode
      }, key);
    }
    return fieldNode;
  };
  return useGetFieldByFormConfig;
};

export { useGetField };
