let randomPlayer = 0;


const start = document.getElementById("start");
start.addEventListener("click", (event) => {
    console.log("PPPPPP");
    event.preventDefault();
    const limit_val = document.getElementById("limit");
console.log(limit_val.value);
    sessionStorage.setItem("limit", limit_val.value);
window.location = "./index.html";

});

