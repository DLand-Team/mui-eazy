import { j as jsxRuntimeExports } from '../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { yupResolver as o } from '../node_modules/.pnpm/@hookform_resolvers@3.3.4_react-hook-form@7.50.1/node_modules/@hookform/resolvers/yup/dist/yup.js';
import { Stack } from '@mui/material';
import React__default, { useState, useMemo } from 'react';
import { useForm } from '../node_modules/.pnpm/react-hook-form@7.50.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.js';
import * as Yup from 'yup';
import '../node_modules/.pnpm/react-lazy-load-image-component@1.6.0_react-dom@18.2.0_react@18.2.0/node_modules/react-lazy-load-image-component/build/index.js';
import '../node_modules/.pnpm/@iconify_react@4.1.1_react@18.2.0/node_modules/@iconify/react/dist/iconify.js';
import '../components/upload/upload-drag/cropModal.js';
import '../node_modules/.pnpm/mui-one-time-password-input@2.0.2_@emotion_react@11.11.3_@emotion_styled@11.11.0_@mui_materia_zfj6k7f6yfwygnu6ebtjrsucvm/node_modules/mui-one-time-password-input/dist/mui-one-time-password-input.es.js';
import '../utils/highlight.js';
import '../node_modules/.pnpm/react-quill@2.0.0_react-dom@18.2.0_react@18.2.0/node_modules/react-quill/dist/quill.snow.css.js';
import '../node_modules/.pnpm/react-quill@2.0.0_react-dom@18.2.0_react@18.2.0/node_modules/react-quill/lib/index.js';
import '../components/editor/styles.js';
import '../node_modules/.pnpm/numeral@2.0.6/node_modules/numeral/numeral.js';
import '../utils/myDay.js';
import { useGetField } from './use-get-field.js';
import '../node_modules/.pnpm/react-google-autocomplete@2.7.3_react@18.2.0/node_modules/react-google-autocomplete/lib/usePlacesAutocompleteService.js';
import { uuidv4 } from '../utils/uuidv4.js';
import FormProvider from '../components/form/form-provider.js';
import styled from '../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js';
import LoadingButton from '../node_modules/.pnpm/@mui_lab@5.0.0-alpha.165_@emotion_react@11.11.3_@emotion_styled@11.11.0_@mui_material@5.15.10_rj7nkmnq6xz32luabwnzcovv4q/node_modules/@mui/lab/LoadingButton/LoadingButton.js';

const StyledLoadingButton = styled(LoadingButton)(() => ({
  backgroundColor: 'rgba(34, 197, 94, 0.16)',
  color: '#118D57',
  '&:hover': {
    backgroundColor: 'rgba(34, 197, 94, 0.36)'
  }
}));
// todo: change the component name
function useFields(fromCg, options = {}) {
  const {
    onSubmit,
    formPrefix = '',
    sx = {},
    mode = 'onChange'
  } = options;
  let defaultValues = {};
  const [isFresh, setIsFresh] = useState('0');
  const fromConfig = useMemo(() => fromCg, [fromCg]);
  let yupShapeObj = {};
  Object.entries(fromConfig).forEach(([keyBase, value]) => {
    const {
      schema,
      defaultValue = '',
      name = keyBase,
      prefix = formPrefix ? [formPrefix] : '',
      fieldConfig = {}
    } = value;
    let key = name;
    const {
      required
    } = fieldConfig;
    if (prefix) {
      let objKey = '';
      if (Array.isArray(prefix)) {
        objKey = [...prefix].join('.');
      } else {
        objKey = prefix;
      }
      if (!defaultValues[objKey]) {
        defaultValues[objKey] = {};
      }
      defaultValues[objKey][key] = defaultValue;
    } else {
      let currentShape = yupShapeObj;
      let current = defaultValues;
      let keyArr = key.split('.');
      keyArr.forEach((key, index) => {
        if (index != keyArr.length - 1) {
          if (!current[key]) {
            currentShape[key] = {};
            current[key] = {};
          }
          currentShape = currentShape[key];
          current = current[key];
        } else {
          current[key] = defaultValue;
          if (schema) {
            currentShape[key] = schema;
          }
          if (required) {
            if (currentShape[key]) {
              currentShape[key] = currentShape[key].required(name + ' is required');
            } else {
              currentShape[key] = Yup.string().required(name + ' is required');
            }
          }
        }
      });
    }
  });
  let loop = (obj, path, p = null) => {
    let temp = {
      ...obj
    };
    for (let i in temp) {
      if (typeof temp[i] == 'object' && !(temp[i] instanceof Yup.Schema)) {
        loop(temp[i], path ? path + '.' + i : i, temp);
      }
    }
    if (path) {
      let pathArr = path.split('.');
      if (pathArr.length > 1) {
        p[pathArr.slice(-1)[0]] = Yup.object(temp);
      } else {
        yupShapeObj[pathArr.slice(-1)[0]] = Yup.object(temp);
      }
    }
  };
  loop(yupShapeObj, '', yupShapeObj);
  const PersonalSchema = Yup.object().shape(yupShapeObj);
  const methods = useForm({
    resolver: o(PersonalSchema),
    defaultValues,
    mode
  });
  const {
    watch,
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = methods;
  const getField = useGetField(methods);
  const fileds = useMemo(() => {
    return Object.entries(fromConfig).map(([key, value]) => {
      if (value.type == 'custom') {
        return value.customForm?.() || jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
      }
      return jsxRuntimeExports.jsx(React__default.Fragment, {
        children: getField(value.name || key, {
          prefix: formPrefix ? [formPrefix] : '',
          ...value
        })
      }, key);
    });
  }, [isFresh, fromConfig]);
  React__default.useEffect(() => {
    const subscription = watch((values, info) => {
      Object.entries(fromConfig).map(([_, value]) => {
        if (value.fieldConfig?.childFieldConfig) {
          for (const item of Object.values(value.fieldConfig?.childFieldConfig)) {
            if (item.watch) {
              item.watch?.({
                currentConfig: item,
                values,
                info,
                api: methods
              });
              setIsFresh(uuidv4());
            }
          }
        }
        if (value.watch) {
          value.watch?.({
            currentConfig: value,
            values,
            info,
            api: methods
          });
          setIsFresh(uuidv4());
        }
      });
    });
    return () => subscription.unsubscribe();
  }, [watch, fromConfig]);
  let formNode = useMemo(() => {
    return jsxRuntimeExports.jsx(FormProvider, {
      onSubmit: handleSubmit(() => {}),
      formRef: methods,
      children: jsxRuntimeExports.jsxs(Stack, {
        sx: sx,
        spacing: 3,
        children: [fileds, onSubmit && jsxRuntimeExports.jsx(StyledLoadingButton, {
          type: "submit",
          variant: "contained",
          size: "large",
          onClick: async () => {
            const isRight = await methods.trigger();
            onSubmit({
              isRight,
              values: methods.getValues(),
              formRef: methods
            });
          },
          loading: isSubmitting,
          children: "Save"
        })]
      })
    });
  }, [isFresh, fileds]);
  return {
    formNode,
    methods
  };
}

export { useFields };
