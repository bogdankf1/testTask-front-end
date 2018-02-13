import React, { Component } from 'react'
import Root from '../components/Root'
import Form from '../components/Form'
import User from '../components/User'
import Page from '../components/Page'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/PageActions'

class App extends Component {
  render() {
    const { user, page } = this.props
    const { setYear } = this.props.pageActions
    return (
      <div className="App">
        <Root />
        <User name={user.name} />
        <Page year={page.year} photos={page.photos}  setYear={setYear} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
