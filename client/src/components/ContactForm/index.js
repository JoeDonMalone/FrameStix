import React, { useState } from "react";
import Contact from "../../pages/Contact";
import ContactCard from "../ContactCard";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:3001/api/visitors/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              What would you like me to know?
            </label>
            <textarea
              className="form-control form-control-lg"
              id="message"
              rows="3"
              required
            />
          </div>
          <button type="submit" className = {" btn btn-dark"}>{status}</button>
    </form>
  );
};

export default ContactForm;
