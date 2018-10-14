import React, { Component } from 'react';

class Cell extends Component {
    
    constructor(props) {
        super(props);
        //this.state = {x: 10, y:10};                        
    }

    render() {

        const cellstyle = {            
            //whidth : this.props.x,
            //height : this.props.y

            width : '30px',
            height : '30px',
            backgroundColor: "white",
            margin : '0px',
            //marginRigth : '0px',
            display : 'inline',
            border : '1px solid black', 
            borderRight : '0px',
            borderBottom : '0px',
        };

        return (
        <canvas style={cellstyle}>             
        </canvas>
        );
    }
}

export default Cell;