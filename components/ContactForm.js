import utils from '../styles/utils/form.module.css'
import styles from '../styles/contact.module.css'
import { useForm } from '../hooks/useForm'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

export default function ContactForm() {
    const [formValues, handleInputChange] = useForm({
        name: 'Athala',
        email: 'athala@email.com',
        message: 'Hola mundo!',
    })

    const { name, email, message } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()

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

    }

    return (
        <div className={styles.container}>
            <form
                className={utils.form}
                onSubmit={handleSubmit}
            >
                <div className={utils.formGroup}>
                    <label>What's your name?</label>
                    <input
                        placeholder='Name'
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={utils.formGroup}>
                    <label>What's your email address?</label>
                    <input
                        placeholder='Email'
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={utils.formGroup}>
                    <label>What are you thinking of?</label>
                    <textarea
                        placeholder="Let's talk"
                        name="message"
                        value={message}
                        onChange={handleInputChange}
                    />
                </div>

                <button>
                    Send
                </button>
            </form>
        </div>
    )
}