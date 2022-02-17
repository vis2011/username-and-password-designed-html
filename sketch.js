var firebaseConfig = {
    apiKey: "AIzaSyAzMogX2ZQUO4HnGFH0YNDh-4_d_PSPrTo",
    authDomain: "login-demo-a8de4.firebaseapp.com",
    databaseURL: "https://login-demo-a8de4-default-rtdb.firebaseio.com",
    projectId: "login-demo-a8de4",
    storageBucket: "login-demo-a8de4.appspot.com",
    messagingSenderId: "730521392542",
    appId: "1:730521392542:web:8f9384fb90b9f5ed68f28f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function save() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user_data = {
        username: username,
        password: password
    }

    database.ref().child('users/' + username).set(user_data)
}

var form = document.getElementById("form");
var index = 0;

form.addEventListener('submit', e => {
    // console.log("working");
    // var schoolIndex = ("schools/school") + index

    //database.ref(schoolIndex).set({
    //   Username: username.value,
    //   password: password.value
    // })
    e.preventDefault();
    checkInput();
})

function eyeFunction() {
    var eye = document.getElementById("password");
    var eye1 = document.getElementById("hide1");
    var eye2 = document.getElementById("hide2");

    if (eye.type === 'password') {
        eye.type = 'text';
        eye1.style.display = "block";
        eye2.style.display = "none";
    }
    else {
        eye.type = 'password';
        eye1.style.display = "none";
        eye2.style.display = "block";
    }
}

function checkInput() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username cannot be blank');
    }
    else {
        setSucess(username);
    }

    if (passwordValue === '') {
        setError(password, 'Password cannot be blank');
    }
    else {
        setSucess(password);
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }

    function setSucess(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control sucess';
    }

}

function pressed() {
    button.mousePressed(() => {
    })
}
