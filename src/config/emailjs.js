// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const emailjsConfig = {
  serviceId: 'service_ph1ejg1', // Your EmailJS service ID
  templateId: 'template_lxmiggp', // Your EmailJS template ID
  publicKey: '1zq1SPeuL5ZgDvMs0', // Your EmailJS public key
};

// Email template variables that will be available in your EmailJS template
export const emailTemplateVariables = {
  from_name: '', // Sender's name
  from_email: '', // Sender's email
  message: '', // Message content
  to_email: '', // Your email address (recipient)
  reply_to: '', // Reply-to email (same as sender's email)
}; 