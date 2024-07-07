import { blank, danger, warning, success } from '@appConst/colors';

interface PasswordQualityIndicatorInterface {
    indicator: number | undefined;
}

const PasswordQualityIndicator = ({ indicator }: PasswordQualityIndicatorInterface) => {
    const indicators = [
        { id: 'weak', level: 1 },
        { id: 'avarage', level: 2 },
        { id: 'good', level: 3 }
    ];

    const getColor = (indicator: number | undefined) => {
        switch (indicator) {
            case 1:
                return danger;
            case 2:
                return warning;
            case 3:
                return success;
            default:
                return blank;
        }
    };

    return (
        <div className="flex direction-row gap-2">
            {indicators.map((element) => {
                const { id, level } = element;

                return (
                    <div
                        key={id}
                        style={{
                            backgroundColor:
                                indicator && indicator >= level ? getColor(indicator) : blank,
                            width: 30,
                            height: 5
                        }}
                    ></div>
                );
            })}
        </div>
    );
};

export default PasswordQualityIndicator;
