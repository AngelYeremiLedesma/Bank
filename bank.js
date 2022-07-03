function init(){
    let currentCustomer = localStorage.getItem('currentCustomer');
    let customer = JSON.parse(currentCustomer);
    console.log(customer);
    document.getElementById("name").innerText = "Welcome, " + customer.name;
    document.getElementById("balance").innerText = parseFloat(customer.cash).toFixed([2]);
    if(customer.cash == 0){
        Swal.fire({
            title: 'Please, deposit $10 to continue',
            showDenyButton: true,
            confirmButtonText: 'Deposit $10',
            denyButtonText: `Log out`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Great!', '', 'success')
                document.getElementById("amount").value = 10;
                deposit();
                document.getElementById("amount").value = "";
            } else if (result.isDenied) {
                window.location.href = "login.html";
            }
        })
    }
    for(let i= 1; i<10; i++){
        document.getElementById(i*100).addEventListener("click",writeNumber);
    }
}

function toggleView(){
    if(document.getElementById("balance").style.visibility == 'hidden'){
        document.getElementById("eye").innerHTML = '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="3" y1="3" x2="21" y2="21" /><path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" /><path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />';
        document.getElementById("balance").style.visibility = 'visible';
    }
    else{
        document.getElementById("eye").innerHTML = ' <path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="2" /><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />';
        document.getElementById("balance").style.visibility = 'hidden';
    }
}

function writeNumber(evento){
    document.getElementById("amount").value = evento.target.innerText;
}
    
init();

document.getElementById("withdraw").addEventListener("click",withdraw);
document.getElementById("deposit").addEventListener("click",deposit);
document.getElementById("eye").addEventListener("click",toggleView);



