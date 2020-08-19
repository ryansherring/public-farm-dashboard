import React, { Component } from "react";
import "./todo.css";
import { Card, Button } from "react-bootstrap";
import "./todo.css"

class ToDoList extends Component {
  state = {
    newItem: "",
    list: [],
  };

  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    // create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    // copy of current list of items
    const list = [...this.state.list];
    // add new item to list
    list.push(newItem);
    // update state with new list and reset
    this.setState({
      list,
      newItem: "",
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    //filter out item being deleted
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <Card className="todo" style={{width: "100%"}}>
        <Card.Title>Farm To-Do-List</Card.Title>
        <Card.Body style={{padding: "0"}}>
          {this.state.list.length < 1 ? (
            <>
              <p>Everything is currently taken care of!
                <br />
                As parts of the farm need attention, such as water level going
                too high, eratic sensor values, or weekly maintenance items, the
                list will automatically populate
              </p>
            </>
          ) : (
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <button onClick={() => this.deleteItem(item.id)}>
                      <i class="material-icons">x</i>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        <input
          className="form"
          type="text"
          placeholder="custom to-do item"
          value={this.state.newItem}
          onChange={(e) => this.updateInput("newItem", e.target.value)}
        />
        <button className="add-btn" style={{height: '25%'}} onClick={() => this.addItem()}>
          <i>Add</i>
        </button>
        <br />
        </Card.Body>
        
      </Card>
    );
  }
}

export default ToDoList;
