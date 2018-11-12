import extensions from './HTMLCollectionExtensions.js';

export default createEmptyTable;
export { createEmptyTable, fillTableRandomly };

extensions();

function createEmptyTable(table, n) {
    const rowIndices = [...Array(n + 1)].map((_, index) => index);
    const columnIndices = rowIndices;
    rowIndices.forEach(rowIndex => createRow( table,rowIndex, columnIndices) );
}

const createRow = function(table,rowIndex, columnIndices) {
    const row = table.insertRow();
    columnIndices.forEach(columnIndex => createCell(row,rowIndex,columnIndex));
};

const createCell = function (row, rowIndex, columnIndex) {
    
    const cell = row.insertCell();
    cell.innerHTML = getValue(rowIndex,columnIndex);
};

const getValue = function(rowIndex, columnIndex) {
    if (rowIndex === 0 && columnIndex === 0) {
        return " ";
    }
    if (rowIndex === 0) {
        return columnIndex;
    }
    if (columnIndex === 0) {
        return rowIndex;
    }

    return 0;
};

function fillTableRandomly(table) {
    const innerCells = table.rows.map(row => row.cells.toArray().slice(1)).slice(1).flat();
    innerCells.map(cell => assignRandomValue(cell));
};



const assignRandomValue = function(cell) {
    cell.innerHTML = Math.random()>0.5?1:0;
};


