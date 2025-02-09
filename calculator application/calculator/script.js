let numberDial = document.getElementsByClassName("dials");
for (let i = 0; i < numberDial.length; i++) {
    numberDial[i].addEventListener("click", function (){
        document.getElementById("display").value += this.value;
    });
}

document.getElementById("clear").addEventListener("click", ()=> {
    document.getElementById("display").value = " ";
    document.getElementById("result").value = " ";
});

document.getElementById("answer").addEventListener("click", ()=> {
    let query = document.getElementById("display").value;
    document.getElementById("result").value = eval(query);
});

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});

function redirectPage(url) {
    document.body.classList.add("fade-out");
    window.location.href = url;
}