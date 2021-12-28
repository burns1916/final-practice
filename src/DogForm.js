import React from "react";
import { dogs } from './data.js'

class DogForm extends React.Component {
  state = {
    name: "",
    breed: "",
    knownFor: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state)
  };

  handleSubmit = (e) => {
      e.preventDefault();
      dogs.push(this.state)
      this.setState({name: "",
                    breed: "",
                    knownFor: ""})
      console.log(dogs)


  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <br/>
        <label>Breed:</label>
        <input
            type="text"
            name="breed"
            onChange={this.handleChange}
            value={this.state.breed}
        />
        <br />
        <label>Known For:</label>
        <input
            type="text"
            name="knownFor"
            onChange={this.handleChange}
            value={this.state.knownFor}
        />
        <br />
        <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default DogForm;