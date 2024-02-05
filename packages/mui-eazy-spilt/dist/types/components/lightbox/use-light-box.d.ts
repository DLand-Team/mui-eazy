/// <reference types="react" />
import { Slide } from 'yet-another-react-lightbox';
type ReturnType = {
    open: boolean;
    selected: number;
    onClose: VoidFunction;
    onOpen: (slideUrl: string) => void;
    setSelected: React.Dispatch<React.SetStateAction<number>>;
};
export default function useLightBox(slides: Slide[]): ReturnType;
export {};
