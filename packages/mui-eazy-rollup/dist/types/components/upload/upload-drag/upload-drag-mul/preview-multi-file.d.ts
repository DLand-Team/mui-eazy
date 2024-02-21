import { Theme } from '@mui/material';
import { SxProps } from '@mui/material/styles';
import { CustomFile } from '../../types';
export declare const ItemTypes: {
    CARD: string;
};
export default function MultiFilePreview({ fileNameList, onRemove, sx, moveCard, files, }: {
    fileNameList: string[];
    files?: File[];
    sx?: SxProps<Theme>;
    onRemove?: (fileName: CustomFile | string, fileIndex?: number) => void;
    moveCard?: (dragIndex: number, hoverIndex: number) => void;
}): import("react/jsx-runtime").JSX.Element;
