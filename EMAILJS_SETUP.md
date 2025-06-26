# 📧 EmailJS Setup Guide

Your contact form is now configured to send real emails using EmailJS! Follow these steps to complete the setup:

## 🚀 Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## ⚙️ Step 2: Create Email Service

1. **Add Email Service:**
   - Go to EmailJS Dashboard
   - Click "Add New Service"
   - Choose "Gmail" (or your preferred email provider)
   - Connect your email account
   - Note down the **Service ID** (e.g., `service_abc123`)

## 📝 Step 3: Create Email Template

1. **Create Template:**
   - Go to "Email Templates" in EmailJS Dashboard
   - Click "Create New Template"
   - Use this template content:

```html
Subject: New Contact Form Message from {{from_name}}

Hello,

You have received a new message from your portfolio contact form:

**Name:** {{from_name}}
**Email:** {{from_email}}
**Message:**

{{message}}

---
This message was sent from your portfolio website.
Reply directly to this email to respond to {{from_name}}.
```

2. **Save the template** and note down the **Template ID** (e.g., `template_xyz789`)

## 🔑 Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in EmailJS Dashboard
2. Copy your **Public Key** (e.g., `user_def456`)

## ⚡ Step 5: Update Configuration

1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual credentials:

```javascript
export const emailjsConfig = {
  serviceId: 'service_abc123', // Your actual Service ID
  templateId: 'template_xyz789', // Your actual Template ID
  publicKey: 'user_def456', // Your actual Public Key
};
```

## 🎯 Step 6: Test Your Form

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out the form and submit
4. Check your email inbox for the message!

## 🔧 Troubleshooting

### Common Issues:

1. **"Failed to send message" error:**
   - Check if all EmailJS credentials are correct
   - Verify your email service is connected
   - Check browser console for detailed error messages

2. **Emails not received:**
   - Check spam/junk folder
   - Verify your email service connection in EmailJS
   - Test with a different email address

3. **Template variables not working:**
   - Make sure template variables match exactly: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Check for typos in variable names

## 📊 EmailJS Free Tier Limits

- **200 emails per month** (free tier)
- **2 email templates**
- **1 email service**

## 🔒 Security Notes

- Your public key is safe to use in frontend code
- EmailJS handles email sending securely
- No backend server required

## 🎉 You're All Set!

Your contact form will now send real emails directly to your inbox. Visitors can fill out the form and you'll receive their messages instantly!

---

**Need help?** Check the [EmailJS Documentation](https://www.emailjs.com/docs/) or contact EmailJS support. 