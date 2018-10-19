import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import { WordCloud } from "../../components/WordCloud/WordCloud.jsx";
import { Card } from "../../components/Card/Card.jsx";
// import { Tasks } from "../../components/Task/Tasks.jsx";
import { StatsCard } from "../../components/StatsCard/StatsCard.jsx";
import { Input } from "../../components/Task/Input.jsx"
import { FormBtn } from "../../components/Task/FormBtn.jsx"
import API from "../../utils/API.js";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";

class Dashboard extends Component {
  state = {
    profit: 0,
    revenue: 0,
    totalSales: 0,
    customerRetentionRate: 0,
    customerSatisfaction: 0,
    employeeSatisfaction: 0,
    returnedItems: 0,
    tasks: []
  }

  componentDidMount() {
    this.loadProfit();
    this.loadRevnue();
    this.loadSales();
    this.loadCusomterSatisfaction();
    this.loadEmployeeSatisfaction();
    this.loadCustomerRetentionRate();
    this.loadTasks();
  }

  loadProfit = () => {
    API.getData()
      .then(res => this.setState({ profit: res.data[0].totalProfit }))
      .catch(err => console.log(err));
  };

  loadRevnue = () => {
    API.getData()
      .then(res => this.setState({ revenue: res.data[0].totalRevenue }))
      .catch(err => console.log(err));
  };

  loadSales = () => {
    API.getData()
      .then(res => this.setState({ totalSales: res.data[0].totalSales }))
      .catch(err => console.log(err));
  };

  loadCusomterSatisfaction = () => {
    API.getData()
      .then(res => this.setState({ customerSatisfaction: res.data[0].customerSatisfaction }))
      .catch(err => console.log(err));
  };

  loadEmployeeSatisfaction = () => {
    API.getData()
      .then(res => this.setState({ employeeSatisfaction: res.data[0].employeeSatisfaction }))
      .catch(err => console.log(err));
  };

  loadCustomerRetentionRate = () => {
    API.getData()
      .then(res => this.setState({ customerRetentionRate: res.data[0].customerRetentionRate }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadTasks = () => {
    API.getAllTasks()
      .then(res => this.setState({ tasks: res.data }))
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.tasks_title) {
      API.postTask({
        tasks_title: this.state.tasks_title,
      })
        .then(res => this.loadTasks())
        .catch(err => console.log(err));
    }
  };

  deleteTask = id => {
    API.deleteTask(id)
      .then(res => this.loadTasks())
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
    const dataPieEmployee = {
      labels: [`${Math.round(100*this.state.employeeSatisfaction)/100}%`, `${Math.round(100*(100 - this.state.employeeSatisfaction))/100}%`],
      series: [this.state.employeeSatisfaction, Math.round(100*(100 - this.state.employeeSatisfaction))/100]
    };
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-dollar text-warning" />}
                statsText="Profit"
                statsValue={`$ ${Math.round(this.state.profit).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD`}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Revenue"
                statsValue={`$ ${Math.round(this.state.revenue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD`}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-opencart text-danger" />}
                statsText="Sales"
                statsValue={`${Math.round(this.state.totalSales).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Items`}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-user text-info" />}
                statsText="Customer's Retention Rate"
                statsValue={`${Math.round(100*this.state.customerRetentionRate)/100}%`}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card
                title="Employee's Productivity"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPieEmployee} type="Pie" />
                  </div>
                }
              />
            </Col>
            <Col md={6}>
            <Card
                title="Converting Words"
                content={
                  <div>
                    <WordCloud />
                  </div>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={9}>
              <Card
                title="Tasks"
                content={
                  <div className="table-full-width">
                    <form>
                      <div>
                      <Input
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        name="tasks_title"
                        placeholder="New Task"
                      />
                      <FormBtn
                        disabled={!(this.state.tasks_title)}
                        onClick={this.handleFormSubmit}
                      >
                        Add
                      </FormBtn>
                      </div>
                    </form>
                    <hr />
                    {this.state.tasks.length ? (
                      <List>
                      {this.state.tasks.map(task => {
                        return (
                          <ListItem key={task._id}>
                            <a href={"/books/" + task._id}>
                              <strong>
                                {task.tasks_title}
                              </strong>
                            </a>
                            <DeleteBtn onClick={() => this.deleteTask(task._id)} />
                          </ListItem>
                        );
                      })}
                    </List>
                  ) : (
                    <h3>No Results to Display</h3>
                    )}
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
