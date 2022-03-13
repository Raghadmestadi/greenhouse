import React from "react"

function Contact() {
  return (
    <div className="contact-us">
      <div>
        <h1>Contact Us </h1>
        <form action="" className="form-c">
          <input type="text" placeholder="Enter your Name" required />
          <input type="email" placeholder="email" required />
          <textarea rows="7" placeholder="message" required></textarea>
          <button type="submit" className="Form-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
