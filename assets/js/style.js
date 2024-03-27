
const value = document.getElementById("value");
let counter = 0;
function addbtn() {
    counter = counter + 1;
    document.getElementById('counter').innerHTML = counter;
}
function savebtn() {
    // value.innerHTML == 0;
    // value.innerHTML = counter;
    // value.innerHTML = value.innerHTML + + counter;
    // document.getElementById('counter').innerHTML = counter = 0;

    if (value.innerHTML == 0) {
        value.innerHTML = counter;
    } else {
        value.innerHTML = value.innerHTML + ',' + counter;
    }
    document.getElementById('counter').innerHTML = counter = 0;
}
function resetbtn() {
    counter = counter = 0;
    value.innerHTML = 0;
    document.getElementById('counter').innerHTML = counter;
}

