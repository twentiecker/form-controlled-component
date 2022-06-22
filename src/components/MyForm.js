import React from "react";

class MyForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form>
          <label for="name">Name :</label>
          <input id="name" type="text" />
          <br />
          <label for="email">Email :</label>
          <input id="email" type="text" />
          <br />
          <label for="gender">Gender :</label>
          <select id="gender">
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
