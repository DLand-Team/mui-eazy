import Captions from 'yet-another-react-lightbox/plugins/captions';
import { LightBoxProps } from './types';
export default function Lightbox({ slides, disabledZoom, disabledVideo, disabledTotal, disabledCaptions, disabledSlideshow, disabledThumbnails, disabledFullscreen, onGetCurrentIndex, ...other }: LightBoxProps): import("react/jsx-runtime").JSX.Element;
export declare function getPlugins({ disabledZoom, disabledVideo, disabledCaptions, disabledSlideshow, disabledThumbnails, disabledFullscreen, }: LightBoxProps): (typeof Captions)[];
type DisplayTotalProps = {
    totalItems: number;
    disabledTotal?: boolean;
};
export declare function DisplayTotal({ totalItems, disabledTotal }: DisplayTotalProps): import("react/jsx-runtime").JSX.Element | null;
export {};
