import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { Tabs, Tab } from '@mui/material';
import { useState, useCallback, useLayoutEffect } from 'react';
import '../../utils/highlight.js';
import '../../node_modules/.pnpm/numeral@2.0.6/node_modules/numeral/numeral.js';
import '../../utils/myDay.js';
import '../../hooks/use-fields.js';
import '../../node_modules/.pnpm/@iconify_react@4.1.1_react@18.2.0/node_modules/@iconify/react/dist/iconify.js';
import '../../node_modules/.pnpm/react-lazy-load-image-component@1.6.0_react-dom@18.2.0_react@18.2.0/node_modules/react-lazy-load-image-component/build/index.js';
import '../upload/upload-drag/cropModal.js';
import '../../node_modules/.pnpm/react-quill@2.0.0_react-dom@18.2.0_react@18.2.0/node_modules/react-quill/dist/quill.snow.css.js';
import '../../node_modules/.pnpm/react-quill@2.0.0_react-dom@18.2.0_react@18.2.0/node_modules/react-quill/lib/index.js';
import '../editor/styles.js';
import '../../node_modules/.pnpm/react-google-autocomplete@2.7.3_react@18.2.0/node_modules/react-google-autocomplete/lib/usePlacesAutocompleteService.js';
import { uuidv4 } from '../../utils/uuidv4.js';
import Box from '../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js';

function TabView({
  tabs,
  ...rest
}) {
  // TAB 处理逻辑
  const [tabViewValue, setTabs] = useState([]);
  const [tab, setTab] = useState('My Information');
  const handleChangeTab = useCallback((_, newValue) => {
    setTab(newValue);
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
    temp[0].id && setTab(temp[0].id);
    setTabs(temp);
  }, [tabs]);
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Tabs, {
      scrollButtons: false,
      onChange: handleChangeTab,
      style: {
        marginBottom: '20px'
      },
      ...rest,
      value: tab,
      children: tabViewValue.map(({
        id,
        label
      }) => jsxRuntimeExports.jsx(Tab, {
        value: id,
        label: label
      }, label || id))
    }), tabViewValue.map(({
      id,
      node
    }) => jsxRuntimeExports.jsx(CustomTabPanel, {
      value: tab,
      index: id,
      children: node
    }, id))]
  });
}
function CustomTabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;
  return jsxRuntimeExports.jsx("div", {
    role: "tabpanel",
    hidden: value !== index,
    id: `simple-tabpanel-${index}`,
    "aria-labelledby": `simple-tab-${index}`,
    ...other,
    children: value === index && jsxRuntimeExports.jsx(Box, {
      sx: {
        py: 3
      },
      children: children
    })
  });
}

export { TabView };
