import React, { Component } from "react";
import { InputNumber } from "elements/Form";

export default class Sample extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <InputNumber
              max={30}
              suffix=" night"
              isSuffixPlural
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}
