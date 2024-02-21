import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { Box, Stack } from '@mui/material';
import { varBounce } from '../animate/variants/bounce.js';
import { MotionContainer } from '../animate/motion-container.js';
import { Iconify } from '../iconify/iconify.js';
import { TreeItemStyledItem, TreeItemStyledIcon, TreeItemStyledDotIcon } from './styles.js';
import { m } from '../../node_modules/.pnpm/framer-motion@10.18.0_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/dom/motion-minimal.js';

const navVerticalConfig = config => ({
  itemGap: config?.itemGap || 4,
  iconSize: config?.iconSize || 24,
  currentRole: config?.currentRole,
  itemRootHeight: config?.itemRootHeight || 44,
  itemSubHeight: config?.itemSubHeight || 36,
  itemPadding: config?.itemPadding || '4px 8px 4px 12px',
  itemRadius: config?.itemRadius || 8,
  hiddenLabel: config?.hiddenLabel || false
});
const TreeItem = props => {
  const {
    active,
    depth,
    isError,
    label,
    children,
    formCreater,
    sx = {},
    ...rest
  } = props;
  let sxOptionArr = [{
    ml: 0
  }, {
    ml: 1
  }, {
    ml: 2
  }, {
    ml: 3
  }, {
    ml: 4
  }, {
    ml: 5
  }];
  let sxOption = sxOptionArr[depth];
  return jsxRuntimeExports.jsx(Box, {
    children: jsxRuntimeExports.jsxs(Stack, {
      alignItems: "center",
      direction: "row",
      children: [jsxRuntimeExports.jsxs(TreeItemStyledItem, {
        sx: {
          ...sxOption,
          ...sx
        },
        ...rest,
        active: active,
        depth: depth,
        config: navVerticalConfig(),
        children: [jsxRuntimeExports.jsx(TreeItemStyledIcon, {
          sx: {
            mr: 1.5
          },
          children: jsxRuntimeExports.jsx(TreeItemStyledDotIcon, {
            active: active
          })
        }), jsxRuntimeExports.jsx(Box, {
          component: "span",
          sx: {
            ml: 1,
            lineHeight: 0
          },
          children: `${label}`
        }), children]
      }), jsxRuntimeExports.jsx(Box, {
        sx: {
          width: '28px'
        },
        children: isError && jsxRuntimeExports.jsx(MotionContainer, {
          action: true,
          animate: isError,
          children: jsxRuntimeExports.jsx(m.div, {
            variants: varBounce().in,
            children: jsxRuntimeExports.jsx(Iconify, {
              color: 'red',
              icon: "material-symbols:error",
              width: 20
            })
          })
        })
      })]
    })
  });
};

export { TreeItem };
