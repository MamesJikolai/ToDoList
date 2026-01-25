const toDoInput = document.getElementById('todo-input')
const addBtn = document.getElementById('add-btn')
const clearBtn = document.getElementById('clear-btn')
const listContainer = document.getElementById('list-container')

toDoArr = []
function loadLocalStorage() {
    const arrFromLocalStorage = JSON.parse(localStorage.getItem('toDoArr'))
    console.log(arrFromLocalStorage)
    if (arrFromLocalStorage) {
        toDoArr = arrFromLocalStorage
        for (let i = 0; i < toDoArr.length; i++) {
            addToDo(toDoArr[i])
        }
    }
}
idCount = toDoArr.length

addBtn.addEventListener('click', function() {
    toDoArr.push(toDoInput.value)
    localStorage.setItem('toDoArr', JSON.stringify(toDoArr))
    addToDo(toDoInput.value)
    toDoInput.value = ''
    console.log(toDoArr)
})

toDoInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        toDoArr.push(toDoInput.value)
        localStorage.setItem('toDoArr', JSON.stringify(toDoArr))
        addToDo(toDoInput.value)
        toDoInput.value = ''
        console.log(toDoArr)
    }
})

clearBtn.addEventListener('click', function() {
    const checked = document.querySelectorAll('input[type="checkbox"]:checked')
    console.log(checked)
    checked.forEach(checkbox => {
        const checkedId = checkbox.id
        const checkedItem = document.querySelector(`label[for="${checkedId}"]`)
        console.log(`text to remove is ${checkedItem.textContent}`)
        toDoArr.splice(toDoArr.indexOf(checkedItem.textContent), 1)
        console.log(toDoArr)
        checkbox.closest('div').remove()
    })
    localStorage.setItem('toDoArr', JSON.stringify(toDoArr))
    // clear checked boxes
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

loadLocalStorage()