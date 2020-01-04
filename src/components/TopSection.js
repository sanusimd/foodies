import React, { Component} from 'react'
// import ReactDOM from 'react-dom'

class TopSection extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Sanusi'
    }
  }
  
  render () {
    return (
    <section className="top-section">
      <div className="info-box">
        <h3 className="main-heading"> Welcome to</h3>
        <h1 className="sub-heading">Risotaere Italian Cuisine</h1>
        <span className="line-left"></span>
        <p className="title">HOME OF THE BEST ITALIAN FOOD</p>
        <span className="line-right">---</span>
        <div className="btn-topSection">
        <a href="www.table.com" className="btn-red">Reserve A Table</a>
        </div>
      </div>
    </section>
    )
  }
}

export default TopSection;
