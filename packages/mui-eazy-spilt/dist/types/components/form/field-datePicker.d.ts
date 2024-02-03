/// <reference types="react" />
import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import myDay from 'src/utils/myDay';
export type FieldDatePickerProps = DatePickerProps<myDay.Dayjs> & {
    name: string;
    helperText?: React.ReactNode;
};
export default function FieldDatePicker({ name, helperText, ...other }: FieldDatePickerProps): import("react/jsx-runtime").JSX.Element;
