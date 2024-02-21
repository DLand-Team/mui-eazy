import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useFields } from '../../hooks/use-fields.js';
import '../../utils/myDay.js';
import '../../utils/highlight.js';
import '../../node_modules/.pnpm/numeral@2.0.6/node_modules/numeral/numeral.js';
import '../../node_modules/.pnpm/@iconify_react@4.1.1_react@18.2.0/node_modules/@iconify/react/dist/iconify.js';
import '../../node_modules/.pnpm/react-lazy-load-image-component@1.6.0_react-dom@18.2.0_react@18.2.0/node_modules/react-lazy-load-image-component/build/index.js';
import '../upload/upload-drag/cropModal.js';
import '../../node_modules/.pnpm/react-quill@2.0.0_react-dom@18.2.0_react@18.2.0/node_modules/react-quill/lib/index.js';
import '../editor/styles.js';
import '../../node_modules/.pnpm/react-google-autocomplete@2.7.3_react@18.2.0/node_modules/react-google-autocomplete/lib/usePlacesAutocompleteService.js';

const FormView = ({
  formConfig,
  formRef,
  id
}) => {
  const {
    formNode,
    methods
  } = useFields(formConfig);
  useEffect(() => {
    formRef.current[id] = methods;
  }, [methods]);
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Typography, {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '22px',
      mb: '24px',
      children: "* Required information"
    }), formNode]
  });
};

export { FormView };
