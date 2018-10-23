const logout = event => {
  event.preventDefault();
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("appUser");
  this.props.history.push("/");
};

export default logout;
