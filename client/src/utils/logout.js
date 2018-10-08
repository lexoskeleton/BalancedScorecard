const logout = event => {
  event.preventDefault();
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("beeZUser");
  this.props.history.push("/login");
};

export default logout;
