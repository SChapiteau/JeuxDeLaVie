import React, { Component } from 'react';
import './Game.css';
import GridComponent from './GridComponent.js';
import Cell from './../Business/Cell';
import CellGenerator from './../Business/CellGenerator';

class Game extends Component {
    
    constructor(props) {
        super(props);

        var newgrid = CellGenerator.GenerateCell(10,10);
        this.state = {interation: 0, grid: newgrid };
            
      }

    render() {
        return (
        <div id="GameControls">
        
            <button onClick={this.reset}>Reset</button>
            <button onClick={this.stop}>Stop</button>
            <button onClick={this.start}>Start</button>
            <label>Itération :</label>
            <label className="iterationLabel"> {this.state.interation}</label>

            <div id="GameGrid">
                <GridComponent grid={this.state.grid}/>
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