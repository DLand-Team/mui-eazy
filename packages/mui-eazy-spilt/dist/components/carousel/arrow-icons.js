import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { Iconify } from '../iconify/iconify.js';

function LeftIcon({
  icon = 'eva:arrow-ios-forward-fill',
  isRTL
}) {
  return jsxRuntimeExports.jsx(Iconify, {
    icon: icon,
    sx: {
      transform: ' scaleX(-1)',
      ...(isRTL && {
        transform: ' scaleX(1)'
      })
    }
  });
}
function RightIcon({
  icon = 'eva:arrow-ios-forward-fill',
  isRTL
}) {
  return jsxRuntimeExports.jsx(Iconify, {
    icon: icon,
    sx: {
      ...(isRTL && {
        transform: ' scaleX(-1)'
      })
    }
  });
}

export { LeftIcon, RightIcon };
