import React from "react";
import { HiArrowUpRight } from "react-icons/hi";
import "./style.css";

export default function ContactForm() {
  return (
   <section className="contactForm_wrap">
      <div className="contactForm">
        <h4 className="formHead">Send us a Message</h4>
        <p className="formSubhead">Join thousands getting emails in their inbox.</p>

        <form action="" method="post" className="contactForm" >
          <input type="text" name="first-name" className="formField" placeholder="Enter first name" />
          <input type="text" name="last-name" className="formField" placeholder="Enter last name" />
          <input type="text" name="email-address" className="formField" placeholder="Enter your email address" />
          <input type="text" name="phone-number" className="formField" placeholder="Enter your phone number" />
          <textarea  name="text-area" className="formField" placeholder="Add message" cols="30" rows="10">
          </textarea>
          <button type="submit" className="formBtn">Send Message
            <HiArrowUpRight className="formBtnIcon" />
          </button>
        </form>
        <p className="formInform">
        Funconnect uses contact information you provide us to contact you about our relevant content, product and services. You may unsubscribe from our list at anytime. For further information, read our Privacy Policy
        </p>
    </div>
   </section>
    );
}
