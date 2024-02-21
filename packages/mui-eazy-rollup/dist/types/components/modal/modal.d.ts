import * as React from "react";
import { UseBooleanReturnType } from "../../hooks/use-boolean";
interface ModalProps {
    openFlag: UseBooleanReturnType;
    title?: string;
    content?: () => React.JSX.Element;
    actionConfig?: {
        label: string;
        handleClick?: () => void;
        render?: () => React.JSX.Element;
    }[];
    handleClose?: () => void;
}
export declare function Modal({ openFlag, content, actionConfig, title, handleClose, }: ModalProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Modal {
    var confirm: (props: ModalProps) => void;
}
export {};
