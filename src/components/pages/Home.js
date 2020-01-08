import React, { Component } from 'react'
import homeImage from '../../img/d-foodie-basket.png'
import TopSection from '../TopSection'
import Discover from '../Discover'
import Catering from '../Catering'
import OurMenu from '../OurMenu'
import Recommend from '../Recommend'
import Review from '../Review'
import Expert from '../Expert'
import Reservation from '../Reservation'
// import Map from '../Map'
import Footer from '../Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <TopSection />
                <Discover myImg={homeImage} />
                <Catering />
                <OurMenu />
                <Recommend />
                <Review />
                <Expert />
                <Reservation />
                {/* <Map /> */}
                <Footer />
            </div>
        )
    }
}

