import { FieldInputProps } from 'formik';

interface textInputInterface {
  formikProps: FieldInputProps<any>;
  id: string;
  label: string;
  type?: string;
  error?: string;
  InputWidget?: JSX.Element;
}

const TextInput = ({ formikProps, id, label, type, error, InputWidget }: textInputInterface) => {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="form-group">
      <label
        className="flex gap-3 mb-2 directio-row"
        style={{
          alignItems: 'center'
        }}
      >
        <strong className="">{label}</strong>
        {InputWidget && InputWidget}
      </label>
      <input
        {...formikProps}
        id={id}
        name={id}
        type={type || 'text'}
        className="form-control"
        max={today}
      />
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

export default TextInput;
