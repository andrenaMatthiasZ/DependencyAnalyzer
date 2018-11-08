

const createEmptyTable = function(table,n) {

    


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

const fillTableRandomly = function(table) {
    table.rows.map(row => row.cells.toArray().slice(1)).slice(1).flat().map(cell => assignRandomValue(cell));
};

Object.defineProperty(HTMLCollection.prototype, "map", {
    value: function(action) {
        const indices = [...Array(this.length)].map((_, index) => index);
        return indices.map(index => action(this.item(index)));
    },
    writable: true,
    configurable: true
});

Object.defineProperty(HTMLCollection.prototype, "toArray", {
    value: function () {
        const indices = [...Array(this.length)].map((_, index) => index);
        return indices.map(index => this.item(index));
    },
    writable: true,
    configurable: true
});

const assignRandomValue = function(cell) {
    cell.innerHTML = Math.random()>0.5?1:0;
};

const table = document.getElementById("dependencyTable");
createEmptyTable(table,10);

fillTableRandomly(table);