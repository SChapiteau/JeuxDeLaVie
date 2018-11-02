class Cell {    
    constructor(row,column) {
        
        this.Row = row;
        this.Column = column;
        this.Id = row+"-"+column; 
        this.IsAlive = false;
    }    
}

export default Cell;