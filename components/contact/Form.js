function Form({ handleInputChange, handleSubmit, formValues }) {
    const { name, email, message } = formValues

    return (
        <form
            className="form"
            onSubmit={handleSubmit}
        >
            <div className="form-group">
                <label className="form-group__label">¿Cómo te llamas?</label>
                <input
                    placeholder='Juan Perez'
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label className="form-group__label">¿Cuál es tu correo?</label>
                <input
                    placeholder='juan.p@email.com'
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label className="form-group__label">¿Qué me cuentas?</label>
                <textarea
                    className="form-group__textarea"
                    placeholder="Hola, ¿cómo estas?"
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
                Enviar
            </button>
        </form>
    );
}

export default Form;