const toDoInput = document.getElementById('todo-input')
const addBtn = document.getElementById('add-btn')
const listContainer = document.getElementById('list-container')

toDoArr = []
idCount = 1

addBtn.addEventListener('click', function() {
    toDoArr.push(toDoInput.value)
    addToDo(toDoInput.value)
    toDoInput.value = ''
    console.log(toDoArr)
})

toDoInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        toDoArr.push(toDoInput.value)
        addToDo(toDoInput.value)
        toDoInput.value = ''
        console.log(toDoArr)
    }
})

function addToDo(text) {
    console.log(text)
    uniqueID = 'toDoItem' + idCount
    idCount+=1

    const toDoItemContainer = document.createElement('div')
    toDoItemContainer.className = 'item-container'

    const toDoItemCheck = document.createElement('input')
    toDoItemCheck.type = 'checkbox'
    toDoItemCheck.id = uniqueID

    const toDoItemLabel = document.createElement('label')
    toDoItemLabel.htmlFor = uniqueID
    toDoItemLabel.appendChild(document.createTextNode(text))

    toDoItemContainer.appendChild(toDoItemCheck)
    toDoItemContainer.appendChild(toDoItemLabel)
    listContainer.appendChild(toDoItemContainer)
}