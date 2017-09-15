import React, { Component } from 'react';
export default class Form extends Component {
  getVal = ref => {
    return this.refs[ref].value;
  }
  fetchData = () => {
    let name = this.getVal('name');
    let age = this.getVal('age');
    let city = this.getVal('city');
    if (name == '' || age == '' || city == '') {
      return;
    }
    this.props.recordsFetcher({ 'name': name, 'age': age, 'city': city });
    document.querySelector(`#main_form`).reset();
  }
  render() {
    return (
      <div>
        <form action="JavaScript:void(0)" id="main_form" onSubmit={this.fetchData}>
          <input type="text" ref="name" placeholder="Name" />
          <input type="number" ref="age" placeholder="Age" />
          <input type="text" ref="city" placeholder="City" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}