function insert_Row() {
	const table = document.getElementById("sampleTable");

	// Create new row
	const newRow = document.createElement("tr");

	// Create cells
	const cell1 = document.createElement("td");
	const cell2 = document.createElement("td");

	// Add text
	cell1.textContent = "New Cell1";
	cell2.textContent = "New Cell2";

	// Append cells to row
	newRow.appendChild(cell1);
	newRow.appendChild(cell2);

	// Append row to table
	table.appendChild(newRow);
}
