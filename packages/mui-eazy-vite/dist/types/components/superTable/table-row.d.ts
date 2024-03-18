type Props = {
    config: any;
    row: any;
    selected: boolean;
    onViewRow: VoidFunction;
    onSelectRow: VoidFunction;
    onDeleteRow: VoidFunction;
};
export default function OrderTableRow({ row, selected, onViewRow, onSelectRow, onDeleteRow, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
