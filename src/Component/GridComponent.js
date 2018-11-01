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
            //display: 'inline',
            // height : 'auto' ,
            margin :'5px',
            overflow : 'auto',
            borderSpacing: '0',
        };

        const rowstyle = {        
            // height : '50px' ,
            // margin :'0px',
            // padding :'0px',   
            // display : 'inline' ,       
            overflow: 'visible', 
        };

        return (            
        <table id="GridComponent" style={gridstyle}>        
            {
                //this.props.grid.map(n => <CellComponent id={n.Id}/>)
                this.props.grid.map(
                    r => <tr style={rowstyle}>
                            {
                                r.map(n => 
                                <CellComponent id={n.Id} handleGridChange={this.props.handleGridChange}
                                callback={this.renderTest}/> ) 
                            }
                         </tr>
                )                 
            }        
        </table>
        );
    }

    renderTest = () => {
        console.log("Test");
    }
}

export default GridComponent;