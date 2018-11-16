import { createEmptyTable, fillTableRandomly } from "./table.js";



const table = document.getElementById("dependencyTable");
createEmptyTable(table,10);

fillTableRandomly(table);