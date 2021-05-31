import React, { useState } from "react";


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
    
    // sendEmail(details)

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
    
    // function sendEmail(contactData) {
    //   console.log(details)
    //   const name = details.name;
    //   const email = details.email;
    //   const message = details.message; 
    
    //   let transporter = nodemailer.createTransport({
    //     host: "smtp.gmail.com",
    //     port: 587,
    //     secure: false,
    //     auth: {
    //       user: process.env.EMAIL,
    //       pass: process.env.EMAILPW,
    //     },
    //   });
    
    //   const mail = {
    //     from:`${name}`,
    //     to: process.env.EMAIL,
    //     subject: `${name} would like to get in touch!`,
    //     html: `<p>Name: ${name}</p>
    //            <p>Email: ${email}</p>
    //            <p>Message: ${message}</p>`,
    //   };
    //   transporter.sendMail(mail, (error) => {
    //     if (error) {
    //       res.json({ status: "ERROR" });
    //     } else {
    //       res.json({ status: "Message Sent" });
    //     }
    //   });


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
