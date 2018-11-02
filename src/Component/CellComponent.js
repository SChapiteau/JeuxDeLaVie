import React, { Component } from 'react';

class CellComponent extends Component {
    
    constructor(props) {
        super(props);
                                      
    }

    render() {

        if(this.props.isAlive)
            this.backgroundColor= "black";                                
        else
            this.backgroundColor = "transparent";  

        const cellstyle = {                        
            width : '50px',
            height : '50px',
            backgroundColor: this.backgroundColor,
            margin : '0px',                        
            borderTop : '1px solid black',
            borderLeft : '1px solid black',            
        };

        return (            
                <td style={cellstyle} onClick={this.clickOnCell} key={this.props.id}>                                  
                </td>                
        );
    }

    clickOnCell = () => {
        this.props.handleGridChange(this.props.id);
        
        //A passer en commentaire
        // if(this.state.backgroundColor == "transparent")
        // {
        //     this.setState({backgroundColor: "black"});      
        // }
        // else
        //     this.setState({backgroundColor: "transparent"});   
    }
}

export default CellComponent;