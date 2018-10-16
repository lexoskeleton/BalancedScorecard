import React, { Component } from "react";
import {
  ControlLabel,
  Label,
  CSVReader,
  FormControl,
  FormGroup
} from "react-bootstrap";
import "../../css/products.css";

class FileInput extends Component {
  addFile = (event: any): void => {
    console.log(event.target.files[0]);
  };

  render() {
    return (
      <div className="content">
        <FormGroup>
          <ControlLabel htmlFor="fileUpload" style={{ cursor: "pointer" }}>
            <h3>
              <Label bsStyle="success">Add file</Label>
            </h3>
            <FormControl
              id="fileUpload"
              type="file"
              accept=".pdf"
              onChange={this.addFile}
              style={{ display: "none" }}
            />
          </ControlLabel>
        </FormGroup>
        {/* <CSVReader
          cssClass="csv-input"
          accept=".csv"
          label="Select CSV with secret Death Star statistics"
          onFileLoaded={this.handleForce}
          onError={this.handleDarkSideForce}
          inputId="ObiWan"
        /> */}
      </div>
    );
  }
}

export default FileInput;
