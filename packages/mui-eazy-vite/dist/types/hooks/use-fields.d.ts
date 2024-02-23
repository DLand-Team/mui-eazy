import { SxProps } from '@mui/material';
import { Mode, UseFormReturn } from 'react-hook-form';
import { FormConfigItem } from './use-get-field';
export type FormConfig = {
    [key: string]: FormConfigItem;
};
export declare function useFields(fromCg: FormConfig, options?: {
    mode?: Mode;
    onSubmit?: (props?: {
        isRight: boolean;
        values: any;
        formRef: UseFormReturn<{
            [key: string]: any;
        }, any, any>;
    }) => void;
    formPrefix?: string;
    formId?: string;
    sx?: SxProps;
}): {
    formNode: import("react/jsx-runtime").JSX.Element;
    methods: UseFormReturn<{
        [x: string]: any;
        [x: number]: any;
        [x: symbol]: any;
    }, any, {
        [x: string]: any;
        [x: number]: any;
        [x: symbol]: any;
    }>;
};
