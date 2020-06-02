import React, {Component} from 'react';
import './todo.css'

class ToDoList extends Component {
    state={
      newItem: '',
      list: [],
    }

  updateInput(key, value){
    //update react state
    this.setState({
      [key]: value
    })
  }

  addItem(){
    // create item with unique id
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    // copy of current list of items
    const list = [...this.state.list];
    // add new item to list
    list.push(newItem);
    // update state with new list and reset
    this.setState({
      list,
      newItem: '',
    })
  }

  deleteItem(id){
    // copy current list of items
    const list = [...this.state.list];
    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);
    this.setState({list: updatedList})
  }

  render(){
    return (
      <div className="todo">
        <h1 className="todo-title">Ryan's to-do list</h1>
        <div className="container">
          Add an Item...
          <br/>
          <input 
            type='text'
            placeholder='type new item here'
            value={this.state.newItem}
            onChange={e => this.updateInput('newItem', e.target.value)}
          />
          <button className="add-btn btn-floating"
            onClick={() => this.addItem()}
            >
              <i>add</i>
            </button>
            <br/>
            <ul>
              {this.state.list.map(item => {
                
                return (
                  <li key={item.id}>
                    {item.value}
                    <button
                      onClick={() => this.deleteItem(item.id)}
                    >
                      <i class="material-icons">x</i>
                    </button>
                  </li>
                )
              })}
            </ul>
        </div>
     </div>
    );
  }
}

export default ToDoList;