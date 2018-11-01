import Cell from './../Business/Cell';

class GridCalculator {

    //Constructeur
    constructor(initialGrid) {
        var Grid = {};                

        initialGrid.forEach(row => {
            row.forEach(cell => {
                Grid[cell.Id] = cell;
            })
        });
    }
    
    HandleGridChange = (id) => {
        console.log(id);                 
    }    
}


export default  GridCalculator;