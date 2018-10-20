import React, { Component } from "react";
import {
  ControlLabel,
  Label,
  // CSVReader,
  FormControl,
  FormGroup
} from "react-bootstrap";
import API from "../../utils/API.js";
import "../../css/products.css";


class FileInput extends Component {
  // addFile = (event: any): void => {
  //   console.log(event.target.files[0]);
  // };
  constructor(props) {
    super(props);
    this.state = {
      csv: ""
    };
    // this.fileUpload = this.fileUpload.bind(this);
  }
  fileUpload(e) {
    let files = e.target.files[0]; 
    console.log(files);
  

  const data = new FormData();
  data.append('file', this.files);
  data.append('filename', this.value);
  console.log(data);

  if (files === ".csv") {
    API.postCSV
    .then((response) => {
      response.json().then((body) => {
        this.setState({ csv: `http://localhost:3000/${body.file}` });
      });
    });
  }

  // fetch('http://localhost:3000/fileUpload', {
  //   method: 'POST',
  //   body: data,
  // }).then((response) => {
  //   response.json().then((body) => {
  //     this.setState({ csv: `http://localhost:3000/${body.file}` });
  //   });
  // });
}

  render() {
    return (
      <div className="content">
        <FormGroup>
          <ControlLabel htmlFor="fileUpload" style={{ cursor: "pointer" }}>
            <h3>
              <Label bsStyle="success">Add CSV file</Label>
            </h3>
            <FormControl
              id="fileUpload"
              type="file"
              accept=".csv"
              onChange={this.fileUpload.bind(this)}
              style={{ display: "none" }}
            />
          </ControlLabel>
        </FormGroup>
      </div>
    );
  }
}

export default FileInput;
