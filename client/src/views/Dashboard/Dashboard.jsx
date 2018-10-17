import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import { WordCloud } from "../../components/WordCloud/WordCloud.jsx";
import { Card } from "../../components/Card/Card.jsx";
// import { Tasks } from "../../components/Tasks/Tasks.jsx";
import { StatsCard } from "../../components/StatsCard/StatsCard.jsx";
import API from "../../utils/API.js";

import {
  // dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "../../variables/Variables.jsx";

class Dashboard extends Component {
  state = {
    profit:0,
    revenue:0,
    totalSales:0,
    totalCustomers:0,
    customerSatisfaction:0,
    employeeSatisfaction:0,
    returnedItems:0
  }

  componentDidMount(){
    this.loadProfit();
    this.loadRevnue();
    this.loadSales();
    this.loadCusomterSatisfaction();
    this.loadEmployeeSatisfaction()
  }

  loadProfit = () => {
    API.getData()
      .then(res => this.setState({profit: res.data[0].totalProfit}))
      .catch(err => console.log(err));
  };

  loadRevnue = () => {
    API.getData()
      .then(res => this.setState({revenue: res.data[0].totalRevenue}))
      .catch(err => console.log(err));
  };

  loadSales = () => {
    API.getData()
      .then(res => this.setState({totalSales: res.data[0].totalSales}))
      .catch(err => console.log(err));
  };

  loadCusomterSatisfaction = () => {
    API.getData()
      .then(res => this.setState({customerSatisfaction: res.data[0].customerSatisfaction}))
      .catch(err => console.log(err));
  };

  loadEmployeeSatisfaction = () => {
    API.getData()
      .then(res => this.setState({employeeSatisfaction: res.data[0].employeeSatisfaction}))
      .catch(err => console.log(err));
  };

  


  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    const dataPieCustomer = {
      labels: [`${this.state.customerSatisfaction}%`],
      series: [this.state.customerSatisfaction, (100-this.state.customerSatisfaction)]
    };

    const dataPieEmployee = {
      labels: [`${this.state.employeeSatisfaction}%`],
      series: [this.state.employeeSatisfaction, (100-this.state.employeeSatisfaction)]
    };
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-dollar text-warning" />}
                statsText="Profit"
                statsValue={this.state.profit}
                // statsIcon={<i className="fa fa-refresh" />}
                // statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Revenue"
                statsValue={this.state.revenue}
                // statsIcon={<i className="fa fa-calendar-o" />}
                // statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-opencart text-danger" />}
                statsText="Total Sales"
                statsValue={this.state.totalSales}
                // statsIcon={<i className="fa fa-clock-o" />}
                // statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-user text-info" />}
                statsText="Total Customers"
                statsValue="+45"
                // statsIcon={<i className="fa fa-refresh" />}
                // statsIconText="Updated now"
              />
            </Col>
          </Row>
          <Row>
            {/* <Col md={6}>
              <Card
                // statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                // category="24 Hours performance"
                // stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col> */}
            <Col md={6}>
              <Card
                id="chartActivity"
                title="Returned Items"
                // category="All products including Taxes"
                // stats="Data information certified"
                // statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>
            <Col md={3}>
              <Card
                // statsIcon="fa fa-clock-o"
                title="Customer's Satisfaction "
                // category="Last Campaign Performance"
                // stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPieCustomer} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
            <Col md={3}>
              <Card
                // statsIcon="fa fa-clock-o"
                title="Employee's Satisfaction "
                // category="Last Campaign Performance"
                // stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPieEmployee} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <WordCloud />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
