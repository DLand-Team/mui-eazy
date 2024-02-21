import { TreeItemProps, TreeProps } from './types';
export declare const processRecordLoop: (data: TreeItemProps, id: string, record: {
    [key: string]: TreeItemProps;
}) => void;
export declare const Tree: (props: TreeProps) => import("react/jsx-runtime").JSX.Element;
