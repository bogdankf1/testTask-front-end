import React, { Component } from 'react'
import Item from './Item'

const FileInput = () => (
  <div className="file-field input-field">
    <div className="btn">
      <span>File</span>
      <input type="file" id="file" />
    </div>
    <div className="file-path-wrapper">
      <input className="file-path validate" type="text" />
    </div>
  </div>
);

const TitleInput = () => (
  <input placeholder="Item title" id="title" type="text" className="validate"/>
);

class Form extends Component {
  constructor() {
    super();
    this.state = {
      showItem : false,
      showForm : true
    }
  }

  addItem(e) {
    this.setState({
      showItem: true,
      showForm: false
    })
  }

  render() {
    return <div>
            <div className="Form">
              <h2>Add new item</h2>
              <form>
                <TitleInput />
                <FileInput />
                <a onClick={::this.addItem} className="waves-effect waves-light btn save-button">Save</a>
              </form>
            </div>
            {this.state.showItem && <Item />}
           </div>
  }
}

export default Form
