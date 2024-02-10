const AdminEmail = (firstName, lastName, email, subject, message) => `
<div style="background-color: #f5f5f5; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); padding: 30px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333;">
    <h2 style="font-size: 26px; font-weight: 700; color: #007bff; margin-bottom: 20px;">New Inquiry Received</h2>
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
    <div style="margin-bottom: 20px;">
        <p style="font-size: 18px; font-weight: 600; color: #555; margin-bottom: 8px;">Message:</p>
        <p style="font-size: 16px; background: #ffffbb; color: #777; margin-bottom: 20px;">${message}</p>
    </div>
    <p style="font-size: 16px; color: #777; margin-bottom: 30px;">Please respond to this inquiry as soon as possible.</p>
    <p style="font-size: 16px; color: #777;">Best regards,</p>
    <p style="font-size: 16px; color: #007bff; font-weight: 600; margin-bottom: 0;">${firstName}</p>
</div>
`;

module.exports = AdminEmail;
