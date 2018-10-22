import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import API from "../../utils/API";
import Card from "../../components/Card/Card";
import "../../css/products.css";
import moment, { relativeTimeThreshold } from "moment";

class Products extends Component {
  state = {
    productArray: [],
    monthArray: []
  };

  componentDidMount() {
    this.checkDates();
    this.loadAllProducts();
  }

  getMonthFormat = (productArray) => {
    productArray.map(function(product, index){
      const currentDate = product.date;
      const newDate = moment(currentDate).format("MMMM");
      return productArray[index].formattedDate = newDate;
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

  filterProducts = (productArray) => {
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
    const newArray = productArray.data.sort(compare);
    for (var i = 0; i < 20; i++) {
        topProducts[i] = newArray[i];
    }

    return topProducts;
  }

  handleMonthButtonClick = (month) => {
    this.checkSpecificMonth(month);
  }

  checkSpecificMonth = (month) => {
    API.getTopProductByMonth(month)
      .then(products => {
        const topProducts = this.filterProducts(products);
        // console.log(topProducts);
        this.getMonthFormat(topProducts);
        this.getClassColor(topProducts);
        this.setState({productArray: topProducts});
      });
  }

  checkDates = () => {
    var allMonths = ['January','February','March', 'April','May','June','July','August','September','October','November','December'];
    const months = [];
    API.checkDates()
      .then(res => {
        console.log("made it to dates below");
        console.log(res.data);
        res.data.map((date, index) => {
          let month = moment(date.date).format("MMMM");
          if (months.indexOf(month) === -1) {
             console.log(this.state.monthArray.indexOf(month));
            months.push(month);
          }
        });
        months.sort(function(a,b){
          return allMonths.indexOf(a) > allMonths.indexOf(b);
      });
        console.log("months below");
        console.log(months);
        this.setState({monthArray: months});
        console.log("month array below from state");
        console.log(this.state.monthArray);
      })
  }

  loadTopProducts = () => {
    API.getProducts()
      .then(products => {
        const topProducts = this.filterProducts(products);
        // console.log(topProducts);
        this.getMonthFormat(topProducts);
        this.getClassColor(topProducts);
        this.setState({productArray: topProducts});
      });
  }

  loadAllProducts = () => {
    API.getProducts()
      .then(products => {
        // console.log(products.data.length);
        this.getMonthFormat(products.data);
        this.getClassColor(products.data);
        this.setState({productArray: products.data});
      })
  }
  
    render() {
      return (
        <div className="content">
          <Grid fluid>
            <Row>
              <Col md={12}>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active" href="#" onClick={this.loadAllProducts}>All Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={this.loadTopProducts}>Top Selling Products</a>
                </li>
                {
                  this.state.monthArray.map((month, index) => 
                    <li key={index} className="nav-item">
                      <a className="nav-link" href="#" onClick={() => this.checkSpecificMonth(month)}>Top Prodcuts: {month}</a>
                    </li>
                  )
                }
              </ul>
                <Card
                  title="Products"
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
                            <td><a onClick={() => this.handleMonthButtonClick(product.formattedDate)}><button id={product.formattedDate} type="button" className="btn btn-sm btn-dark">{product.formattedDate}</button></a></td>
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