import FormHelperText from '@mui/material/FormHelperText';
import { Controller, useFormContext } from 'react-hook-form';
import { UploadBtn, UploadDrag, UploadProps } from '../upload';
import { useEffect } from 'react';

// ----------------------------------------------------------------------

export interface FieldUploadProps extends Omit<UploadProps, 'file'> {
  name: string;
  multiple?: boolean;
  isCrop?: boolean;
}

// ----------------------------------------------------------------------

export function FieldUploadBox({ name, ...other }: FieldUploadProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <UploadBtn files={field.value} error={!!error} {...other} />
      )}
    />
  );
}

// ----------------------------------------------------------------------

export function FieldUpload({
  accept,
  name,
  multiple,
  helperText,
  onUpload,
  isCrop,
  ...other
}: FieldUploadProps) {
  const { control, setValue, getValues, watch, trigger } = useFormContext();
  useEffect(() => {
    const subscription = watch((_, info) => {
      if (info.name == name) {
        trigger(name);
      }
    });
    return () => subscription.unsubscribe();
  }, []);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <UploadDrag
          isCrop={isCrop}
          multiple={multiple}
          accept={accept || { 'image/*': [] }}
          files={multiple ? field.value : field.value ? [field.value] : []}
          error={!!error}
          onOrder={(fileUrls: string[]) => {
            setValue(name, fileUrls);
          }}
          onAdd={(fileUrl: string) => {
            if (multiple) {
              const fileList = getValues(name) || [];
              setValue(name, [...fileList, fileUrl]);
            } else {
              setValue(name, fileUrl);
            }
          }}
          onDel={(fileUrl: string) => {
            if (multiple) {
              let fileList: any[] = getValues(name);
              let targetid = fileList.findIndex((item) => {
                return item == fileUrl;
              });
              fileList.splice(targetid, 1);
              setValue(name, fileList);
            } else {
              setValue(name, null);
            }
          }}
          helperText={
            (!!error || helperText) && (
              <FormHelperText error={!!error} sx={{ px: 2 }}>
                {error ? error?.message : helperText}
              </FormHelperText>
            )
          }
          {...other}
        />
      )}
    />
  );
}
