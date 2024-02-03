import { Theme, SxProps } from '@mui/material/styles';
import { IconifyProps } from '../iconify';
type Props = {
    index: number;
    total: number;
    icon?: IconifyProps;
    onNext?: VoidFunction;
    onPrev?: VoidFunction;
    sx?: SxProps<Theme>;
};
export default function CarouselArrowIndex({ index, total, onNext, onPrev, icon, sx, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
