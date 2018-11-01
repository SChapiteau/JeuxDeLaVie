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

        const rowstyle = {                    
            overflow: 'visible', 
        };

        return (            
        <table id="GridComponent" style={gridstyle}>        
            {                
                this.props.grid.map(
                    r => <tr style={rowstyle}>
                            {
                                r.map(n => 
                                <CellComponent id={n.Id} handleGridChange={this.props.handleGridChange}
                                            isAlive={n.IsAlive}/> ) 
                            }
                         </tr>
                )                 
            }        
        </table>
        );
    }
}

export default GridComponent;