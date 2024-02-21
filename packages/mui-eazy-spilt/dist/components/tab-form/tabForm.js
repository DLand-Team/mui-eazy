import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { memo, forwardRef, useRef, useState, useImperativeHandle, useMemo } from 'react';
import { FormView } from './formView.js';
import { TabView } from './tabView/tabView.js';

// ----------------------------------------------------------------------
const TabForm = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function DealFormView({
  tabConfig,
  tabId,
  handleTabChange
}, ref) {
  const formMapRef = useRef({});
  const [errorResult, setErrRes] = useState([]);
  const validate = async formArr => {
    let checkArr = formArr.map(item => {
      return item.trigger();
    });
    const resArr = await Promise.all(checkArr);
    setErrRes(resArr);
    if (resArr.some(item => {
      return !item;
    })) {
      return false;
    }
    return true;
  };
  useImperativeHandle(ref, () => {
    return {
      validate,
      getTabFormRef: () => {
        return formMapRef.current;
      }
    };
  }, [tabConfig]);
  const tabsNode = useMemo(() => {
    let result = [];
    for (let i in tabConfig) {
      const item = tabConfig[i];
      result.push({
        id: item.id,
        label: item.label,
        node: jsxRuntimeExports.jsx(FormView, {
          id: item.id,
          formRef: formMapRef,
          formConfig: item.node
        })
      });
    }
    return result;
  }, [tabConfig]);
  return jsxRuntimeExports.jsx(TabView, {
    errorResult: errorResult,
    tabId: tabId,
    handleTabChange: handleTabChange,
    tabs: tabsNode,
    variant: "scrollable",
    scrollButtons: "auto"
  });
}));

export { TabForm as default };
