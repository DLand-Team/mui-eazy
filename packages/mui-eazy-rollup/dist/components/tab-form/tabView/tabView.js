import { j as jsxRuntimeExports } from '../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { Tabs, Tab } from '@mui/material';
import { useState, useCallback, useLayoutEffect } from 'react';
import '@emotion/styled';
import '@mui/system';
import '../../../hooks/use-fields.js';
import { Iconify } from '../../iconify/iconify.js';
import { uuidv4 } from '../../../utils/uuidv4.js';
import '../../tree/styles.js';
import '../../../utils/myDay.js';
import '../../../utils/highlight.js';
import '../../../node_modules/.pnpm/numeral@2.0.6/node_modules/numeral/numeral.js';
import '../../../node_modules/.pnpm/react-lazy-load-image-component@1.6.0_react-dom@18.2.0_react@18.2.0/node_modules/react-lazy-load-image-component/build/index.js';
import '../../upload/upload-drag/cropModal.js';
import '../../../node_modules/.pnpm/react-quill@2.0.0_react-dom@18.2.0_react@18.2.0/node_modules/react-quill/dist/quill.snow.css.js';
import '../../../node_modules/.pnpm/react-quill@2.0.0_react-dom@18.2.0_react@18.2.0/node_modules/react-quill/lib/index.js';
import '../../editor/styles.js';
import '../../../node_modules/.pnpm/react-google-autocomplete@2.7.3_react@18.2.0/node_modules/react-google-autocomplete/lib/usePlacesAutocompleteService.js';
import '../../../node_modules/.pnpm/mui-one-time-password-input@2.0.2_@emotion_react@11.11.3_@emotion_styled@11.11.0_@mui_materia_zfj6k7f6yfwygnu6ebtjrsucvm/node_modules/mui-one-time-password-input/dist/mui-one-time-password-input.es.js';
import '../../../node_modules/.pnpm/slick-carousel@1.8.1_jquery@3.7.1/node_modules/slick-carousel/slick/slick.css.js';
import '../../../node_modules/.pnpm/slick-carousel@1.8.1_jquery@3.7.1/node_modules/slick-carousel/slick/slick-theme.css.js';
import 'react-slick';
import '../../carousel/carousel-dots.js';
import '../../carousel/carousel-arrows.js';
import '../../carousel/carousel-arrow-index.js';
import '../../../node_modules/.pnpm/notistack@3.0.1_csstype@3.1.3_react-dom@18.2.0_react@18.2.0/node_modules/notistack/notistack.esm.js';
import '../../modal/modal.js';
import 'yup';
import Box from '../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js';

function TabView({
  tabs,
  tabId,
  handleTabChange,
  errorResult,
  ...rest
}) {
  // TAB 处理逻辑
  const [tabViewValue, setTabs] = useState([]);
  const handleChangeTab = useCallback((_, newValue) => {
    handleTabChange(newValue);
  }, []);
  useLayoutEffect(() => {
    const temp = [];
    tabs.forEach((item, index) => {
      let tempItem = {};
      temp.push(tempItem);
      if (!item.id) {
        temp[index].id = uuidv4();
      }
      Object.assign(temp[index], item);
    });
    setTabs(temp);
  }, [tabs]);
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Tabs, {
      onChange: handleChangeTab,
      style: {
        marginBottom: '20px'
      },
      ...rest,
      value: tabId,
      children: tabViewValue.map(({
        id,
        label
      }, index) => jsxRuntimeExports.jsx(Tab, {
        icon: errorResult[index] === false && jsxRuntimeExports.jsx(Iconify, {
          color: 'red',
          icon: "material-symbols:error",
          width: 20
        }) || jsxRuntimeExports.jsx(Box, {
          sx: {
            width: 0
          }
        }),
        iconPosition: "end",
        value: id,
        label: label
      }, label || id))
    }), tabViewValue.map(({
      id,
      node
    }) => {
      return jsxRuntimeExports.jsx(CustomTabPanel, {
        value: tabId,
        index: id,
        children: node
      }, id);
    })]
  });
}
function CustomTabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;
  let sxTemp = value === index ? {} : {
    display: 'none'
  };
  return jsxRuntimeExports.jsx("div", {
    role: "tabpanel",
    hidden: value !== index,
    id: `simple-tabpanel-${index}`,
    "aria-labelledby": `simple-tab-${index}`,
    ...other,
    children: jsxRuntimeExports.jsx(Box, {
      sx: {
        py: 3,
        ...sxTemp
      },
      children: children
    })
  });
}

export { TabView };
