import { Theme, SxProps } from '@mui/material/styles';
type Props = {
    order?: 'asc' | 'desc';
    orderBy?: string;
    headLabel: any[];
    rowCount?: number;
    numSelected?: number;
    onSort?: (id: string) => void;
    onSelectAllRows?: (checked: boolean) => void;
    sx?: SxProps<Theme>;
};
export default function TableHeadCustom({ order, orderBy, rowCount, headLabel, numSelected, onSort, onSelectAllRows, sx, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
