function addTaskToList(){
    event.preventDefault(); // this stops the page refrehsing after clicking submit
    const form = document.querySelector('[data-task]')
    const ul = document.querySelector('[data-ul]')

    const value = task.value
    const li = document.createElement('li')
    let input = document.createElement("input"); //this will create an input
    input.type = "checkbox"; //this specifies the checkbox input
    li.appendChild(input); //this will add the checkbox top the list
    ul.appendChild(li) 
    li.appendChild(document.createTextNode(value)); //these two lines add a li element to the chekcbox
    document.getElementById('task').value=null // this clear the text box after clicking submit
}