type Props = {
    filters: any;
    onFilters: (name: string, value: any) => void;
    canReset: boolean;
    onResetFilters: VoidFunction;
};
export default function OrderTableToolbar({ filters, onFilters, canReset, onResetFilters, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
