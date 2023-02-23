
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