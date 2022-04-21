import utils from '../../styles/utils/form.module.css'

function Form({ handleInputChange, handleSubmit, formValues }) {
    const { name, email, message } = formValues

    return (
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
    );
}

export default Form;