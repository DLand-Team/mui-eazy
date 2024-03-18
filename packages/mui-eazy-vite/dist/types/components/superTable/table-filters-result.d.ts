import { StackProps } from '@mui/material/Stack';
type Props = StackProps & {
    filters: any;
    onFilters: (name: string, value: any) => void;
    onResetFilters: VoidFunction;
    results: number;
};
export default function OrderTableFiltersResult({ filters, onFilters, onResetFilters, results, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
