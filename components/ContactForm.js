import utils from '../styles/utils/form.module.css'
import styles from '../styles/contact.module.css'
import { useForm } from '../hooks/useForm'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'
import validator from 'validator';

export default function ContactForm() {
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

            sendingEmail.then(()=>reset())

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
        <div className={styles.container}>
            <h2 className={styles.title}>¿Quieres que hablemos?</h2>
            <form
                className={utils.form}
                onSubmit={handleSubmit}
            >
                <div className={utils.formGroup}>
                    <label>¿Cómo te llamas?</label>
                    <input
                        placeholder='Juan Perez'
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={utils.formGroup}>
                    <label>¿Cuál es tu correo?</label>
                    <input
                        placeholder='juan.p@email.com'
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={utils.formGroup}>
                    <label>¿Qué me cuentas?</label>
                    <textarea
                        placeholder="Hola, ¿cómo estas?"
                        name="message"
                        value={message}
                        onChange={handleInputChange}
                        rows={4}
                    />
                </div>

                <button type='submit'>
                    Enviar
                </button>
            </form>
        </div>
    )
}