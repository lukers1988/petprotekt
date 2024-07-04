import { SetStateAction, Dispatch } from 'react';

interface textInputInterface {
    value: string;
    valueSetter: Dispatch<SetStateAction<string>>;
    label: string;
    type?: string;
}

const TextInput = ({ value, valueSetter, label, type }: textInputInterface) => {
    return (
        <div className="form-group">
            <label className="mb-2 ">
                <strong className="">{label}</strong>
            </label>
            <input
                type={type || 'text'}
                className="form-control"
                value={value}
                onChange={(e) => valueSetter(e.target.value)}
            />
        </div>
    );
};

export default TextInput;
