

const createEmptyTable = function(n) {

    const table = document.getElementById("dependencyTable");


    const rowIndices = [...Array(n + 1)].map((_, index) => index);
    const columnIndices = rowIndices;
    rowIndices.forEach(rowIndex => createRow( table,rowIndex, columnIndices) );

};

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

createEmptyTable(10);