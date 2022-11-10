import { useTranslation } from "next-i18next";

function Form({ handleInputChange, handleSubmit, formValues }) {
    const { t } = useTranslation('contact')
    const { name, email, message } = formValues

    return (
        <form
            className="form"
            onSubmit={handleSubmit}
        >
            <div className="form-group">
                <label className="form-group__label">{t('nameLabel')}</label>
                <input
                    placeholder={t('namePlaceholder')}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label className="form-group__label">{t('emailLabel')}</label>
                <input
                    placeholder={t('emailPlaceholder')}
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label className="form-group__label">{t('messageLabel')}</label>
                <textarea
                    className="form-group__textarea"
                    placeholder={t('messagePlaceholder')}
                    name="message"
                    value={message}
                    onChange={handleInputChange}
                    rows={4}
                />
            </div>

            <button 
                className="btn btn--dark"
                type='submit'    
            >
                {t('submitButton')}
            </button>
        </form>
    );
}

export default Form;