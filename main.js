
// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit


myForm.addEventListener('submit', addItem);
function addItem(e){
  e.preventDefault();

  // Get input value
  const newItem = e.target.item.value;
  const newItem2=e.target.description.value;
  const my_obj={newItem,newItem2};
  let my_obj_serial=JSON.stringify(my_obj.email,JSON.stringify(obj))

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newItem2));
  localStorage.setItem('my_obj',my_obj_serial)
  console.log(localStorage.getItem('my_obj'))
  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
 //itemList.appendChild(li);
}