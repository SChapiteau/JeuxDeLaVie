import React, { Component } from 'react';
import './Game.css';
import GridComponent from './GridComponent.js';
import Cell from './../Business/Cell';
import GridCalculator from './../Business/GridCalculator';

class Game extends Component {
    
    constructor(props) {
        super(props);
        this.isRunning = false;
        this.gridCalculator = new GridCalculator(10,10);
        this.state = {  
                        interation: 0, 
                        gridCalculator : this.gridCalculator,
                        grid: this.gridCalculator.grid,                        
                    };                        
      }

    render() {
        return (
        <div>
            <div id="GameControls">            
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.start}>Start</button>
                <button onClick={this.loop}>Next</button>
                <label>Itération :</label>
                <label className="iterationLabel"> {this.state.interation}</label>
            </div>
            <div id="GameGrid">
                <GridComponent grid={this.state.grid} handleGridChange={this.handleChange}/>
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
        if(!this.isRunning)
        {
            this.timerID = setInterval(
                () => this.loop(),
                1500
                );
            this.isRunning = true;
        }
    }

    stop = () => {          
        clearInterval(this.timerID);
        this.isRunning = false;
    }

    loop = () => {
        try
        {
            this.gridCalculator.calculNextIteration();
            this.setState({grid: this.gridCalculator.grid });      
            this.setState({interation: this.state.interation +1});        
        }
        catch(exception)
        {
            console.log("stop after error "+exception);
            this.stop();
        }
    }

    reset = () => {
        this.setState({interation: 0});  
        clearInterval(this.timerID);
    }

    handleChange = (id) => {
        this.gridCalculator.handleGridChange(id);        
        this.setState({grid: this.gridCalculator.grid });      
    }
    

}

export default Game;