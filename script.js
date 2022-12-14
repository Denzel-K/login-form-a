//Selection btwn Login & registration

const log = document.querySelector('.info_a');
const registration = document.querySelector('.info_b');
const login_opt = document.querySelector('#login');
const reg_opt = document.querySelector('#register');
const selected = document.querySelector('.selected');


login_opt.addEventListener ('click', ()=> {
    login_opt.classList.add ("active");
    reg_opt.classList.remove ("active");

    log.classList.remove ("hidden");
    registration.classList.add ("hidden");

    selected.innerHTML = "Login";
})

reg_opt.addEventListener ('click', ()=> {
    login_opt.classList.remove ("active");
    reg_opt.classList.add ("active");

    log.classList.add("hidden");
    registration.classList.remove ("hidden");

    selected.innerHTML = "Registration";
})


//Theme change

const td_a = document.querySelector('.td1');
const td_b = document.querySelector('.td2');
const td_c = document.querySelector('.tl1');
const td_d = document.querySelector('.tl2');
const body = document.querySelector('body');


td_a.addEventListener ('click', () => {
        body.classList.remove ('theme_d2');
        body.classList.remove ('theme_l1');
        body.classList.remove ('theme_l2');

        td_a.classList.add ("themed");
        td_b.classList.remove ("themed");
        td_c.classList.remove ("themed_b");
        td_d.classList.remove ("themed_b");
})

td_b.addEventListener ('click', () => {
    body.classList.add ('theme_d2');
    body.classList.remove ('theme_l1');
    body.classList.remove ('theme_l2');

    td_a.classList.remove ("themed");
    td_b.classList.add ("themed");
    td_c.classList.remove ("themed_b");
    td_d.classList.remove ("themed_b");
})

td_c.addEventListener ('click', () => {
    body.classList.add ('theme_l1');
    body.classList.remove ('theme_d2');
    body.classList.remove ('theme_l2');

    td_a.classList.remove ("themed");
    td_c.classList.add ("themed_b");
    td_b.classList.remove ("themed");
    td_d.classList.remove ("themed_b");
})

td_d.addEventListener ('click', () => {
    body.classList.add ('theme_l2');
    body.classList.remove ('theme_d2');
    body.classList.remove ('theme_l1');

    td_a.classList.remove ("themed");
    td_d.classList.add ("themed_b");
    td_b.classList.remove ("themed");
    td_c.classList.remove ("themed_b");
})


//Reload using home button & "back to login" button

const home = document.querySelector('.home');
const home_b = document.querySelector('.home_b');

home.addEventListener ('click', ()=> {
    window.location.reload(true);
})

home_b.addEventListener ('click', ()=> {
    window.location.reload(true);
})



// EMAIL VALIDITY CHECK & PASSWORD CONFIRMATION

const submit = document.querySelector('#btn_b');

submit.addEventListener('click', submition);

function submition() {
    var email = document.getElementById('mail').value;
    var text = document.getElementById('validity');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    const password = document.querySelector('#password').value;
    const confirm = document.querySelector('#confirm').value;
    const confirmation = document.querySelector('.confirmation');
    const userName = document.querySelector ('#user').value;


    if (email.match(pattern)) {
        text.innerHTML ="";
        text.style ="padding: 0; width: 100%; border-top: none";
    }
    else if (email == "") {
        text.innerHTML ="Required <span><img src='Images/icon-error.svg' alt='error'></span>";
        text.style = "display: flex; justify-content: space-between; align-items: center; font-size: 14px; background-color: hsl(0, 94%, 66%); color: white; padding: 8px; width: 92%";
    }
    else {
        text.innerHTML ="Invalid <span><img src='Images/icon-error.svg' alt='error'></span>";
        text.style = "display: flex; justify-content: space-between; align-items: center; font-size: 14px; background-color: hsl(0, 94%, 66%); color: white; padding: 8px; width: 92%";
    }

    
    if (password === confirm) {
        confirmation.innerHTML ="";
        confirmation.style ="padding: 0; width: 100%; border-top: none";
    }
    else if (password !== confirm) {
        confirmation.innerHTML ="passwords don't match <span><img src='Images/icon-error.svg' alt='error'></span>";
        confirmation.style = "display: flex; justify-content: space-between; align-items: center; font-size: 14px; background-color: hsl(0, 94%, 66%); color: white; padding: 8px; width: 86%"
    }
    else{
        confirmation.innerHTML ="Required <span><img src='Images/icon-error.svg' alt='error'></span>";
        confirmation.style = "display: flex; justify-content: space-between; align-items: center; font-size: 14px; background-color: hsl(0, 94%, 66%); color: white; padding: 8px; width: 86%";
    }

    //Display Thank you card

    let thanks = document.querySelector('.info_c');
    let options = document.querySelector('.options');
    let media = document.querySelector('.media');

    if (email.match(pattern) && password === confirm) {

        thanks.style = "display: block";
        log.style = "display: none";
        registration.style = "display: none";
        options.style = "display: none";
        media.style = "display: none";
        localStorage.setItem('name', userName);
        localStorage.setItem('pw', password);
        alert('Your account has been created');
    }
    else {
        thanks.style = "display: none";
    }
}


//FORGOT PASSWORD ACTION

const forgot = document.querySelector('.forgot');

forgot.addEventListener ('click', ()=> {
    const head = document.querySelector ('h1');
    let options = document.querySelector('.options');
    let media = document.querySelector('.media');
    let reset = document.querySelector('.info_d');

    head.innerHTML = "<span>Password</span><span> Reset</span>";
    reset.classList.add ('reset');

    log.style = "display:none";
    registration.style = "display:none";
    options.style = "display:none";
    media.style = "display:none";
})



// SHOW | HIDE PASSWORD

const shows = document.querySelectorAll('.show');
const reveals = document.querySelectorAll('.reveal');
const passwords = document.querySelectorAll('.inputs');

shows.forEach (show => {
    show.addEventListener ('click', ()=> {

        passwords.forEach (password => {
            if (password.type === 'password') {
                password.setAttribute ('type', 'text');

                reveals.forEach (reveal => {
                    reveal.src ="Images/hide.svg";
                })
            }
            else {
                password.setAttribute ('type', 'password');

                reveals.forEach (reveal => {
                    reveal.src ="Images/show.svg";
                })
            }
        })
    });
})



//STORE USER INPUT IN LOCAL STORAGE 
/*let info = [];

function store() {
    let userdata = {
        id: Date.now(),
        username: document.querySelector('#user').value,
        email: document.querySelector('#mail').value,
        pw: document.querySelector('#password').value
    }

    info.push(userdata);
    document.querySelector ('form').reset();

    localStorage.setItem ('User', JSON.stringify(info))
}

document.addEventListener ('DOMContentLoaded', ()=> {
    submit.addEventListener ('click', store);
})*/


//AUTHENTICATE WITH LOGIN

const loginPress = document.querySelector('#btn_a');

loginPress.addEventListener ('click', ()=> {

    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('username');
    var userPw = document.getElementById('pass');

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
})