function greetUser() {
    let name = document.getElementById("name").value; // Get the value from input field
    let greetingMessage = document.getElementById("greetingMessage");

    if (name) {
        greetingMessage.innerHTML = "Glad to have you, <span class='highlight-name'>" + name + "!</span>"; // Wrap name in a span with class 'highlight-name'
        document.getElementById("name").value = ""; // Clear the input field after submission
    } else {
        greetingMessage.textContent = "Please enter your name!";
    }
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
