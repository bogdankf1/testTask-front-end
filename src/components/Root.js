import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Form from './Form'

export default class Root extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false
    }
  }

  showAddForm(e) {
    this.setState({ showForm: !this.state.showForm });
  }

  render() {
    return <div>
            <div className="Root">
              <h1>ROOT</h1>
              <div onClick={::this.showAddForm}>+</div>
            </div>
            {this.state.showForm && <Form />}
           </div>
  }
}
