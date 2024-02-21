/// <reference types="react" />
import { SliderProps } from '@mui/material/Slider';
type Props = SliderProps & {
    name: string;
    helperText?: React.ReactNode;
};
export default function FieldSlider({ name, helperText, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
