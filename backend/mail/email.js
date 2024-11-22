import { mailtrapClient, sender } from "./mailtrap.config.js";
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }] 

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: 'Verify your email',
            html: VERIFICATION_EMAIL_TEMPLATE.replace('{verificationCode}', verificationToken),
            category: "Email Verification",
        })

        console.log("Email sent: ", response)
    } catch (error) {
        console.error("Failed to send email: ", error)
        throw new Error(`Failed to send email: ${error}`)
    }
};

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }]

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "56271095-197c-4b7d-8cc4-3f3c9e2c4905",
            template_variables: {
            "company_info_name": "My Auth",
            "name": name,
            }
        })

        console.log("Welcome email sent: ", response)
    } catch (error) {
        console.error("Failed to send email: ", error)
        throw new Error(`Failed to send email: ${error}`)
    }
}

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{ email }]

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: 'Reset your password',
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace('{resetURL}', resetURL),
            category: "Password Reset",
        })
    } catch (error) {
        console.log("Failed to send email: ", error);
        throw new Error(`Failed to send email: ${error}`);
    }
}

export const sendResetSuccessEmail = async (email) => {
    const recipient = [{ email }]
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: 'Password reset successful',
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset",
        })

        console.log("Reset success email sent: ", response);
    } catch (error) {
        console.log("Failed to send email: ", error);
        throw new Error(`Failed to send email: ${error}`);
    }
}