/// <reference types="react" />
import { Theme, SxProps } from '@mui/material/styles';
import { TablePaginationProps } from '@mui/material/TablePagination';
type Props = {
    dense?: boolean;
    onChangeDense?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    sx?: SxProps<Theme>;
};
export default function TablePaginationCustom({ dense, onChangeDense, rowsPerPageOptions, sx, ...other }: Props & TablePaginationProps): import("react/jsx-runtime").JSX.Element;
export {};
