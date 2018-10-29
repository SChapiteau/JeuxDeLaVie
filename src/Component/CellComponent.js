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
            //display : 'inline',
            border : '1px solid black', 
            //borderTop : '1px solid black',
            //borderLeft : '1px solid black',
            //borderBottom : '0px',
        };

        return (            
                <td style={cellstyle} onClick={this.changeColor}>              
                    {/* <label>{this.props.id}</label> */}
                </td>                
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