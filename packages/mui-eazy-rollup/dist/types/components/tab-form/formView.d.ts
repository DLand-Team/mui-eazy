import { FromRefType } from './types';
import { FormConfig } from '../../hooks';
export declare const FormView: ({ formConfig, formRef, id, }: {
    id: string;
    formRef: React.MutableRefObject<Record<PropertyKey, FromRefType>>;
    formConfig: FormConfig;
}) => import("react/jsx-runtime").JSX.Element;
