import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormConfig } from '../../index';
export type FormRefType = UseFormReturn<{
    [key: string]: any;
}, any, any>;
export interface TabFormRef {
    validate: (formArr: FormRefType[]) => Promise<boolean>;
    getTabFormRef: () => Record<PropertyKey, FormRefType>;
}
export declare const TabForm: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    tabId: string;
    tabConfig: {
        id: string;
        label: string;
        node: FormConfig;
    }[];
    handleTabChange: (tabId: string) => void;
} & React.RefAttributes<unknown>>>;
