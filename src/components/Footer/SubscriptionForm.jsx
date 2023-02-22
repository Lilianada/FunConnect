import React, { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import "./style.scss";

const SubscribeForm = () => {
  const [status, setStatus] = useState(null)
  const [email, setEmail] = useState("")

  const FORM_URL = `https://app.engage.so/embed/63f5ef37aac910d6cbb070ba`

  const handleSubmit = (event) => {
    event.preventDefault()

    // Send form data to Engage.so
    fetch(FORM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

    // Clear form input
    setEmail('');
  }

  return (
    <div>
        <form className="footeFlex_form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="footerFlex_input"
            aria-label="Enter email address"
            placeholder="Enter email address"
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <div className="footerFlex_btn">
            <input type="submit" className="submitBtn" />
            <HiArrowUpRight />
          </div>
        </form>

        {/* Success? */}
      {status === "ok" && (
        <>
          <p>
            Welcome aboard{email ? `, ${email}` : ""}
            <span role="img" aria-label="Ship">
              🚢
            </span>
          </p>
          <p>Subscription successful 🎉🎉. Please check your inbox to confirm the subscription!</p>
        </>
      )}

      {/* User already subscribed? */}
      {
        status === "Your email is already subscribed." && (
          <>
            <p>
              You are already subscribed{email ? `, ${email}` : ""}
            </p>
            </>
        )
      }

      {/* Error during subscription? */}
      {status === "ERROR" && (
        <>
          <p>Oops, something went wrong...</p>
          <p>
            Please,{" "}
            <button className="btnPrimary" style={{marginTop: "10px"}} onClick={() => setStatus(null)}>try again.</button>
          </p>
        </>
      )}
    </div>
  )
}

export default SubscribeForm;