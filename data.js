//Singleton con las cuentas de usuario
//Validación de la sesion del usuario
//Sesion del usuario logeado
//Obtención de usuario

const userAccounts = [
    {name: "Ricardo Martinez",user: "Rmartinez",cash: 500,password: "11111"},
    {name: "Shirley Sahagún",user: "Ssahagun",cash: 500,password: "22222"},
    {name: "Angel Ledesma",user: "Aledesma",cash: 500,password: "33333"}
];

//Singleton que usa el localstorage para traerse datos del usuario
function getUsers() {
    let users = localStorage.getItem('userAccounts');//Se entiende?
    if (users == undefined || users == null) {
        localStorage.setItem('userAccounts', JSON.stringify(userAccounts));
        users = localStorage.getItem('userAccounts');
    }
    return JSON.parse(users);
}

//validación regresa error o regresa correcto (true o false)
function validUser(user, password) {
    let userObject;
    let users = getUsers();
    users.forEach(element => {
        if (element.user == user && element.password == password) {
        userObject = element;
        return;
        }
    });
    return userObject;  
}

function withdraw(){
    let currentCustomer = localStorage.getItem('currentCustomer');
    let customer = JSON.parse(currentCustomer);
    if(customer.cash - document.getElementById("amount").value > 10){
        customer.cash -= document.getElementById("amount").value;
        Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Succesful transaction',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Sorry',
            text: 'You can not have less than $10.00 in your account!'
        })
    }
    updateData(customer);
}

function updateData(customer){
    let accounts = getUsers();
    accounts.forEach(element => {
        if (element.user == customer.user && element.password == customer.password) {//Compara usuario y cuentas
            element.name = customer.name;
            element.user = customer.user;
            element.cash = customer.cash;
            element.password = customer.password;
            element.expiration = customer.expiration;
            localStorage.setItem('userAccounts', JSON.stringify(accounts));
            localStorage.setItem('currentCustomer', JSON.stringify(element));
            init();
        }
    });  
}

function deposit(){
    let currentCustomer = localStorage.getItem('currentCustomer');
    let customer = JSON.parse(currentCustomer);
    if(parseInt(customer.cash) + parseInt(document.getElementById("amount").value) < 990){
        customer.cash = parseInt(customer.cash) + parseInt(document.getElementById("amount").value);
        Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Succesful transaction',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Sorry',
            text: 'You can not have more than $990.00 in your account!'
        })
    }
    updateData(customer);
}

getUsers();
