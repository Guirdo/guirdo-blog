import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { toast } from 'react-toastify'
import validator from 'validator'
import Form from './Form'
import Thanking from './Thanking'
import sendEmail from '../../utils/sendEmail'

export default function Contact() {


    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-section__title">Ponte en contacto conmigo</h2>
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