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
            backgroundColor: "black",
            margin : '2px',
            display : 'inline',
            
            
        };

        return (
        <canvas style={cellstyle}>             
        </canvas>
        );
    }
}

export default Cell;