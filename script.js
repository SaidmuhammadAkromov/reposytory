function add(text, target) {
    var span = document.createElement('span')

    span.innerText = text
    span.classList.add('span')
    target.append(span)
}


function addSpanToContainer() {
    var container = document.getElementById('container')
    var addInput = document.getElementById('addInput')
    var spans = document.getElementsByClassName('span')
    var keys = []
    
    add(addInput.value, container)
    for (let index = 0; index < spans.length; index++) {
        const span = spans[index];
        addLS(span.innerHTML, keys)
    }
    clearInput(addInput)
}


function clearInput(input) {
    input.value = ""
}


function getToInput(text, target) {    
    if (text) {
        target.value = text
    }else{
        console.log('text yoq');
    }
}  


function getSpanToEditInput() {
    var number = document.getElementById('getInput').value
    var span = document.getElementsByClassName('span')[number -1].innerHTML
    var editInput = document.getElementById('editInput')

    
    getToInput(span , editInput)
    
}


function edit(input, target) {
    target.innerHTML = input
}


function editSpan() {
    var editInput = document.getElementById('editInput')
    var spans = document.getElementsByClassName('span')
    var number = document.getElementById('getInput')
    var span = spans[number.value -1]

    edit(editInput.value, span)
    clearInput(editInput)
    clearInput(number)

}


function remove(target) {
    target.remove()
}


function removeSpan() {
    var number = document.getElementById('deleteInput').value
    var spans = document.getElementsByClassName('span')
    var span = spans[number -1]

    remove(span)
}


function addLS(value,array) {
    array.push(value)
    localStorage.setItem('key', JSON.stringify(array))
}


function getLSToSpan() {
    var container = document.getElementById('container')
    var keys = JSON.parse(localStorage.getItem('key'))
    
    for (let index = 0; index < keys.length; index++) {
        const element = keys[index];
        add(element, container)
    }
}







window.addEventListener('load', function(){
    var addBtn = document.getElementById('addBtn')
    addBtn.addEventListener('click', addSpanToContainer)

    var getBtn = document.getElementById('getBtn')
    getBtn.addEventListener('click', getSpanToEditInput)

    var editBtn = document.getElementById('editBtn')
    editBtn.addEventListener('click', editSpan)

    var deleteBtn = document.getElementById('deleteBtn')
    deleteBtn.addEventListener('click', removeSpan)

    getLSToSpan()
})