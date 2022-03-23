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
