import { SetStateAction, Dispatch } from 'react';

interface textInputInterface {
    value: string;
    valueSetter: Dispatch<SetStateAction<string>>;
    label: string;
    type?: string;
    error?: string;
    onBlur?: (e: HTMLInputElement['value']) => void;
    onChangeEffect?: (e: HTMLInputElement['value']) => void;
    InputWidget?: JSX.Element;
}

const TextInput = ({
    value,
    valueSetter,
    label,
    type,
    error,
    onBlur,
    InputWidget,
    onChangeEffect
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
                onBlur={(e) => {
                    onBlur ? onBlur(e.target.value) : () => {};
                }}
                type={type || 'text'}
                className="form-control"
                value={value}
                onChange={(e) => {
                    if (onChangeEffect) {
                        onChangeEffect(e.target.value);
                    }

                    valueSetter(e.target.value);
                }}
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
