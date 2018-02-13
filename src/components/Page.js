import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component {
  onYearBtnClick(event) {
    this.props.setYear(+event.target.innerText)
  }
  render() {
    const { year, photos } = this.props
    return <div>
               <div>
                   <button onClick={::this.onYearBtnClick}>2018</button>
                   <button onClick={::this.onYearBtnClick}>2017</button>
                   <button onClick={::this.onYearBtnClick}>2016</button>
               </div>
               <h3>Year: {year}</h3>
               <p>You shot {photos.length} photos!</p>
           </div>
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired
}
