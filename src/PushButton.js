import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import React, { Component } from 'react';

class PushButton extends Component {
    render() {
        return (
            <div>
              <AwesomeButton href="https://wallet.coinbase.com/" size="medium"> Wallet </AwesomeButton>
              <hr/>
              <AwesomeButton
                cssModule={AwesomeButtonStyles}
                type="primary"
                href="https://5ea2212cbd4153a50b9bf8f9--heuristic-northcutt-1fcef8.netlify.app"
                target="_blank"
                >
                Buy
              </AwesomeButton>   
              <h6>Connect in 3.0 Web Browser Wallet</h6>
            </div>
        );
    }
}

export default PushButton