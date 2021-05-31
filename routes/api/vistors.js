const router = require("express").Router();
const nodemailer = require("nodemailer");

const visitorsController = require("../../controllers/visitorsController");

// Matches with "FrameStix/api/visitors"
router.route("/")


router.post("/contact", (req, res) => {
  
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAILPW,
    },
  });

  const mail = {
    from:`${name}`,
    to: process.env.EMAIL,
    subject: `${name} would like to get in touch!`,
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  transporter.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

module.exports = router;