import React from 'react';
import { FormConfig } from '../../index';
declare const TabForm: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    tabId: string;
    tabConfig: {
        id: string;
        label: string;
        node: FormConfig;
    }[];
    handleTabChange: (tabId: string) => void;
} & React.RefAttributes<unknown>>>;
export default TabForm;
