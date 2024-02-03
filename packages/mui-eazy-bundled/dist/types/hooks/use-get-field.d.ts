import { UseFormReturn, WatchObserver } from 'react-hook-form';
import React from 'react';
import { FieldCheckboxProps, FieldMultiSelectProps, FieldSelectProps, FieldUploadProps } from '../components/form';
import { FieldDatePickerProps } from '../components/form/field-datePicker';
import { FieldEditorProps } from '../components/form/field-editor';
import { FieldMulProps } from '../components/form/field-mul';
import { FieldRadioGroupProps } from '../components/form/field-radio-group';
import { FieldTextProps } from '../components/form/field-text-field';
import { InputType } from '../utils/get-field';
export type FieldConfig = Partial<FieldTextProps> & Partial<FieldSelectProps> & Partial<FieldUploadProps> & Partial<FieldDatePickerProps> & Partial<FieldCheckboxProps> & Partial<FieldEditorProps> & Partial<FieldMultiSelectProps> & Partial<FieldMulProps> & Partial<FieldRadioGroupProps>;
export interface FormConfigItem {
    id?: string;
    prefix?: string | string[];
    customForm?: () => React.ReactNode;
    type?: InputType | 'custom';
    schema?: any;
    defaultValue?: unknown;
    name?: string;
    label?: string;
    labelMap?: {
        [key: string]: string;
    };
    group?: string;
    isHidden?: boolean;
    wrapper?: (props: {
        children?: React.ReactNode;
    }) => React.ReactNode;
    fieldConfig?: FieldConfig;
    config?: {
        options?: string[] | {
            key: string | number;
            value: string | number;
            label: string | number;
            info?: string;
        }[];
    };
    watch?: (props: {
        currentConfig: Omit<FormConfigItem, 'watch'>;
        values: Parameters<WatchObserver<any>>[0];
        info: Parameters<WatchObserver<any>>[1];
        api: UseFormReturn<any>;
    }) => void;
    isNotInForm?: boolean;
}
export declare const useGetField: (methods?: UseFormReturn | null) => (keyBase: string, item: FormConfigItem) => import("react/jsx-runtime").JSX.Element | undefined;
