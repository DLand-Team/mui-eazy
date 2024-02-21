export default function CropModal({ open, name, src, validateFunc, onComplete, setOpen, }: {
    open: boolean;
    src: string;
    name: string;
    setOpen: (value: boolean) => void;
    onComplete: (file: File) => void;
    validateFunc?: (file: File) => [boolean, string];
}): import("react/jsx-runtime").JSX.Element;
