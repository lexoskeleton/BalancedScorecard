import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "../../components/Card/Card";
import data from "../../views/Products/data.json";
import "../../css/products.css";

class Products extends Component {
  state = {
    products: data
  };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Top Products"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Stock Amount</th>
                        <th scope="col">Total Sales</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.products.map((product, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{product.name}</td>
                          <td>{product.category}</td>
                          <td className={product.classColor}>
                            {product.stockAmount}
                          </td>
                          <td>{product.totalSales}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Products;
