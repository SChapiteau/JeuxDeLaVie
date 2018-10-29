import React, { Component } from 'react';

class CellComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {backgroundColor: "transparent"};                                
    }

    render() {

        const cellstyle = {                        
            width : '50px',
            height : '50px',
            backgroundColor: this.state.backgroundColor,
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
                <canvas style={cellstyle} onClick={this.changeColor}>              
                </canvas>
                {/* <label>{this.props.id}</label> */}
            </span>
        );
    }

    changeColor = () => {
        if(this.state.backgroundColor == "transparent")
        {
            this.setState({backgroundColor: "black"});      
        }
        else
            this.setState({backgroundColor: "transparent"});   
    }
}

export default CellComponent;