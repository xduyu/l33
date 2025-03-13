// let password = "123";
// const userAge = 1235

// let newPassword = "newpass";


// localStorage.setItem("userPassword", password)
// localStorage.setItem("ageUser", userAge)

// localStorage.setItem("userPassword", newPassword)

// const age = localStorage.getItem("ageUser")
// // localStorage.removeItem("ageUser") Удалить определенный обьект в LocalStorage
// // localStorage.clear() Удалить все
// console.log(age)




//                                                                       task 1

// const nameData = document.getElementById('nameData');
// const ageData = document.getElementById('ageData');
// const emailData = document.getElementById('emailData');
// const addData = document.getElementById('addData');
// const nowData = document.getElementById('nowData');

// function addDataFunction(name, age, email) {
//     localStorage.setItem("name", name);
//     localStorage.setItem("age", age);
//     localStorage.setItem("email", email);
// }

// function showDataFunction() {
//     const p = document.createElement('p')
//     p.textContent = `
//         name: ${localStorage.getItem("name")}
//         age: ${localStorage.getItem("age")}
//         email: ${localStorage.getItem("email")}
//     `
//     nowData.append(p);
// }

// function updateData() {

//     showDataFunction();
// }

// addData.addEventListener('click', () => {
//     const name = nameData.value;
//     const age = ageData.value;
//     const email = emailData.value;
//     updateData();
//     addDataFunction(name, age, email);
// })

// showDataFunction();

//                                                                       task 2

// const toDoArray = ["Buy milk", "call to friend"]
// localStorage.setItem('todoarr', JSON.stringify(toDoArray))

// let savedtodo = JSON.parse(localStorage.getItem("todoarr"))

// savedtodo.forEach(el => {
//     console.log(el)
// });


//                                                                       task 3


// const changeTheme = document.getElementById('changeTheme');

// function darkTheme() {
//     document.querySelector('body').style.backgroundColor = "black"
//     document.querySelector('h1').classList.add("white")
//     document.querySelector('h1').classList.remove("black")
// }
// function ligthTheme() {
//     document.querySelector('body').style.backgroundColor = "white"
//     document.querySelector('h1').classList.add("black")
//     document.querySelector('h1').classList.remove("white")
// }

// changeTheme.addEventListener('click', () => {
//     if (changeTheme.classList.toggle("black")) {
//         ligthTheme()
//     } else {
//         darkTheme()
//     }
// })


//                                                                       task 4


const themeToggle = document.getElementById('theme-toggle');
// Theme

function changeTheme() {
    if (document.body.classList.contains("theme-ligth")) {
        document.body.classList.remove('theme-ligth');
        document.body.classList.add('theme-dark');
        localStorage.setItem('theme', "theme-dark")
    } else {
        localStorage.removeItem('theme', "theme-dark")
        localStorage.setItem('theme', "theme-ligth")
        document.body.classList.remove('theme-dark');
        document.body.classList.add('theme-ligth');
    }
}

const saveTheme = localStorage.getItem('theme')

if (saveTheme == "theme-ligth") {
    document.body.classList.remove('theme-dark');
    document.body.classList.add('theme-ligth');
} else {
    themeToggle.checked = "onclick"
    document.body.classList.remove('theme-ligth');
    document.body.classList.add('theme-dark');
}


const formName = document.getElementById('form__name');
const formPassword = document.getElementById('form__password');
const formSecondPassword = document.getElementById('form__second-password');
const formShowPassword = document.getElementById('form__show-password');
const formDate = document.getElementById('form__date');
const btn = document.getElementById('btn');



function saveData() {

}
