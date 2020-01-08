import React, { Component } from 'react'
import aboutImage from '../../img/expert-chef-01.png'
import TopBox from '../TopBox'
import Discover from '../Discover'
import Catering from '../Catering'
import Expert from '../Expert'
import Footer from '../Footer'

export default class About extends Component {
    render() {
        return (
            <div className="about-page">
                <TopBox  title="about" />
                <Discover  myImg= {aboutImage}  />
                <Catering />
                <Expert />
                <Footer />
                
            </div>
        )
    }
}
