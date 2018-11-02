import React, { Component } from 'react';
import CellComponent from './CellComponent.js';

class GridComponent extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        const gridstyle = {                        
            borderRight : 'solid black 1px',
            borderBottom : ' solid black 1px',            
            margin :'5px',
            overflow : 'auto',
            borderSpacing: '0',
        };        

        return (                           

        <table id="GridComponent" style={gridstyle}>        
            {this.createTable()}        
        </table>
        );
    }

    createTable = () =>{
        var rowstyle = {                    
            overflow: 'visible', 
        };

        var listOfrows = [];
        for(var r =0; r< this.props.grid.row; r++)
        {
            let row = [];
            for(var c=0; c< this.props.grid.column; c++)
            {
                var cellId = r+"-"+c;
                var cell = this.props.grid[cellId];
                row.push(<CellComponent key={cell.Id} id={cell.Id} handleGridChange={this.props.handleGridChange}
                    isAlive={cell.IsAlive}/>)
            }
            listOfrows.push(<tr style={rowstyle}>{row}</tr>)
        }
        return listOfrows;
    }
}

export default GridComponent;