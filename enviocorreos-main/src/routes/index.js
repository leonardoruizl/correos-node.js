const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email. ${email}</li>
        </ul>
        <p>${message}</p>
    `;

    console.log(contentHTML);

    const transporter = nodemailer.createTransport({
        host: 'mail.fraferconsulting.com',
        port: 26,
        secure: false,
        logger: true,
        auth: {
            user: 'leonardo@fraferconsulting.com',
            pass: 'LoonardoMameyin.987'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    
    const info = await transporter.sendMail({
        from: "'El Mameyin' <leonardo@fraferconsulting.com>",
        // to: '',
        bcc: email,
        subject: 'Hola ' + name + ' soy Mameyin',
        html: '<a href="google.com">ir a google</a>'
    })

    console.log('Message sent', info.messageId);

    res.redirect('/success.html');
});

module.exports = router;