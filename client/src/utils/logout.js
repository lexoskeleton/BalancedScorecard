const logout = event => {
  event.preventDefault();
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("beeZUser");
  this.props.history.push("/");
};

export default logout;
