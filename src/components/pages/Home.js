import React, { Component } from 'react'
import TopSection from '../TopSection'
import Discover from '../Discover'
import Catering from '../Catering'
import OurMenu from '../OurMenu'
import Recommend from '../Recommend'
import Review from '../Review'

export default class Home extends Component {
    render() {
        return (
            <div>
                <TopSection />
                <Discover />
                <Catering />
                <OurMenu />
                <Recommend />
                <Review />
            </div>
        )
    }
}

