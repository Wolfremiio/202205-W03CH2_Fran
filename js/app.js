const list = document.querySelector('.to-dos');
const generateTemplate = (toDo) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${toDo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
`;
    list.innerHTML += html;
};

const addClick = document.querySelector('.add');

addClick.addEventListener('submit', (e) => {
    e.preventDefault();
    const newToDo = addClick.add.value.trim();
    generateTemplate(newToDo);

    if (newToDo.length) {
        generateTemplate(newToDo); // Si es un string pasa si no se escribe nada no.
        addClick.reset();
    }
});
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});
