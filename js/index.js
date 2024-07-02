var bookNameInput = document.getElementById('bookName');
var bookUrlInput = document.getElementById('bookUrl');
var submitBtn = document.getElementById('submitBtn');
var visitBtn = document.getElementById('visitBtn');
var box = document.getElementById('box');
var bookList = [];
var bool ;

if (localStorage.getItem('bookList') !== null) {
    bookList = JSON.parse(localStorage.getItem('bookList'));
    display()
}

submitBtn.onclick = function () {
    if(bool == true){
      addBook();  
    }
    else{
        box.classList.remove('d-none');
    }
    
}


function addBook() {
    var book = {
        bUrl: bookUrlInput.value,
        bName: bookNameInput.value
    }
    bookList.push(book);
    localStorage.setItem('bookList', JSON.stringify(bookList));
    display();
    clearForm();
}

function display() {
    var box = ``;
    for (var i = 0; i < bookList.length; i++) {
        box += `  <tr>
                       <td class="fw-medium">${i + 1}</td>
                       <td class="fw-medium">${bookList[i].bName}</td>
                       <td><button class="btn btn-success btn-sm ">
                       <a href = "${bookList[i].bUrl}">Visit <i class="fa-solid fa-eye pe-2"></i></a>
                       </i></button></td>
                       <td><button onClick="deleteBook(${i})" class="btn btn-danger btn-sm ">Delete <i class="fa-solid fa-trash-can"></i></button></td>
                    </tr>`
    }
    document.getElementById('bodyTable').innerHTML = box;
}

function clearForm() {
    bookNameInput.value = null;
    bookUrlInput.value = null;
}

function deleteBook(deletedindex) {
    bookList.splice(deletedindex, 1);
    localStorage.setItem('bookList', JSON.stringify(bookList));
    display();
}

function boxdNone(){
box.classList.add('d-none');
}

function validateInput(element){
    var regex = {
          bookName : /^([A-Z]|[a-z]){3,}$/,
          bookUrl : /^([A-Z]|[a-z]){3,}\.com$/
    }
    if(regex[element.id].test(element.value) == true){
        (element).classList.add('is-valid');
        (element).classList.remove('is-invalid');
        bool = true;
    }
    else{
        (element).classList.add('is-invalid');
        (element).classList.remove('is-Valid');
        bool = false;
    }
}
