import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.personAdd} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.personDelete(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    personAdd: (name, age) =>
      dispatch({ type: "personAdd", personData: { name: name, age: age } }),
    personDelete: id => dispatch({ type: "personDelete", personId: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
