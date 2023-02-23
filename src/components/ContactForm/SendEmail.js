const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_email_password'
  }
});

// function to send email
function sendMail(formData) {
  // setup email data with form data
  let mailOptions = {
    from: 'your_email@gmail.com',
    to: 'your_desired_email_address@example.com',
    subject: 'New message from your website',
    html: `<p><b>Name:</b> ${formData.name}</p>
           <p><b>Email:</b> ${formData.email}</p>
           <p><b>Phone:</b> ${formData.phone}</p>
           <p><b>Message:</b> ${formData.message}</p>`
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = sendMail;
