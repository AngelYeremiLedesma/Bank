function init(){
    let div = document.getElementById("wrong-keys");
    div.style.visibility = 'hidden';
}

function register(){
    let name = document.getElementById("name").value;
    let user = document.getElementById("user").value;
    let password = document.getElementById("pswd").value;
    let currentUser = validUser(user, password);
    if((name == "")||(user == "")||(password == "")){
        let div = document.getElementById("wrong-keys");
        div.style.visibility = 'visible';
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid information!'
        })
    }else{
        userAccounts.push({name: name,user: user,cash: 0,password: password});
        localStorage.setItem('userAccounts', JSON.stringify(userAccounts));
        let currentUser = validUser(user, password);
        localStorage.setItem('currentCustomer', JSON.stringify(currentUser));
        window.location.href = "bank.html";
        Swal.fire({
            icon: 'success',
            text: 'We have created your account!',
            showConfirmButton: false,
            timer: 1500
        })
    } 
}

document.getElementById("submit").addEventListener("click",register);
