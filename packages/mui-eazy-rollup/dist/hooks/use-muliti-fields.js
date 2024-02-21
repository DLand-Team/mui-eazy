import { j as jsxRuntimeExports } from '../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { useMemo } from 'react';
import { getField } from '../utils/get-field.js';
import { Stack, IconButton } from '@mui/material';
import { Iconify } from '../components/iconify/iconify.js';

function useMulitiFields(fields) {
  const fileds = useMemo(() => {
    return fields.map(entity => {
      const {
        label
      } = entity;
      const Field = getField('string');
      return jsxRuntimeExports.jsxs(Stack, {
        direction: "row",
        children: [jsxRuntimeExports.jsx(Field, {
          label: label,
          name: entity.id
        }), jsxRuntimeExports.jsx(IconButton, {
          style: {
            zIndex: 10
          },
          onClick: _ => {},
          sx: {
            position: 'absolute',
            right: '40px'
          },
          children: jsxRuntimeExports.jsx(Iconify, {
            width: 16,
            icon: 'icon-park-outline:add'
          })
        })]
      });
    });
  }, []);
  return fileds;
}

export { useMulitiFields };
