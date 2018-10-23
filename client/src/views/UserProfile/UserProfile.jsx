import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "../../components/Card/Card.jsx";
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";
import API from "../../utils/API.js";

class UserProfile extends Component {
  state = {
    firstName: [],
    lastName: [],
    email: [],
    userName: []
  };

  componentDidMount() {
    this.userData();
  }

  userData = () => {
    API.getUser()
      .then(res =>
        this.setState({
          firstName: res.data[0].firstname,
          lastName: res.data[0].lastname,
          userName: res.data[0].username,
          email: res.data[0].username
        })
      )

      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-5"]}
                      proprieties={[
                        // {
                        //   label: "Company (disabled) ",
                        //   type: "text",
                        //   bsClass: "form-control",
                        //   placeholder: "Company",
                        //   defaultValue: "Vision",
                        //   disabled: true
                        // },
                        {
                          label: "Username",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Username",
                          defaultValue: this.state.userName
                        },
                        {
                          label: "Email address",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email",
                          defaultValue: this.state.email
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "First name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
                          defaultValue: this.state.firstName
                        },
                        {
                          label: "Last name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Last name",
                          defaultValue: this.state.lastName
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Adress",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Home Adress",
                          defaultValue: ""
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      proprieties={[
                        {
                          label: "City",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                          defaultValue: ""
                        },
                        {
                          label: "Country",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Country",
                          defaultValue: ""
                        },
                        {
                          label: "Postal Code",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: ""
                        }
                      ]}
                    />
                    <Button bsStyle="info" pullRight fill type="submit">
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
