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

  getUser: function(contactData) {
    return axios.get("/api/contact", contactData);
  },

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
  }
};
