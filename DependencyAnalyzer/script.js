

const createTable = function(n) {

    const table = document.getElementById("dependencyTable");


    table.insertRow();
    const firstRow = table.insertRow();
    table.insertRow();

    const firstCell = firstRow.insertCell();
    firstCell.innerHTML = "first cell";
};

createTable(2);