function createGrid(number) {
	gridContainer = document.querySelector(".gridContainer")

	for (i = 0; i < number; i++) {
		boxColumn = document.createElement("div")
		gridContainer.appendChild(boxColumn)
		boxColumn.className = "boxColumn"

		for (j = 0; j < number; j++) {
			boxRow = document.createElement("div")
			boxColumn.appendChild(boxRow)
			boxRow.className = "boxRow"
			boxRow.addEventListener("mouseover", (e) => {
				e.target.style.backgroundColor = color.value
				e.target.style.borderColor = color.value
			})
		}
	}
}
createGrid(10)

function deleteGrid() {
	while (gridContainer.lastChild) {
		gridContainer.removeChild(gridContainer.lastChild)
	}
}

//button
btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
	gridSize = prompt("Select a size up to 100")
	gridSize = parseInt(gridSize)
	if (typeof gridSize == "number" && gridSize <= 100) {
		deleteGrid()
		createGrid(gridSize)
	}
})

//color picker
color = document.querySelector(".color")
