import Cell from './../Business/Cell';

class GridCalculator {

    //Constructeur
    constructor(rowNumber, columNumber) {
        this.grid = this.generateCell(rowNumber, columNumber) ;              
    }

    generateCell (rowNumber, columNumber) 
    {
        var grid = {row: rowNumber, column: columNumber};
        for(var row = 0; row < rowNumber;row++)
        {                    
            for(var column = 0; column < columNumber;column++)            
            {                
                var cell = new Cell(row,column)
                grid[cell.Id] = cell;
            }            
        }
        return grid;
    }
    
    handleGridChange = (id) => {
        console.log("Hello "+id);   
        this.grid[id].IsAlive = !this.grid[id].IsAlive
    }    
}


export default  GridCalculator;