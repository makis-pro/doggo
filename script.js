// MENU TOGGLE BETWEEN THE OPEN and CLOSED STATES

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menu.addEventListener("click", () => {
  nav.classList.toggle("open");
  menu.classList.toggle("open");
});

// DARK THEME FUNCTION

const header = document.querySelector("header");
const section1 = document.querySelector(".section1");
const main = document.querySelector("main");
const form = document.querySelector("form");
const section2 = document.querySelector(".section2");
const footer = document.querySelector("footer");
const toggleIcon = document.querySelector("#dark-theme");
toggleIcon.addEventListener("click", () => {
  header.classList.toggle("dark-theme");
  header.style.transition = "all .3s";

  menu.classList.toggle("dark-theme");

  nav.classList.toggle("dark-theme");
  nav.style.transition = "all .3s";

  main.classList.toggle("dark-theme");
  main.style.transition = "all .3s";

  form.classList.toggle = "dark-theme";
  form.style.transition = "all .3s";

  section1.classList.toggle("dark-theme");
  section1.style.transition = "all .3s";

  section2.classList.toggle("dark-theme");
  section2.style.transition = "all .3s";

  footer.classList.toggle("dark-theme");
  footer.style.transition = "all .3s";
});

// SIGN IN AND LOGGING IN FUNCTION

function formFunction() {
  const logIn = document.querySelector("#log-in");
  const form1 = document.querySelector("#form1");
  const form2 = document.querySelector("#form2");
  logIn.addEventListener("click", () => {
    if ((form1.style.display = "none") && (form2.style.display = "block")) {
      form1.style.display = "block";
      form2.style.display = "none";
    } else {
      form1.style.display = "none";
    }
  });
}

formFunction();

// ADD TO CART VARIABLES

const addToCart = document.querySelectorAll(".add-to-cart");
const deleteCart = document.querySelectorAll(".fa-trash-can");
const dogSection = document.querySelectorAll(".dog");

// deleteCart.forEach((del) => {
//   del.style.display = "none";
// });
// ADD FUNCTION

addToCart.forEach((cart) => {
  cart.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
      cart.textContent = "Added to Cart";
      cart.style.backgroundColor = "green";
      cart.style.transition = "ease-out .3s";
      cart.style.fontStyle = "italic";
    }, 500);
    console.log(cart);

    // displayTrashBin();
  });
});

// function displayTrashBin() {
//   const dogSect = document.querySelectorAll(".dog");
//   const span = document.querySelectorAll(".dog span");

//   const icon = document.createElement("i");
//   const deleteIcon = `<i class="fa-solid fa-trash-can"></i>`;
//   icon.innerHTML += deleteIcon;
//   span.appendChild(icon);
//   dogSect.appendChild(span);
// }

// DELETE CART fUNCTION

deleteCart.forEach((trash) => {
  trash.addEventListener("click", () => {
    deleteDogSection(); //assigned the delete function to each clicked trash
  });
});

//calling the deleteDogSelection function
function deleteDogSection() {
  dogSection.forEach((dog) => {
    dog.addEventListener("click", (e) => {
      e.preventDefault();
      dog.style.display = "none";
    });
  });
  console.log("success");
}
