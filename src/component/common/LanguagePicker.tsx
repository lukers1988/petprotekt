import { DropdownButton } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import languages from '@appConst/languages';
import DropdownItemMobile from '@appComponents/styled/DropdownItemMobile';

const LanguagePicker = () => {
    const { t, i18n } = useTranslation();
    const chosenLanguage = languages.find((language) => language.id === i18n.language)!;
    console.log('LANGUAGE DETECTION: ', i18n.language);

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
                    <DropdownItemMobile
                        $breakpoint={430}
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
                    </DropdownItemMobile>
                );
            })}
        </DropdownButton>
    );
};

export default LanguagePicker;
