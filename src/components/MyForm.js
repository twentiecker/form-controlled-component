import React from "react";

class MyForm extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      name: "",
      email: "",
      gender: "Man",
    };

    // binding this context to event handler
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onGenderChangeEventHandler =
      this.onGenderChangeEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  }

  onEmailChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        email: event.target.value,
      };
    });
  }

  onGenderChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        gender: event.target.value,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form>
          <label for="name">Name :</label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.onNameChangeEventHandler}
          />
          <br />
          <label for="email">Email :</label>
          <input
            id="email"
            type="text"
            value={this.state.email}
            onChange={this.onEmailChangeEventHandler}
          />
          <br />
          <label for="gender">Gender :</label>
          <select
            id="gender"
            value={this.state.gender}
            onChange={this.onGenderChangeEventHandler}
          >
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
          </select>
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
