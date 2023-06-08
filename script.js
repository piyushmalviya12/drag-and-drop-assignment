const items = document.querySelectorAll('.item');
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const successMessage = document.createElement('p');
successMessage.className = 'success-message';
successMessage.innerText = 'Item dropped successfully!';

let draggedItem = null;

// Add event listeners to draggable items
items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

// Add event listeners to containers
container1.addEventListener('dragover', dragOver);
container1.addEventListener('dragenter', dragEnter);
container1.addEventListener('dragleave', dragLeave);
container1.addEventListener('drop', dragDrop);

container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', dragDrop);

// Drag and Drop Functions
function dragStart() {
  draggedItem = this;
  this.classList.add('dragging');
}

function dragEnd() {
  this.classList.remove('dragging');
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function dragDrop() {
  this.classList.remove('hovered');
  this.appendChild(draggedItem);
  this.appendChild(successMessage);
}

function resetContainers() {
  container1.innerHTML = `
    <h2>Container 1</h2>
    <div class="item" draggable="true">Item 1</div>
    <div class="item" draggable="true">Item 2</div>
    <div class="item" draggable="true">Item 3</div>
  `;
  container2.innerHTML = `
    <h2>Container 2</h2>
  `;
  successMessage.remove();
}
