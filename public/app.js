// EDIT AND DELETE BUTTONS

var removebtn = '<button><i class="fa fa-trash" aria-hidden="true"></i></button>'
var editbtn = '<button><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>'

firebase.database().ref('todos').on('child_added',function(data){
    var list = document.getElementById('todo')

  //MAKING LIST

  var iteam = document.createElement('li')
  var text = data.val().value
  iteam.innerText = text
  var buttons = document.createElement('div')
  buttons.classList.add('buttons')

  //CREATE DELETE BUTTON
  var remove = document.createElement('button')
  remove.classList.add('remove')
  remove.innerHTML = removebtn

  //  adding a remove event
  remove.addEventListener('click', deleteIteam)

  // edit button
  var complete = document.createElement('button')
  complete.classList.add('complete')
  complete.innerHTML = editbtn

  //eding a edit even
  complete.addEventListener('click', editIteam)

  //ADD EVERYTHING IN 
  buttons.appendChild(remove)
  buttons.appendChild(complete)
  iteam.appendChild(buttons)
  list.appendChild(iteam)
})
//FUNCTION TO GET THE VALUE FROM INPUT

function addIteam() {
  var iteam = document.getElementById('Iteam')
 var Database = firebase.database().ref('todos')
 var key = Database.push().key;
  var todo = {
    value : iteam.value,
    key : key
  }
  Database.child(key).set(todo)
  document.getElementById('Iteam').value = ""

}
// //FUNTION TO ADDITEAM IN LIST
// function additeamtodo(text) {

//   var list = document.getElementById('todo')

//   //MAKING LIST

//   var iteam = document.createElement('li')
//   iteam.innerText = text


//   var buttons = document.createElement('div')
//   buttons.classList.add('buttons')

//   //CREATE DELETE BUTTON
//   var remove = document.createElement('button')
//   remove.classList.add('remove')
//   remove.innerHTML = removebtn

//   //  adding a remove event
//   remove.addEventListener('click', deleteIteam)

//   // edit button
//   var complete = document.createElement('button')
//   complete.classList.add('complete')
//   complete.innerHTML = editbtn

//   //eding a edit even
//   complete.addEventListener('click', editIteam)

//   //ADD EVERYTHING IN 
//   buttons.appendChild(remove)
//   buttons.appendChild(complete)
//   iteam.appendChild(buttons)
//   list.appendChild(iteam)


// }
//DELETE ITEAM FUNCTION

function deleteIteam() {
  this.parentNode.parentNode.remove()
  
  
}

//EDIT ITEAM FUNCTION

function editIteam() {
  var val = prompt("Enter new value", this.parentNode.parentNode.firstChild.nodeValue)
  this.parentNode.parentNode.firstChild.nodeValue = val;
}










