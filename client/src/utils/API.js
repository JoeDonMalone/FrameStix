import axios from "axios";

// eslint-disable-next-line
export default {
  // Send Email Contact Request

  sendEmail: function(contactData) {
      console.log("made it to the API Function")
    return axios.post("/api/visitors/contact", contactData);
  },
};

