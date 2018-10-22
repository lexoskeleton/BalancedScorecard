import axios from "axios";

export default {
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

  // getUser: function(nameUser) {
  //   return axios.get("/api/auth/register", nameUser);
  // },

  getData: function(profitData) {
    return axios.get("/api/bscd", profitData);
  },

  getAllTasks: function() {
    return axios.get("/api/task");
  },

  postTask: function(task) {
    return axios.post("/api/task");
  },

  deleteTask: function(id) {
    return axios.delete("/api/task/" + id);
  },

  postCSV: function(csv) {
    return axios.post("/api/fileUpload", csv);
  },

  getCSV: function(csv) {
    return axios.get("/api/fileUpload", csv);
  }


};
