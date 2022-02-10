module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net']
  },
  env: {
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
  }
}
