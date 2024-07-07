import { SetStateAction, Dispatch } from 'react';

interface textInputInterface {
    value: string;
    valueSetter: Dispatch<SetStateAction<string>>;
    label: string;
    type?: string;
    error?: string;
    onBlur?: () => void;
    InputWidget?: JSX.Element;
}

const TextInput = ({
    value,
    valueSetter,
    label,
    type,
    error,
    onBlur,
    InputWidget
}: textInputInterface) => {
    return (
        <div className="form-group">
            <label
                className="mb-2 flex directio-row gap-3"
                style={{
                    alignItems: 'center'
                }}
            >
                <strong className="">{label}</strong>
                {InputWidget && InputWidget}
            </label>
            <input
                onBlur={onBlur ? onBlur : () => {}}
                type={type || 'text'}
                className="form-control"
                value={value}
                onChange={(e) => valueSetter(e.target.value)}
            />
            <div
                className="text-danger fs-12"
                style={{
                    height: 5
                }}
            >
                {error}
            </div>
        </div>
    );
};

export default TextInput;
