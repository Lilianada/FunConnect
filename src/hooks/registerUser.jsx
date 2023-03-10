import emailjs from "emailjs-com";

async function registerUser(values, phone) {
    try {
      const emailParams = {
        to_name: 'Recipient Name',
        from_name: 'Sender Name',
        subject: 'New registration from {{full-name}}',
        message_html: `
          <p>Full Name: ${values['full-name']}</p>
          <p>Business Name: ${values['business-name']}</p>
          <p>Business Address: ${values['business-address']}</p>
          <p>Mobile Number: ${phone}</p>
          <p>Type of Establishment: ${values['establishment-select']}</p>
          <p>Email Address: ${values['email-address']}</p>
          <p>Interest in Advertising: ${values['advert-selection']}</p>
          <p>Message: ${values['text-area']}</p>
        `
      };
  
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        emailParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
  
      if (response.status === 200) {
        return "Submission Complete!";
      } else {
        return "Submission Failed.";
      }
    } catch (error) {
      return "Submission Failed.";
    }
  }
  export default registerUser;
  
  