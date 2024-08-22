import { FieldInputProps } from 'formik';

interface DropdownInputInterface {
  formikProps: FieldInputProps<any>;
  id: string;
  label: string;
  options: { label: string; id: string; disabled?: boolean }[];
  error?: string;
  InputWidget?: JSX.Element;
}

const DropdownInput = ({
  formikProps,
  id,
  label,
  options,
  error,
  InputWidget
}: DropdownInputInterface) => {
  return (
    <div className="form-group">
      <label
        className="flex gap-3 mb-2 direction-row"
        style={{
          alignItems: 'center'
        }}
      >
        <strong>{label}</strong>
        {InputWidget && InputWidget}
      </label>
      <select {...formikProps} id={id} name={id} className="form-control">
        {options.map((option) => (
          <option disabled={option.disabled} key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      <div
        className="text-danger fs-12"
        style={{
          height: 5,
          marginBottom: 30
        }}
      >
        {error}
      </div>
    </div>
  );
};

export default DropdownInput;
