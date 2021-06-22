import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { addPerson } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personOBJ = { id: nanoid(), name, age };
    this.props.addPerson(personOBJ);
  };
  render() {
    return (
      <div>
        <h2>Person组件</h2>
        <p>Count总和为:{this.props.Count}</p>
        <input type='text' placeholder='输入名字' ref={(c) => (this.nameNode = c)} />
        <input type='text' placeholder='输入年龄' ref={(c) => (this.ageNode = c)} />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.personOBJ.map((p) => {
            return (
              <li key={p.id}>
                姓名:{p.name};年龄:{p.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ personOBJ: state.persons, Count: state.count }), {
  addPerson,
})(Person);
