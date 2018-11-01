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
            borderTop : '1px solid black',
            borderLeft : '1px solid black',            
        };

        return (            
                <td style={cellstyle} onClick={this.clickOnCell}>                                  
                </td>                
        );
    }

    clickOnCell = () => {
        this.props.handleGridChange(this.props.id);
        if(this.state.backgroundColor == "transparent")
        {
            this.setState({backgroundColor: "black"});      
        }
        else
            this.setState({backgroundColor: "transparent"});   
    }
}

export default CellComponent;