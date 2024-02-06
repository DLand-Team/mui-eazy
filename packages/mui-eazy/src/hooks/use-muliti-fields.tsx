import { useMemo } from 'react';
import { getField } from '../utils/get-field';
import { FormConfigItem } from './use-get-field';
import { IconButton, Stack } from '@mui/material';
import { Iconify } from '../components/iconify';

export function useMulitiFields(fields: FormConfigItem[]) {
  const fileds = useMemo(() => {
    return fields.map((entity) => {
      const { label } = entity;
      const Field = getField('string');
      return (
        <Stack direction="row">
          <Field label={label} name={entity.id!}></Field>
          <IconButton
            style={{
              zIndex: 10,
            }}
            onClick={(_) => {}}
            sx={{ position: 'absolute', right: '40px' }}
          >
            <Iconify width={16} icon={'icon-park-outline:add'} />
          </IconButton>
        </Stack>
      );
    });
  }, []);
  return fileds;
}
