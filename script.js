var activeTheme = "light";
var target = document.getElementById("btn");

function toggleTheme() {
  if (activeTheme == "dark") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "grey";
    target.innerText = "Switch to Dark Theme";
    activeTheme = "light";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    target.innerText = "Switch to Light Theme";
    activeTheme = "dark";
  }
}

btn.addEventListener("click", toggleTheme);
