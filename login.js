function init(){
    let div = document.getElementById("wrong-keys");
    div.style.visibility = 'hidden';
}

function validate(){
    let user = document.getElementById("user").value;
    let password = document.getElementById("pswd").value;
    let currentUser = validUser(user, password);
    if(currentUser){
        window.location.href = "bank.html";
        localStorage.setItem('currentCustomer', JSON.stringify(currentUser));
    }else{
        let div = document.getElementById("wrong-keys");
        div.style.visibility = 'visible';
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'That is not a valid user and password !'
        })
    }
}

function register(){
    window.location.href = "register.html";
}

document.getElementById("submit").addEventListener("click",validate);
document.getElementById("pswd").addEventListener("click",init);
document.getElementById("user").addEventListener("click",init);
document.getElementById("register").addEventListener("click",register)
