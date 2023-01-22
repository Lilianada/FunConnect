import React, { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import "./Footer.scss";

const SubscribeForm = () => {
    const [status, setStatus] = useState<string | null>(null)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
  
    const FORM_URL = `the URL you created in the previous section`
  
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault()
  
      const data = new FormData(event.target as HTMLFormElement)
  
      try {
        const response = await fetch(FORM_URL, {
          method: "post",
          body: data,
          headers: {
            accept: "application/json",
          },
        })
  
        setEmail("")
        const json = await response.json()
  
        if (json.status === "success") {
          setStatus("SUCCESS")
          return
        }
      } catch (err) {
        setStatus("ERROR")
        console.log(err)
      }
    }
  
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setEmail(value)
    }
    
    return (
      <div>
        {status === "SUCCESS" && (
            <>
            <p>
              Welcome aboard{name ? `, ${name}` : ""}{" "}
              <span role="img" aria-label="Ship">
                🚢
              </span>
            </p>
            <p>Please check your inbox to confirm the subscription!</p>
            </>
        )}
        {status === "ERROR" && (
            <>
            <p>Oops, something went wrong...</p>
            <p>
              Please,{" "}
              <button className="btn" onClick={() => setStatus(null)}>try again.</button>
            </p>
            </>
        )}
        {status === null && (
          <form className="footeFlex_form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="footerFlex_input"
            aria-label="Enter email address"
            placeholder="Enter email address"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <div className="footerFlex_btn">
            <input type="submit" className="submitBtn" />
            <HiArrowUpRight />
          </div>
          </form>
        )}
      </div>
    )
  }

  export default SubscribeForm;