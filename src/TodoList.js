import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }
  addItem(event) {
    if (this._inputElement.value !== "") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }    this._inputElement.value = "";

    console.log(this.state.items);

    event.preventDefault();
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={input => (this._inputElement = input)}
              placeholder="enter task"
            />
            <button typer="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
