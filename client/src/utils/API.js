import axios from "axios";

// eslint-disable-next-line
export default {
  // Send Email Contact Request

  sendEmail: function(contactData) {
    return axios.post("FrameStix/api/visitors/contact", contactData);
  },
  
}

