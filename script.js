function insert_Row() {
	const table = document.getElementById("sampleTable");

	const newRow = document.createElement("tr");

	const cell1 = document.createElement("td");
	const cell2 = document.createElement("td");

	cell1.textContent = "New Cell1";
	cell2.textContent = "New Cell2";

	newRow.appendChild(cell1);
	newRow.appendChild(cell2);

	if (table.firstElementChild) {
		table.insertBefore(newRow, table.firstElementChild);
	} else {
		table.appendChild(newRow);
	}
}