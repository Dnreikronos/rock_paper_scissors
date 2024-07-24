
let modal = document.getElementById("myModal");
let myButton = document.getElementById("myButton");
let span = document.getElementById("close")[0];


myButton.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    
