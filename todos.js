let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function addItem (e){
    e.preventDefault();
    let displayValue = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    

    li.append(displayValue);
    
    var deleteBtn = document.createElement('button')


    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';


    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);
    
    itemList.append(li);
    let outputValue = document.getElementById('item')
    outputValue.value = "";


   
      
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you want to remove?')){
            
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}