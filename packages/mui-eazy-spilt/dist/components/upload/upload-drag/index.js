import { j as jsxRuntimeExports } from '../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { UploadDragMul } from './upload-drag-mul/index.js';
import { UploadDragSingle } from './upload-drag-single/index.js';

// ----------------------------------------------------------------------
function UploadDrag({
  multiple = false,
  ...rest
}) {
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: multiple ? jsxRuntimeExports.jsx(UploadDragMul, {
      ...rest
    }) : jsxRuntimeExports.jsx(UploadDragSingle, {
      ...rest
    })
  });
}

export { UploadDrag };
