import React from "react";
import Image2 from "../../assets/images/Image2.jpg";
import Image from "../Images";
import ContactForm from "../ContactForm";
import "./style.css";

function ContactCard(props) {
  return (
    <>
      <div className="container-fluid contact-container home-container">
        <div className="row container ">
          <div className="col-sm-4">
            <div className="card card-custom">
              <div className="card-body">
                <Image
                  className={"card-img-top"}
                  src={Image2}
                  alt="The Malone Family celebrates Christmas as a family of four!"
                ></Image>
              </div>
            </div>
          </div>
          <div className="col-sm-6 ">
            <div className="card card-custom">
              <div className="card-body">
                <h5 className="card-text">
                  <b>Please reach out!</b>
                </h5>
                <p className="card-text">
                  I would love to discuss your project and answer any questions
                  you might have. Please leave your information below, and I'll
                  contact you shortly.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>EMAIL:</b> Joe@framestix.com
                </li>
                <li className="list-group-item">
                  <b>PHONE:</b> (830) 220-0942
                </li>
                <li className="list-group-item">
                  <b>LOCATION:</b> Liberty Hill, TX
                </li>
              </ul>
            </div>
            <div className="row">
              <h3 style={{ paddingTop: "20px" }}>
                {" "}
                <b>Send me a Message!</b>
              </h3>
            </div>
            <div className="col-sm-12">
              <div className="row">
                <ContactForm></ContactForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactCard;

//   <div className="card-body">
//     <a href="#" className="card-link">
//       Card link
//     </a>
//     <a href="#" className="card-link">
//       Another link
//     </a>
//   </div>
// </div></div>
