import { FormConfig } from '../../hooks/use-fields';
import { TreeItemProps } from '../tree/types';
export declare const setDefault: (fields: FormConfig, defaltValues: Record<string, any>) => void;
export declare const useCreateTreeData: ({ value, transfer, baseData, }: {
    value?: any;
    transfer: any;
    baseData: any;
}) => TreeItemProps;
export interface ActionBtn {
    name: any;
}
export declare function TreeForm({ handleClick, treeConfig, actionBtnArr, transferResult, transferInput, value, }: {
    value: any;
    actionBtnArr: ActionBtn[];
    handleClick: ({ type, isSuccess, result, }: {
        type: any;
        isSuccess: boolean;
        result: any;
    }) => void;
    treeConfig: TreeItemProps;
    transferResult: any;
    transferInput: any;
}): import("react/jsx-runtime").JSX.Element;
