import utils from '../styles/utils/form.module.css'
import { useForm } from '../hooks/useForm'
import { toast } from 'react-toastify'

export default function ContactForm() {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        message: '',
    })

    const { name, email, message } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()

        toast.error("It doesn't work yet! Sorry!", {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
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
    )
}