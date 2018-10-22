import axios from "axios";

export default {
  // searchPlants: function(param) {
  //   const commonName = param.commonName || null;

  //   if (param.commonName) {
  //     plantData.commonName = { $regex: commonName, $options: "i" };
  //   }
  // },
  //checks login credentials against database.
  loginSubmit: function(loginData) {
    return axios.post("/api/auth/login", loginData);
  },
  //registers a new user into the database.
  registerSubmit: function(registerData) {
    return axios.post("/api/auth/register", registerData);
  },
  //registers a users contact message into the database.
  contactSubmit: function(contactData) {
    return axios.post("/api/contact", contactData);
  },

  getProducts: function() {
    console.log("made it to API");
    return axios.get("/api/products");
  },

  checkDates: function() {
    return axios.get("api/products/dates");
  },

  getTopProductByMonth: function(month) {
    console.log("month is " + month);
    return axios.get("/api/products/" + month);
  }


};
