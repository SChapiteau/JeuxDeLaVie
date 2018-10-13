import React, { Component } from 'react';
import Cell from './Cell.js';

class GridComponent extends Component {
    
    constructor(props) {
        super(props);
        //this.state = {x: 10, y:10};        
        
        this.state = { 
            rows : [
                    { "id": 1, "name": "Leanne Graham" },
                    { "id": 2, "name": "Ervin Howell" },
                    { "id": 3, "name": "Clementine Bauch" },
                    { "id": 4, "name": "Patricia Lebsack" }
                ]
        }
    }

    render() {
        return (
        <div id="GridComponent">
        
            {
                //this.state.rows.map(n => <p>{n.name}</p> )
                this.state.rows.map(n => <Cell/>  )
            }
        
        </div>
        );
    }
}

export default GridComponent;