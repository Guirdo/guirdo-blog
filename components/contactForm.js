import utils from '../styles/utils/form.module.css'

export default function ContactForm() {
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
                />
            </div>
        </form>
    )
}