import { FieldCheckbox } from '../components/form/field-checkbox.js';
import FieldDatePicker from '../components/form/field-datePicker.js';
import FieldText from '../components/form/field-text-field.js';
import FieldMul from '../components/form/field-mul.js';
import { FieldUpload, FieldUploadBox } from '../components/form/field-upload.js';
import FieldRadioGroup from '../components/form/field-radio-group.js';
import { FieldSelect, FieldMultiSelect } from '../components/form/field-select.js';
import FieldEditor from '../components/form/field-editor.js';
import FieldAutocompleteGoogle from '../components/form/field-autocompleteGoogle.js';

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
  multiSelect: FieldMultiSelect
};
const getField = type => {
  return FormMapObj[type];
};

export { getField };
