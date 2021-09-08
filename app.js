var dateOfBirth = document.querySelector("#dob");
var luckyNum = document.querySelector("#luck");
var checkBtn = document.querySelector("#check");
var outputBox = document.querySelector("#output-box");




function luckyOne() {
    var dat = dateOfBirth.value;
    var sum = calculateSum(dat);
    if (sum && dat)
        compareValues(sum, luckyNum)
    else {
        outputBox.innerText = "Please Enter Required Values";
    }
}

function calculateSum(dat) {
    dat = dat.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dat.length; i++) {
        sum = sum + Number(dat.charAt(i));
    }
    return sum;
}

function compareValues(sum, luckyNum) {
    if (sum % luckyNum.value === 0) {
        outputBox.innerText = "Your Birthday is Lucky";
    } else {
        outputBox.innerText = "Sorry, you don't have a lucky brithday";
    }
}


checkBtn.addEventListener('click', luckyOne);