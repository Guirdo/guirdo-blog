import { useTranslation } from "next-i18next";

function Thanking() {
    const {t} = useTranslation('contact')
    return (
        <div className="form">
            <h3>{t('thanking1')}</h3>
            <p>{t('thanking2')}</p>
        </div>
    );
}

export default Thanking;