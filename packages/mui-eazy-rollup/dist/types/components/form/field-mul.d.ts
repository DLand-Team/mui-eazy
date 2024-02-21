import { UseFormReturn } from 'react-hook-form';
import { FieldConfig, FormConfig, FormConfigItem } from '../../hooks';
export type FieldMulProps = {
    name: string;
    childFieldConfig?: FormConfig | FormConfigItem;
    mulType?: 'one' | 'obj';
    placeholder?: string;
    addLabel?: string;
    itemFieldConfig?: FieldConfig;
    methods?: UseFormReturn;
};
export default function FieldMul(props: FieldMulProps): import("react/jsx-runtime").JSX.Element;
