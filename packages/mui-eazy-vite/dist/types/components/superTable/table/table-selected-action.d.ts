/// <reference types="react" />
import { StackProps } from '@mui/material/Stack';
interface Props extends StackProps {
    dense?: boolean;
    action?: React.ReactNode;
    rowCount: number;
    numSelected: number;
    onSelectAllRows: (checked: boolean) => void;
}
export default function TableSelectedAction({ dense, action, rowCount, numSelected, onSelectAllRows, sx, ...other }: Props): import("react/jsx-runtime").JSX.Element | null;
export {};
