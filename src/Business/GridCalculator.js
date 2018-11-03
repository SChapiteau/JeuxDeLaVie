import Cell from './../Business/Cell';

class GridCalculator {

    //Constructeur
    constructor(rowNumber, columNumber) {
        this.rowNumber = rowNumber;
        this.columNumber = columNumber
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
    

    calculNextIteration = () => {        
        var nextGrid = {row: this.grid.row, column: this.grid.column};
        for(var row = 0; row < this.rowNumber;row++)
        {                    
            for(var column = 0; column < this.columNumber;column++)            
            {   
                var nextCell = this.calculNextCell(this.grid[row+"-"+column]);
                nextGrid[row+"-"+column] = nextCell;
            }
        }
        this.grid = nextGrid;
    }

    calculNextCell = (cell) => {
        //cell.IsAlive = ! cell.IsAlive;
        console.log("Calculating "+cell.Id);   
        var neighbours = this.getNeighbours(cell);
        var aliveNeibourgs = neighbours.filter(c => c.IsAlive == true);
        var isCellAlive = aliveNeibourgs.length == 3 || aliveNeibourgs.length == 4;
        var nextCell =  new Cell(cell.Row, cell.Column);
        nextCell.IsAlive = isCellAlive;
        return nextCell;
    }

    getNeighbours = (cell) => {
        var neighbours = new Array();
        for(var i = cell.Row-1; i <= cell.Row + 1; i++)
        {
            if(i<0 || i>=this.rowNumber) continue;
            for(var j = cell.Column-1; j <= cell.Column+1; j++)
            {
                if(j<0 || j>=this.columNumber) continue;
                if(! (i==cell.Row && j == cell.Column))
                {
                    neighbours.push(this.grid[i+"-"+j]);
                }
            }
        }
        return neighbours;
    }

    
}


export default  GridCalculator;