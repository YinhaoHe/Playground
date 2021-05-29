import React, { Component } from "react";

class Counter extends Component {
  /* 
  state = {
    value: this.props.value,
    imageUrl: "http://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.value + 1 });
  };
  */
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          {/* <img src={this.state.imageUrl} alt="" /> */}
          <button
            style={this.styles}
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            style={this.styles}
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            style={this.styles}
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
          {/*
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        */}
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
