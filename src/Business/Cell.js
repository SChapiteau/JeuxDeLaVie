class Cell {
    
    constructor(props) {
        super(props);
        //this.state = {x: 10, y:10};        
        
        this.state = { 
            names : [
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
                this.state.names.map(n => <p>{n.name}</p> )
            }
        
        </div>
        );
    }
}

export default Cell;