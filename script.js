function add(text) {
    var container = document.getElementById('container')
    var span = document.createElement('span')

    span.innerText = text
    span.classList.add('span')
    container.append(span)
}
function addSpanToContainer() {
    var addInput = document.getElementById('addInput')
    add(addInput.value)
    clearInput(addInput)
}
function clearInput(input) {
    input.value = ""
}
function get(text,target) {    
    target.value = text
}

function getSpanToEditInput() {
    var spans = document.getElementsByClassName('span')
    var number = document.getElementById('getInput').value
    const editInput = document.getElementById('editInput')
    

    get(spans[number -1].innerHTML , editInput)
}


window.addEventListener('load', function(){
    var addBtn = document.getElementById('addBtn')
    addBtn.addEventListener('click', addSpanToContainer)

    var getBtn = document.getElementById('getBtn')
    getBtn.addEventListener('click', getSpanToEditInput)
})