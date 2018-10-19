import React, { Component } from "react";
import { Button } from "react-bootstrap";

// import Card from "../../components/Card/Card";
import data from "../../views/Products/data.json";
import "../../css/products.css";
import jsPDF from "jspdf";

class PDFfile extends Component {
  state = {
    products: data
  };

  constructor() {
    super();
    this.state = {
      nama: "",
      pesan: "",
      tinggi: 11.69,
      lebar: "08.27",
      judul: "Lintang.pdf",
      gambar:
        "https://4.bp.blogspot.com/-89TxYwvuJyA/WxOWE4WkHPI/AAAAAAAAAiM/MBWeo995SbkEC6XQVJmtS_ZeKKZsG6MYgCLcBGAs/s400/lin.png"
    };
  }

  unduhPdf(e) {
    e.preventDefault();

    var doc = new jsPDF({
      // orientation: 'landscape',
      unit: "in",
      // format: [4, 2]  // tinggi, lebar
      format: [this.state.tinggi, this.state.lebar]
    });
    doc.text(
      `PDF size: ${this.state.tinggi} x ${this.state.lebar} in`,
      0.5,
      0.5
    );
    doc.text(`PDF filename: ${this.state.judul}`, 0.5, 0.8);
    doc.text(`Recipient: ${this.state.nama}`, 0.5, 1.1);
    doc.text(`Message: ${this.state.pesan}`, 0.5, 1.4);
    doc.addImage(this.state.gambar, "JPEG", 0.5, 2, 2.5, 2.5);
    // format: (image_file, 'image_type', X_init, Y_init, X_fin, Y_fin)

    doc.save(`${this.state.judul}`);
  }

  render() {
    return (
      <div className="content">
        <Button
          onClick={this.unduhPdf.bind(this)}
          variant="raised"
          color="secondary"
          style={{ margin: "5px" }}
        >
          Download PDF
        </Button>
      </div>
    );
  }
}

export default PDFfile;
