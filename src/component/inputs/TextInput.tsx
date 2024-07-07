import { SetStateAction, Dispatch } from 'react';

interface textInputInterface {
    value: string;
    valueSetter: Dispatch<SetStateAction<string>>;
    label: string;
    type?: string;
    error?: string;
    onBlur?: () => void;
}

const TextInput = ({ value, valueSetter, label, type, error, onBlur }: textInputInterface) => {
    return (
        <div className="form-group">
            <label className="mb-2 ">
                <strong className="">{label}</strong>
            </label>
            <input
                onBlur={onBlur ? onBlur : () => {}}
                type={type || 'text'}
                className="form-control"
                value={value}
                onChange={(e) => valueSetter(e.target.value)}
            />
            {error && <div className="text-danger fs-12">{error}</div>}
        </div>
    );
};

export default TextInput;
