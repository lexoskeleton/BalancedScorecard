import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Grid, Row, Col, Table } from "react-bootstrap";
import API from "../../utils/API";
import Card from "../../components/Card/Card";
import data from "../../views/Products/data.json";
import "../../css/products.css";
import moment from "moment";
import TabTable from "../../components/Tab-Table";
class Products extends Component {
  state = {
    products: data,
    productArray: [],
  };

  componentDidMount() {
    this.loadTopProducts();
  }

  getMonthFormat = (productArray) => {
    productArray.map(function(product, index){
      const currentDate = product.date;
      const newDate = moment(currentDate).format("MMMM");
      productArray[index].formattedDate = newDate;
    })

  }

  getClassColor = (productArray) => {
    productArray.map(function(product, index){
      if (product.stockTotal <= 100) {
        productArray[index].classColor = "text-danger";
        //make it red
      } else if (product.stockTotal <= 500) {
        //make it yellow
        productArray[index].classColor = "text-warning";
      } else {
        //make it green
        productArray[index].classColor = "text-success";
      }
    })
  }

  // checkDates = () => {
  //   var allMonths = ['January','February','March', 'April','May','June','July','August','September','October','November','December'];
  //   const months = [];
  //   API.checkDates()
  //     .then(res => {
  //       console.log(res.data);
  //       res.data.map((date, index) => {
  //         let month = moment(date.date).format("MMMM");
  //         if (months.indexOf(month) === -1) {
  //            console.log(this.state.monthArray.indexOf(month));
  //           months.push(month);
  //         }
  //       });
  //       months.sort(function(a,b){
  //         return allMonths.indexOf(a) > allMonths.indexOf(b);
  //     });
  //       // console.log(months);
  //       this.setState({monthArray: months});
  //     })
  // }

  loadTopProducts = () => {
    API.getTopProducts()
      .then(products => {
        let comparison = 0;
        const topProducts = [];
        function compare(a, b) {
            const totalA = a.totalSales;
            const totalB = b.totalSales;

            if(totalA > totalB) {
                comparison = -1;
            } else if(totalA < totalB) {
                comparison = 1;
            }
            return comparison;
        }
        const newArray = products.data.sort(compare);
        for (var i = 0; i < 20; i++) {
            topProducts[i] = newArray[i];
        }
        // console.log(topProducts);
        this.getMonthFormat(topProducts);
        this.getClassColor(topProducts);
        console.log(topProducts);
        // console.log(res.data);
        this.setState({productArray: topProducts});
      });
  }
  
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
                          <th scope="col">Month</th>
                          <th scope="col">Stock Amount</th>
                          <th scope="col">Total Sales</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.productArray.map((product, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{product.title}</td>
                            <td>{product.formattedDate}</td>
                            <td className={product.classColor}>
                              {product.stockTotal}
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