import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { toast } from "react-toastify";
import Form from "../components/contact/Form";
import Thanking from "../components/contact/Thanking";
import Layout from "../components/Layout";
import { useForm } from "../hooks/useForm";
import sendEmail from "../utils/sendEmail";

function ContactPage() {
    const [hasSent, setHasSent] = useState(false)
    const { t } = useTranslation('contact')

    const [formValues, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        message: '',
    })

    const { name, email, message } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isFormValid()) {
            let sendingEmail = sendEmail(name, message, 'Contact form', email)

            sendingEmail
                .then(() => reset())
                .then(() => setHasSent(true))

            toast.promise(sendingEmail, {
                pending: 'Espera un momento...',
                success: '¡Enviado! :)',
                error: 'No ha funcionado :(',
            }, {
                position: "bottom-left",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })
        } else {
            toast.error('Nope, tienes que llenar todos los campos', {
                position: "bottom-left",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })
        }

    }

    const isFormValid = () => {
        if (validator.isEmpty(name)) {
            return false
        } else if (!validator.isEmail(email)) {
            return false
        } else if (validator.isEmpty(message)) {
            return false
        }

        return true
    }

    return (
        <Layout
            pageTitle={t('pageTitle')}
            description={t('pageDescription')}
        >
            <div className="contact-body">
                <h1 className="contact__title">{t('contactTitle')}</h1>

                {
                    hasSent ?
                        <Thanking />
                        :
                        <Form
                            handleInputChange={handleInputChange}
                            handleSubmit={handleSubmit}
                            formValues={formValues}
                        />
                }
            </div>
        </Layout>
    );
}

export const getStaticProps = async ({locale}) => {
    const i18nConf = await serverSideTranslations(locale, ['contact','navbar','footer'])

    return {
        props:{
            ...i18nConf
        }
    }
}

export default ContactPage;