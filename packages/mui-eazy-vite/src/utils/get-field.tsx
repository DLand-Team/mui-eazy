import { FieldCheckbox } from '../components/form/field-checkbox';
import FieldDatePicker from '../components/form/field-datePicker';
import FieldText from '../components/form/field-text-field';
import FieldMul from '../components/form/field-mul';
import { FieldUpload, FieldUploadBox } from '../components/form/field-upload';
import FieldRadioGroup from '../components/form/field-radio-group';
import { FieldMultiSelect, FieldSelect } from '../components/form/field-select';
import FieldEditor from '../components/form/field-editor';
import FieldAutocompleteGoogle from '../components/form/field-autocompleteGoogle';

const FormMapObj = {
  radio: FieldRadioGroup,
  select: FieldSelect,
  editer: FieldEditor,
  autoCompleteGoogle: FieldAutocompleteGoogle,
  checkbox: FieldCheckbox,
  datePicker: FieldDatePicker,
  string: FieldText,
  multiple: FieldMul,
  upload: FieldUpload,
  uploadBox: FieldUploadBox,
  multiSelect: FieldMultiSelect,
};

export type InputType = keyof typeof FormMapObj;

export const getField = <T extends InputType>(type: T) => {
  return FormMapObj[type];
};
