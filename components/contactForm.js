import utils from '../styles/utils/form.module.css'
import { useForm } from '../hooks/useForm'

export default function ContactForm() {

    const [formValues,handleInputChange] = useForm({
        name:'',
        email:'',
        message: '',
    })

    const { name,email,message } = formValues

    return (
        <form
            className={utils.form}
            onSubmit={(e) => e.preventDefault()}
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
        </form>
    )
}