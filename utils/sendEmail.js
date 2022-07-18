import emailjs from '@emailjs/browser'

const sendEmail = (from_name, message,where_from, reply_to) => {
    const form_data = {
        from_name,
        message,
        where_from,
        reply_to,
    }

    let sendingEmail = emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        form_data, process.env.EMAILJS_USER_ID
    )

    return sendingEmail
}

export default sendEmail