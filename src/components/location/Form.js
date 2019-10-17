import React, {Component} from "react";

class Form extends Component {
  state = {
    input: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState(prevState => ({
      input: ""
    }));
  };

  handleChange = e => {
    const input = e.target.value;
    this.setState(prevState => ({
      input
    }));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.input}
          type="text"
          placeholder="location"
        />

        <button>+</button>
      </form>
    );
  }
}

export default Form;
