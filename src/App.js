import React, { Component } from 'react';
import Form from './components/form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    }
  }
  saveData = student => {
    let students = this.state.students;
    students.push(student);
    this.setState({ 'students': students });
    console.log(this.state.students);
  }
  render() {
    return (
      <div>
        <Form recordsFetcher={this.saveData} />
      </div>
    );
  }
}

export default App;
