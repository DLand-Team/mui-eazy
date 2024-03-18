/// <reference types="react" />
import { TableCellProps } from '@mui/material';
export default function SuperTable<T = any>({ config, }: {
    config: ({
        name: string;
        label: string;
        width?: number | string;
        renderHeader?: () => React.ReactNode;
        render?: (props: {
            name: string;
            rowData: T;
        }) => React.ReactNode;
    } & Partial<TableCellProps>)[];
    data: T[];
}): import("react/jsx-runtime").JSX.Element;
