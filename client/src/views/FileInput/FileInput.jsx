import React, { Component } from "react";
import API from "../../utils/API.js";
import CSVReader from "react-csv-reader";
import "../../css/products.css";

class FileInput extends Component {
  state = {
    csv: []
  };

  handleCSV = data => {
    // console.log(data);
    // console.log(data[1][1]);
    let convertedData = data.filter((row, index) => index > 0).map(row => ({
      [data[0][0].trim()]: row[0],
      [data[0][1].trim()]: row[1],
      [data[0][2].trim()]: row[2],
      [data[0][3].trim()]: row[3],
      [data[0][4].trim()]: row[4],
      [data[0][5].trim()]: row[5],
      [data[0][6].trim()]: row[6],
      [data[0][7].trim()]: row[7],
      [data[0][8].trim()]: row[8],
      [data[0][9].trim()]: row[9],
      [data[0][10].trim()]: row[10],
      [data[0][11].trim()]: row[11]
    }));
    //console.log(convertedData);
    API.postCSV(convertedData).then(result => {
      console.log(result);
      this.props.history.replace("/dashboard");
    });

    //this.setState({csv: convertedData});
  };

  render() {
    return (
      <div className="container">
        <CSVReader label="Select CSV file" onFileLoaded={this.handleCSV} />
        <h3>Formatting Instructions</h3>
        <div>
          <p>Please upload your file using the following column headers</p>
          <p>Do not change the formatting or capitalization</p>
          <ul>
            <li>date</li>
            <li>title</li>
            <li>sessions</li>
            <li>pageViews</li>
            <li>totalRevenue </li>
            <li>totalSales</li>
            <li>totalCost</li>
            <li>totalProfit</li>
            <li>customerSatisfaction</li>
            <li>employeeSatisfaction</li>
            <li>customerRetentionRate</li>
            <li>stockTotal</li>
          </ul>
        </div>
      </div>
    );
  }

  //   return (
  //     <div className="content">
  //       <FormGroup>
  //         <ControlLabel htmlFor="fileUpload" style={{ cursor: "pointer" }}>
  //           <h3>
  //             <Label bsStyle="success">Add CSV file</Label>
  //           </h3>
  //           <FormControl
  //             id="fileUpload"
  //             type="file"
  //             accept=".csv"
  //             onChange={this.fileUpload}
  //             style={{ display: "none" }}
  //           />
  //         </ControlLabel>
  //       </FormGroup>
  //     </div>
  //   );
  // }
}

export default FileInput;
