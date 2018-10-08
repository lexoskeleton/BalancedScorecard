import React, { Component } from "react";
import "../css/register.css";
import API from "../utils/API";
import {
  Row,
  Col,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";

const sectionStyle = {
  height: "100vh",
  backgroundColor: "blue"
};

class Register extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    message: ""
  };

  onChange = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  };

  onSubmit = event => {
    event.preventDefault();
    const { firstname, lastname, username, password } = this.state;
    API.registerSubmit({ firstname, lastname, username, password }).then(
      result => {
        if (result.data.success) {
          console.log("SUCCESSFUL REGISTRATION!");
          API.loginSubmit({ username, password })
            .then(result => {
              localStorage.setItem("jwtToken", result.data.token);
              localStorage.setItem("beeZUser", this.state.username);
              this.setState({ message: "" });

              this.props.history.push("/");
            })
            .catch(error => {
              if (error.response.status === 401) {
                this.setState({
                  message: error.response.data.msg
                });
              }
            });
        } else {
          this.setState({ message: result.data.msg });
        }
      }
    );
  };
  render() {
    const { firstname, lastname, username, password, message } = this.state;
    return (
      <div className="Register">
        {/* <Row className="show-grid"> */}
        <Col md={6} style={sectionStyle} />
        <Col md={6}>
          <form id="signup" onSubmit={this.onSubmit}>
            {message !== "" && (
              <div
                className="alert alert-warning alert-dismissible"
                role="alert"
              >
                <b>{message}</b>
              </div>
            )}
            <FormGroup controlId="first name" bsSize="large">
              <h3 className="home">Welcome</h3>
              <ControlLabel>First Name</ControlLabel>
              <FormControl
                autoFocus
                type="text"
                placeholder="First Name"
                name="firstname"
                value={firstname}
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <FormGroup controlId="last name" bsSize="large">
              <ControlLabel>Last Name</ControlLabel>
              <FormControl
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={lastname}
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <FormGroup controlId="user name" bsSize="large">
              <ControlLabel>User Name</ControlLabel>
              <FormControl
                type="email"
                placeholder="Email"
                name="username"
                value={username}
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.onChange}
                required
              />
            </FormGroup>

            <Button
              bsSize="large"
              type="submit"
              bsStyle="primary"
              name="action"
            >
              Register me
            </Button>
          </form>
        </Col>
        {/* </Row> */}
      </div>
    );
    // <Main className="homeMain home">
    //   <div className="container">
    //     <div className="homeBorder" />
    //     <div className="row">
    //       <div className="col s6">
    //         <h2 className="homeform">Easy register</h2>
    //         <div className="input-field col s12 screen black-text">
    //           <form id="signup" onSubmit={this.onSubmit}>
    //             {message !== "" && (
    //               <div
    //                 className="alert alert-warning alert-dismissible"
    //                 role="alert"
    //               >
    //                 <b>{message}</b>
    //               </div>
    //             )}
    //             <input
    //               className="col s12"
    //               type="text"
    //               placeholder="First Name"
    //               name="firstname"
    //               value={firstname}
    //               onChange={this.onChange}
    //               required
    //             />
    //             <input
    //               className="col s12"
    //               type="text"
    //               placeholder="Last Name"
    //               name="lastname"
    //               value={lastname}
    //               onChange={this.onChange}
    //               required
    //             />
    //             <input
    //               className="col s12"
    //               type="email"
    //               placeholder="Email"
    //               name="username"
    //               value={username}
    //               onChange={this.onChange}
    //               required
    //             />
    //             <input
    //               className="col s12"
    //               type="password"
    //               placeholder="Password"
    //               name="password"
    //               value={password}
    //               onChange={this.onChange}
    //               required
    //             />
    //             <button
    //               className="btn waves-effect waves-light #f9a825 yellow darken-3"
    //               type="submit"
    //               name="action"
    //             >
    //               Register me
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Main>
  }
}

export default Register;
