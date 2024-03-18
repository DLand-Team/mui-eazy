import { TableProps } from './types';
type ReturnType = TableProps;
export type UseTableProps = {
    defaultDense?: boolean;
    defaultOrder?: 'asc' | 'desc';
    defaultOrderBy?: string;
    defaultSelected?: string[];
    defaultRowsPerPage?: number;
    defaultCurrentPage?: number;
};
export default function useTable(props?: UseTableProps): ReturnType;
export {};
