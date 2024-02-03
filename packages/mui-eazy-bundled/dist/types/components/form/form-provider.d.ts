/// <reference types="react" />
import { UseFormReturn } from 'react-hook-form';
type Props = {
    children: React.ReactNode;
    formRef: UseFormReturn<any>;
    onSubmit?: VoidFunction;
};
export default function FormProvider({ children, onSubmit, formRef }: Props): import("react/jsx-runtime").JSX.Element;
export {};
