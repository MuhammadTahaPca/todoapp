function addTodo(){

    var todo_item = document.getElementById("todo-item")
    

    // li tag with text
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.setAttribute("class","liststyle")
    li.appendChild(liText)

    // create delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)

    // create edit button

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.setAttribute("class","btn")

    li.appendChild(delBtn)
    li.appendChild(editBtn)
    list.appendChild(li)
    todo_item.value = ""
    console.log(li)
}
function deleteItem(e){

    e.parentNode.remove()
}

function editItem(e){
  console.log(e.parentNode.firstChild.nodeValue)  
  var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)

  e.parentNode.firstChild.nodeValue = val;
}

function deleteAll(){
    list.innerHTML = ""
}

var list = document.getElementById("list");




