import 'cropperjs/dist/cropper.min.css';
import React from 'react';
export declare const Demo: ({ name, src, callRef, onComplete, validateFunc, }: {
    callRef: React.MutableRefObject<any>;
    src: string;
    name: string;
    onComplete: (file: File) => void;
    validateFunc?: ((file: File) => [boolean, string]) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default Demo;
