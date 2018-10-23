import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "../../components/Card/Card.jsx";
import { Input } from "../../components/Task/Input.jsx"
import { FormBtn } from "../../components/Task/FormBtn.jsx"
import API from "../../utils/API.js";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";

class Dashboard extends Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    this.loadTasks();
  }

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

  render() {
    return (
      <div className="content">
        <Grid fluid>
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
                              <strong>
                                {task.tasks_title}
                              </strong>
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
