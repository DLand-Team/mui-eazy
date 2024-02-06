import { EditorProps } from '../editor';
export interface FieldEditorProps extends EditorProps {
    name: string;
}
export default function FieldEditor({ name, helperText, id, ...other }: FieldEditorProps): import("react/jsx-runtime").JSX.Element;
