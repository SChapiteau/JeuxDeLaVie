import React, { Component } from 'react';
import CellComponent from './CellComponent.js';

class GridComponent extends Component {
    
    constructor(props) {
        super(props);
        //this.state = {x: 10, y:10};        
        
        // this.state = { 
        //     grid : [
        //         {row : [
        //                 { "id": 1, "name": "Leanne Graham" },
        //                 { "id": 2, "name": "Ervin Howell" },
        //                 { "id": 3, "name": "Clementine Bauch" },
        //                 { "id": 4, "name": "Patricia Lebsack" }
        //             ]},
        //         {row : [
        //             { "id": 1, "name": "Leanne Graham" },
        //             { "id": 2, "name": "Ervin Howell" },
        //             { "id": 3, "name": "Clementine Bauch" },
        //             //{ "id": 3, "name": "Clementine Bauch" },
        //             { "id": 4, "name": "Patricia Lebsack" }
        //         ]},
        //         {row : [
        //             { "id": 1, "name": "Leanne Graham" },
        //             { "id": 2, "name": "Ervin Howell" },
        //             { "id": 3, "name": "Clementine Bauch" },
        //             { "id": 4, "name": "Patricia Lebsack" }
        //         ]}
        //     ]
        // }

        // this.state = { grid : props.grid}
    }

    render() {

        const gridstyle = {                        
            borderRight : 'solid black 1px',
            borderBottom : ' solid black 1px',
            display: 'inline-block',
            height : 'auto' ,
            margin :'5px'
        };

        const rowstyle = {        
            height : '50px' ,
            margin :'0px',
            padding :'0px',            
        };

        return (
            
        <div id="GridComponent" style={gridstyle}>        
            {
                //this.props.grid.map(n => <CellComponent id={n.Id}/>)
                this.props.grid.map(
                    r => <div style={rowstyle}>
                            {r.map(n => <CellComponent id={n.Id}/>) }
                         </div>
                )
                 
            }
        
        </div>
        );
    }
}

export default GridComponent;