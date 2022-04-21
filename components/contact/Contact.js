import { useState } from 'react'
import styles from '../../styles/contact.module.css'
import { useForm } from '../../hooks/useForm'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'
import validator from 'validator';
import Form from './Form'
import Thanking from './Thanking'

export default function Contact() {
    const [hasSent,setHasSent] = useState(false)

    const [formValues, handleInputChange,reset] = useForm({
        name: '',
        email: '',
        message: '',
    })

    const { name, email, message } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isFormValid()) {
            const form_data = {
                from_name: name,
                to_name: "Seb Méndez",
                message: message,
                reply_to: email,
            }

            let sendingEmail = emailjs.send(
                process.env.EMAILJS_SERVICE_ID,
                process.env.EMAILJS_TEMPLATE_ID,
                form_data, process.env.EMAILJS_USER_ID
            )

            sendingEmail
                .then(()=>reset())
                .then(()=>setHasSent(true))

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
        }else{
            toast.error('Nope, tienes que llenar todos los campos',{
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
        <section id="contact" className={styles.container}>
            <h2 className={styles.title}>Ponte en contacto conmigo</h2>
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
        </section>
    )
}