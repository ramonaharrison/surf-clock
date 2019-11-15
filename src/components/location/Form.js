import React, {Component} from "react";

class Form extends Component {
  state = {
    input: this.props.input
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  handleChange = e => {
    const input = e.target.value;
    this.setState(prevState => ({
      input
    }));
  };

  inputStyle = {
    backgroundColor: '#c06c84',
    opacity: 0.65,
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    fontSize: '20px'
  }

  buttonStyle = {
    borderRadius: '50%',
    backgroundColor: '#c06c84',
    border: 'none',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px'
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          style={this.inputStyle}
          onChange={this.handleChange}
          value={this.state.input}
          type="text"
        />
      </form>
    );
  }
}

export default Form;
