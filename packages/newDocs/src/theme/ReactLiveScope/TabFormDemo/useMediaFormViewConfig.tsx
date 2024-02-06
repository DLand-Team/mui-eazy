import { FormConfig } from 'mui-eazy';
import { useMemo } from 'react';

export const useMediaFormViewConfig = ({
  defaultValues,
  type,
}: {
  id?: string;
  defaultValues?: any;
  type?: string;
}): FormConfig => {
  return useMemo<FormConfig>(() => {
    return {
      attachments: {
        label: 'Upload documents (optional)',
        type: 'upload',
        defaultValue: defaultValues?.['attachments'],
        fieldConfig: {
          multiple: true,
          accept: {},
          uploadAction: async (file) => {
            return 'https://qiniu.moderate.run/img/1687610945521';
          },
        },
      },
      linkedin: {
        defaultValue: defaultValues?.components?.media?.linkedin,
        label: 'LinkedIn (optional)',
        name: 'components.media.linkedin',
      },
      facebook: {
        defaultValue: defaultValues?.components?.media?.facebook,
        label: 'Facebook (optional)',
        name: 'components.media.facebook',
      },
      instagram: {
        defaultValue: defaultValues?.components?.media?.instagram,
        label: 'Instagram (optional)',
        name: 'components.media.instagram',
      },
    };
  }, [defaultValues]);
};
