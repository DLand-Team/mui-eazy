import { BoxProps } from '@mui/material/Box';
import { Theme, SxProps } from '@mui/material/styles';
export interface Props extends BoxProps {
    rounded?: boolean;
    sx?: SxProps<Theme>;
}
export default function CarouselDots(props?: Props): {
    appendDots: (dots: React.ReactNode) => import("react/jsx-runtime").JSX.Element;
    customPaging: () => import("react/jsx-runtime").JSX.Element;
};
