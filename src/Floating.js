import React, { Component } from 'react';
import './Floating.scss'
import Eth from './eth.png'

class Floating extends Component {
    render() {
        return (
            <div class="container">
            <div class="avatar">
                <a href="https://codepen.io/MarioDesigns/">
                    <img src={Eth} alt="Skytsunami" />
                </a>
            </div>
            <div class="content">
                <h1>Floating CSS animation</h1>
            </div>
        </div>
        );
    }
}

export default Floating;