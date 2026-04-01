function insert_Row() {
	const table = document.getElementById("sampleTable");

	// Insert row at index 0 (TOP)
	const newRow = table.insertRow(0);

	const cell1 = newRow.insertCell(0);
	const cell2 = newRow.insertCell(1);

	cell1.textContent = "New Cell1";
	cell2.textContent = "New Cell2";
}