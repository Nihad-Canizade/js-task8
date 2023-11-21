for (let i = 1; i <= 20; i++) {

    let div = document.getElementById("div" + i);         

    if (i % 2 == 0) {
        div.style.backgroundColor = "red";
    } else if (i % 2 != 0) {
        div.style.backgroundColor = "yellow";
    }
    if (i % 5 == 0) {
        div.style.backgroundColor = "blue";
    }
}