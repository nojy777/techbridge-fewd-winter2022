var submitLogin = (e) => {
    e.preventDefault();
    console.log("submitLogin e: ", e);

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(username, password);

    if(username == "" || password == "") {
        alert("Please enter username and password to login");
    } else if(username == "admin" && password == "12345678") {
        e.preventDefault();
        window.location.href = "bookList.html";
    } else {
        alert("Incorrect username or password");
        e.preventDefault();
    }

};

function searchBooks(){
    // declare variables
    var input, filter, title, book, txtValue
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    title = document.getElementsByClassName("title");
    book = document.getElementsByClassName("book");
    console.log(book);
    console.log(title);
    console.log(filter);

    // loop through book div, hide those who don't match
    for (i = 0; i < book.length; i++){
        if (book){
            txtValue = book[i].textContent || book[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1){
                book[i].style.display="";
            } else{
                book[i].style.display = "none";
            }
        }
    }
}




function homeSearch(){
    // declare variables
    var input, filter, title, book, txtValue
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    title = document.getElementsByClassName("title");
    book = document.getElementsByClassName("book");

    // loop through book div, hide those who don't match
    for (i = 0; i < book.length; i++){

        if (book){
            txtValue = book[i].textContent || book[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1){
                book[i].style.display = "inline";
            } else{
                book[i].style.display = "none";
            }
        }
    }
}


function Contact() {
    // What to do
} 
function submitLogin() {
 submit= "click";
}





