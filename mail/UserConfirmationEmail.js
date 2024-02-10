const UserConfirmationEmail = (firstName, lastName, email, subject, message) => `
<div style="background-color: #ffffff; border-radius: 15px; box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1); padding: 30px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333;">
    <h2 style="font-size: 28px; font-weight: 700; color: #007bff; margin-bottom: 20px;">Your Message Has Been Sent</h2>
    <p style="font-size: 18px; color: #555; margin-bottom: 20px;">Hello ${firstName},</p>
    <p style="font-size: 18px; color: #555; margin-bottom: 20px;">Thank you for contacting us! Your message has been successfully sent with the following details:</p>
    <div style="margin-bottom: 20px;">
        <p style="font-size: 18px; font-weight: 600; color: #555; margin-bottom: 8px;">Name:</p>
        <p style="font-size: 16px; color: #777; margin-bottom: 10px;">${firstName} ${lastName}</p>
    </div>
    <div style="margin-bottom: 20px;">
        <p style="font-size: 18px; font-weight: 600; color: #555; margin-bottom: 8px;">Email:</p>
        <p style="font-size: 16px; color: #777; margin-bottom: 10px;">${email}</p>
    </div>
    <div style="margin-bottom: 20px;">
        <p style="font-size: 18px; font-weight: 600; color: #555; margin-bottom: 8px;">Subject:</p>
        <p style="font-size: 16px; color: #777; margin-bottom: 10px;">${subject}</p>
    </div>
    <div style="margin-bottom: 30px;">
        <p style="font-size: 18px; font-weight: 600; color: #555; margin-bottom: 8px;">Message:</p>
        <p style="font-size: 16px; color: #777; margin-bottom: 20px;">${message}</p>
    </div>
    <p style="font-size: 16px; color: #777; margin-bottom: 20px;">We will review your inquiry and get back to you as soon as possible.</p>
    <p style="font-size: 16px; color: #777; margin-bottom: 20px;">Best regards,</p>
    <p style="font-size: 16px; color: #007bff; font-weight: 600; margin-bottom: 0;">Rahul Verma</p>
</div>
`;

module.exports = UserConfirmationEmail;
