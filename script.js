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



// EMAIL VALIDITY CHECK & PASSWORD CONFIRMATION

const submit = document.querySelector('#btn_b');

submit.addEventListener('click', submition);

function submition() {
    var email = document.getElementById('mail').value;
    var text = document.getElementById('validity');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    const password = document.querySelector('#password');
    const confirm = document.querySelector('#password_b');
    const confirmation = document.querySelector('.confirmation');


    if (email.match(pattern)) {
        text.innerHTML ="";
        text.style ="padding: 0; width: 100%; border-top: none";
    }
    else {
        text.innerHTML ="Invalid <span><img src='Images/icon-error.svg' alt='error'></span>";
        text.style = "display: flex; justify-content: space-between; align-items: center; font-size: 14px; background-color: hsl(0, 94%, 66%); color: white; padding: 8px; width: 92%";
    }
    if (email == "") {
        text.innerHTML ="Required <span><img src='Images/icon-error.svg' alt='error'></span>";
        text.style = "display: flex; justify-content: space-between; align-items: center; font-size: 14px; background-color: hsl(0, 94%, 66%); color: white; padding: 8px; width: 92%";
    }


    if (password === confirm) {
        confirmation.innerHTML ="";
        confirmation.style ="padding: 0; width: 100%; border-top: none";
    }
    else{
        confirmation.innerHTML ="passwords don't match <span><img src='Images/icon-error.svg' alt='error'></span>";
        confirmation.style = "display: flex; justify-content: space-between; align-items: center; font-size: 14px; background-color: hsl(0, 94%, 66%); color: white; padding: 8px; width: 86%";
    }
}

