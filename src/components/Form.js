import React, { Component } from 'react'
import Item from './Item'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      showItem : false
    }
  }

  addItem(e) {
    this.setState({ showItem: true})
  }

  render() {
    return <div>
            <div className="Form">
              <h2>Add new item</h2>
              <form>
                <input placeholder="Item title" id="title" type="text" className="validate"/>
                <div className="file-field input-field">
                  <div className="btn">
                    <span>File</span>
                    <input type="file" id="file" />
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                  </div>
                </div>
                <a onClick={::this.addItem} className="waves-effect waves-light btn save-button">Save</a>
              </form>
            </div>
            {this.state.showItem && <Item />}
           </div>
  }
}

export default Form
