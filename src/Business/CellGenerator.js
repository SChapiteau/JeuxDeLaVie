import Cell from './../Business/Cell';

class CellGenerator {
    static GenerateCell(rowNumber, columNumber)
    {
        var grid = new Array();
        for(var row = 0; row < rowNumber;row++)
        {
            var currentrow = new Array();            
            for(var column = 0; column < columNumber;column++)            
            {
                var cell =new Cell('Black',""+row+"-"+column)
                currentrow.push(cell);
            }
            grid.push(currentrow)
        }
        return grid;
    }
}

//export Cell;
export default  CellGenerator;