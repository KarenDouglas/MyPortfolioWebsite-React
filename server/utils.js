const nodemailer = require('nodemailer')
// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, 
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
  })

const setEmailOptions = (userEmail,subject, htmlMessage,from) =>{
    let mailOptions = {
        from: `${from} <${process.env.SMTP_USER}>`, 
        to: userEmail,
        subject: subject,
        html: htmlMessage,
        headers: {
            'X-Priority': '1', 
            'X-MSMail-Priority': 'High', 
            'Importance': 'High' 
        } 
    }
    return mailOptions;

}

const sendEmailConfirmation = (userName, userEmail) => {
    let subject = 'Thanks for reaching out'
    let htmlMessage = `
<html lang="en">
    <head>
        <style>
        p{
            max-width: 800px
        }
        </style>
    </head>
    <body>
        <h2>Thank you, ${userName}, for reaching out!</h2>
        <p>Thank you for taking the time to visit <a href="https://karenthedeveloper.com/">KarenTheDevelper.com</a>. I'm thrilled to learn about your interest in potentially collaborating together</p>
        <p>As a detail-oriented web developer with a comprehensive understanding of both frontend and backend technologies, I am passionate about crafting user-friendly sites. Continuously learning design principles, data structures, and algorithms. I am a collaborative team player with strong independent work skills, and I'm eager to leverage my skills to help you achieve your goals.</p>
        <h2>Checkout My Social Media!</h2>
        <div>
            <a href="https://www.linkedin.com/in/karen-douglas-344974246/">LinkedIn: @KarenDouglas</a>
        </div>
        <div>
            <a href="https://github.com/KarenDouglas">Github: @KarenDougls</a>
        </div>
        <p>Thank you once again for considering me for your project. I look forward to the opportunity to collaborate with you and contribute to your success.</p>
        <p>Best Regards</p>
        <h3>Karen</h3>
        <h4>Software Developer</h4>
        <p>512-785-9254</p>
        <div>
            <a href="https://karenthedeveloper.com/">KarenTheDeveloper.com</a>
        </div>

    </body>
</html>
    `
    const emailConfirmOptions = setEmailOptions(
        userEmail,
        subject,
        htmlMessage,
        from = 'Karen Douglas'
    )
        
    // Send mail with defined transport object
    transporter.sendMail(emailConfirmOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
}

const sendEmailMessage = (name, email, message) =>{
  const htmlMessage = `
<html lang="en">
    <head>
    </head>
    <body>
    <h2>Wassup Karen, you got a message for some money</h2>

    <ul>
        <li>NAME : ${name} </li>
        <li>EMAIL : ${email}</li>
        <li>MESSAGE : ${message}</li>
    </ul>
    <div>
        <a href="https://karenthedeveloper.com/">KarenTheDeveloper.com</a>
    </div>
    </body>
</html>
  `
  const emailConfirmOptions =  setEmailOptions(
    process.env.SMTP_USER,
    subject = "Yo, You Got Mail", 
    htmlMessage,"Email Assistant"
)

  transporter.sendMail(emailConfirmOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});
}

module.exports = {sendEmailConfirmation, sendEmailMessage}