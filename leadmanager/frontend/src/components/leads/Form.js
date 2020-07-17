import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLeads } from "../../actions/leads";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  static propTypes = {
    addLeads: PropTypes.func.isRequired,
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name: name, email: email, message: message };
    this.props.addLeads(lead);
    console.log("submit");
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <div>
        <h2>Add lead</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addLeads })(Form);
