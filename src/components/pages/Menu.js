import React, {Component } from 'react'
import TopBox from '../TopBox'
import Footer from '../Footer'

class Menu extends Component{
    render(){
        return(
            <div>
                <TopBox  title="Menu"/>
                <h1> Menu Page </h1>
                <Footer/>
            </div>
        )
    }
}

export default Menu;
