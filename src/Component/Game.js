import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
    
    constructor(props) {
        super(props);
        this.state = {interation: 1};
            
      }

    render() {
        return (
        <div id="GameControls">
            <div >
            <button onClick={this.reset}>Reset</button>
            <button onClick={this.start}>Start</button>
            <label>Itération :</label>
            <label className="iterationLabel"> {this.state.interation}</label>
        </div>
        </div>
        );
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.loop(),
            500
          );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    start(){
        this.setState({interation: 0});   
        this.timerID = setInterval(
            () => this.loop(),
            500
            );
    }

    loop = () => {
        this.setState({interation: this.state.interation +1});        
    }

    reset = () => {
        //interaction = 0;
    }

}

export default Game;