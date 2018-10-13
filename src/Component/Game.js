import React, { Component } from 'react';
import './Game.css';
import GridComponent from './GridComponent.js';

class Game extends Component {
    
    constructor(props) {
        super(props);
        this.state = {interation: 0};
            
      }

    render() {
        return (
        <div id="GameControls">
        
            <button onClick={this.reset}>Reset</button>
            <button onClick={this.stop}>Stop</button>
            <button onClick={this.start}>Start</button>
            <label>Itération :</label>
            <label className="iterationLabel"> {this.state.interation}</label>

            <div>
                <GridComponent/>
            </div>
        
        </div>
        );
    }

    componentDidMount() {        
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    start =  () =>  {        
        this.timerID = setInterval(
            () => this.loop(),
            500
            );
    }

    stop = () => {          
        clearInterval(this.timerID);
    }

    loop = () => {
        this.setState({interation: this.state.interation +1});        
    }

    reset = () => {
        this.setState({interation: 0});  
        clearInterval(this.timerID);
    }

}

export default Game;