import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ReactDOMServer from "react-dom/server";

// import Card from "../../components/Card/Card";
import "../../css/products.css";
import jsPDF from "jspdf";

class PDFfile extends Component {
  getPdf(event) {
    event.preventDefault();

    let doc = new jsPDF();
    doc.fromHTML(ReactDOMServer.renderToStaticMarkup(this.render()));
    doc.save("myDocument.pdf");
  }

  render() {
    return (
      <div className="content">
        <center>
          <Button
            onClick={this.getPdf.bind(this)}
            variant="raised"
            color="secondary"
            style={{ margin: "5px" }}
          >
            Download PDF
          </Button>
        </center>
      </div>
    );
  }
}

export default PDFfile;
