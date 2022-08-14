const menuIcon = document.querySelector("#menuIcon");
const menuList = document.querySelector("#menuList");
// const register = document.querySelector("#register");
menuIcon.addEventListener("click", () => {
  if ((menuList.style.display = "none")) {
    menuList.style.display = "block";
    // register.style.display = "inline-block";
  } else {
    menuList.style.display = "none";
    // menuIcon.style.display = "none";
  }
});

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
