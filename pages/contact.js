import { useState } from "react";
import { toast } from "react-toastify";
import Form from "../components/contact/Form";
import Thanking from "../components/contact/Thanking";
import Layout from "../components/Layout";
import { useForm } from "../hooks/useForm";
import sendEmail from "../utils/sendEmail";

function ContactPage() {
    const [hasSent, setHasSent] = useState(false)

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
            pageTitle="Contacto"
            description="Ponte en contacto con Seb Méndez"
        >
            <div className="contact-body">
                <h1 className="contact__title">Ponte en contacto conmigo</h1>

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

export default ContactPage;