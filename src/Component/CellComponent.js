import React, { Component } from 'react';

class CellComponent extends Component {
    
    constructor(props) {
        super(props);
        //this.state = {x: 10, y:10};                        
    }

    render() {

        const cellstyle = {            
            //whidth : this.props.x,
            //height : this.props.y

            width : '50px',
            height : '50px',
            backgroundColor: "transparent",
            margin : '0px',            
            //marginRigth : '0px',
            display : 'inline',
            border : 'transparent', 
            borderTop : '1px solid black',
            borderLeft : '1px solid black',
            //borderBottom : '0px',
        };

        return (
            <span>
                <canvas style={cellstyle}>              
                </canvas>
                {/* <label>{this.props.id}</label> */}
            </span>
        );
    }
}

export default CellComponent;