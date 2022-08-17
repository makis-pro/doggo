const menuIcon = document.querySelector("#menuIcon");
const menuList = document.querySelector("#menuList");
const header = document.querySelector("header");
const menu = document.querySelector("menu");
// const register = document.querySelector(".register");
menuIcon.addEventListener("click", () => {
  if ((menuList.style.display = "none")) {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
    // header.style.position = "fixed";
  }
});

// const secondDog = document.getElementsByClassName("second-dog");
// secondDog.style.marginTop = "1rem";
//**** ======NEW DOG BREEDS=========
const btn = document.querySelector("#btn");
const dogs = document.querySelector("#dogs");

btn.addEventListener("click", () => {
  if (dogs.classList.contains("hidden")) {
    dogs.classList.remove("hidden");
  } else {
    dogs.classList.add("hidden");
  }
});

const getStarted = document.querySelector("#getStarted");
// const

// ========FORM FILLING======
const eMail = document.querySelector("#eMail");
eMail.addEventListener("click", () => {
  if (eMail.contains(".com", ".yahoo", ".outlook")) {
    alert("The e-mail address is valid");
  } else {
    alert("Please input a valid E-mail account");
  }
});

// if(eMail.contains(".com")
// alert("Please input valid E-mail adress");

// };
