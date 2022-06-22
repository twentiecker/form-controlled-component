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
  }
  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form>
          <label for="name">Name :</label>
          <input id="name" type="text" value={this.state.name} />
          <br />
          <label for="email">Email :</label>
          <input id="email" type="text" value={this.state.email} />
          <br />
          <label for="gender">Gender :</label>
          <select id="gender" value={this.state.gender}>
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
