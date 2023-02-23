// import nodemailer from 'nodemailer';

// const sendEmail = async (data) => {
//   try {
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 465,
//       secure: true,
//       auth: {
//         user: 'Lilibest30.lb@gmail.com',
//         pass: 'Lilibest30',
//       },
//     });

//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//       from: `"${data.name}" <${data.email}>`,
//       to: 'Lilibest30.lb@gmail.com',
//       subject: 'New message from your website!',
//       text: `You have received a new message from ${data.name} (${data.email}). Phone: ${data.phone}. Message: ${data.message}`,
//     });

//     console.log('Message sent: %s', info.messageId);
//     return 'Thank you for your message! We will get back to you as soon as possible.';
//   } catch (error) {
//     console.error('There was an error sending your message:', error);
//     return 'There was an error sending your message.';
//   }
// };

// export default sendEmail;

import emailjs from "emailjs-com";

async function sendEmail(values) {
  try {
    const templateParams = {
      "first-name": values["first-name"],
      "last-name": values["last-name"],
      "email-address": values["email-address"],
      "phone-number": values["phone-number"],
      "text-area": values["text-area"],
    };

    const response = await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USER_ID
    );

    if (response.status === 200) {
      return "Thank you for your message!";
    } else {
      return "There was an error sending your message.";
    }
  } catch (error) {
    console.error("There was an error sending your message:", error);
    return "There was an error sending your message.";
  }
}

export default sendEmail;
