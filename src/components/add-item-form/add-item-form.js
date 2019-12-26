import React, { Component } from 'react'

import './add-item-form.css';

export default class AddItemForm extends Component {
  state = {
    label: '',
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })  
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label: '',
    })
  }

  render() {
    return (
      <form className="add-item-form form-inline"
            onSubmit={this.onSubmit}>
              
        <input type="text"
              className="form-control flex-grow-1"
              onChange={this.onLabelChange}
              placeholder="What needs to be done" 
              value={this.state.label} />
        <button 
          className="btn btn-outline-secondary">
            Add Item
        </button>
      </form>
    )
  }
}