import { UseFormReturn } from 'react-hook-form';

export type FromRefType = UseFormReturn<
  {
    [key: string]: any;
  },
  any,
  undefined
>;
