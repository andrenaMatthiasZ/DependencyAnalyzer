

const createTable = function(n) {

    const table = document.getElementById("dependencyTable");


    const rowIndices = [...Array(n)].map((_, index) => index);
    rowIndices.forEach(i => createRow( table,i, n) );

};

const createRow = function(table,i, n) {
    const row = table.insertRow();

    const firstCell = row.insertCell();
    const columnIndices = [...Array(n)].map((_,index)=>index);
    columnIndices.forEach(j => createCell(row,i,j));
    firstCell.innerHTML = "";
};

const createCell = function (row, i, columnIndex) {

    const cell = row.insertCell();
    cell.innerHTML = columnIndex + i;
};

createTable(2);