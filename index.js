function TaskAdded(){
    let To = document.getElementsByClassName('ToDo');
    let Todo = To[0].value.trim();
    let Deadline = document.getElementsByClassName('End')[0].value;
    if (Todo === ''){
        alert('Task is empty Try again');
        return;
    }
    if (Deadline === ''){
        alert('Date is empty Try Again');
        return;
    }
    let list = document.getElementsByClassName('TaskList')[0];
    let element = document.createElement('li');
    element.textContent = `${Todo} (End Date: ${Deadline})`;
    const del = document.createElement('button');
    del.textContent='Delete'
    del.onclick = function (){
        list.removeChild(element);
    }
    element.appendChild(del);
    list.appendChild(element);
    
    To[0].value = '';
    document.getElementsByClassName('End')[0].value = '';
    //TO ADD EDIT ELEMENT
}