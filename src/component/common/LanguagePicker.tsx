import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import languages from '@appConst/languages';

const LanguagePicker = () => {
    const { t, i18n } = useTranslation();
    const chosenLanguage = languages.find((language) => language.id === i18n.language)!;

    return (
        <DropdownButton
                title={
                    <img
                        style={{
                            height: 20,
                            width: 40
                        }}
                        src={chosenLanguage.flag}
                    />
                }
                size="sm"
            >
                {languages.map((language) => {
                    return (
                        <Dropdown.Item
                            onClick={() => {
                                i18n.changeLanguage(language.id);
                            }}
                        >
                            <img
                                style={{
                                    height: 20,
                                    width: 40,
                                    marginRight: 10
                                }}
                                src={language.flag}
                            />
                            {t(`languages:${language.id}`)}
                        </Dropdown.Item>
                    );
                })}
            </DropdownButton>
    );
};

export default LanguagePicker;
