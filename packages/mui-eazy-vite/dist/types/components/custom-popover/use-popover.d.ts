/// <reference types="react" />
type ReturnType = {
    onClose: VoidFunction;
    open: HTMLElement | null;
    onOpen: (event: React.MouseEvent<HTMLElement>) => void;
    setOpen: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};
export default function usePopover(): ReturnType;
export {};
