import express from 'express';
import { json, urlencoded } from 'body-parser';
import { createTransport } from 'nodemailer';
const app = express();

// Configure body-parser middleware to parse JSON and urlencoded data
app.use(json());
app.use(urlencoded({ extended: true }));

// Create a route to handle the form submission
app.post('/submit-form', (req, res) => {
  // Parse the form data from the request
  const { firstName, lastName, email, phone, message } = req.body;

  // Create a transporter for sending the email
  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'lilibest30.lb@gmail.com',
      pass: 'Lilibest30'
    }
  });

  // Configure the email message
  const messageBody = `
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Phone: ${phone}
    Message: ${message}
  `;
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com',
    subject: 'New Form Submission',
    text: messageBody
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
