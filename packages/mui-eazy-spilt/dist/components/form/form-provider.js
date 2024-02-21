import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { FormProvider as FormProvider$1 } from '../../node_modules/.pnpm/react-hook-form@7.50.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.js';

function FormProvider({
  children,
  onSubmit,
  formRef
}) {
  return jsxRuntimeExports.jsx(FormProvider$1, {
    ...formRef,
    children: jsxRuntimeExports.jsx("form", {
      onSubmit: onSubmit,
      children: children
    })
  });
}

export { FormProvider as default };
