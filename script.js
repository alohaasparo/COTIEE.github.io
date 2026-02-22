
let btn = document.getElementById("btnText");
let btnYes = document.getElementById("btnYes");
let btnNo = document.getElementById("btnNo");
let bckBtn = document.getElementById("back");
let text = document.getElementById("demo");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let gif1 = document.getElementById("gif1");
let gif2 = document.getElementById("gif2");
let gif3 = document.getElementById("gif3");
let gif4 = document.getElementById("gif4");
let gif5 = document.getElementById("gif5"); 

btn.addEventListener("click", function () {
    if (btn.textContent === "Okay") {
        text.textContent = "I kinda like the number 17 and 18. Do you agree with me?yes or yes?";
        btn.style.display = "none";
        btnYes.style.display = "inline-block";
        btnNo.style.display = "inline-block";
    }
});

btnYes.addEventListener("click", function () {
    text.textContent = "huwaww, tama ang naging desisyonnn. RAWRRR ka muna here HAHAHAHAHAHHA.   :P";
    btnYes.textContent = "BLEHHHHHH, CLICK MO THIS";
    btnYes.style.display = "inline-block";
    btnNo.style.display = "none";
    btn.style.display = "none";
    img1.style.display = "block";
    img2.style.display = "block";
    img3.style.display = "block";
    img4.style.display = "block";
    img5.style.display = "block";
    gif1.style.display = "none";
    gif2.style.display = "none";
    
    btnYes.addEventListener("click", function() {
        alert("Helu sleepyhead!! I hope you sleptwell. GOODLUCK IN YOUR ACADS TODAY AND KEEP THE GOODWORK!! Be gentle on yourself ahh and avoid being stressed. HAVE A GOOD DAY <3          -Little Ghoul");
    });
});

btnNo.addEventListener("click", function () {
    text.textContent = "okay, you clicked the no button, hindi na allowed ang headpat";

    btnYes.style.display = "none";
    btnNo.style.display = "none";
    btn.style.display = "none";
    bckBtn.style.display = "inline-block";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "none";
    gif1.style.display = "block";
    gif2.style.display = "block";
    gif3.style.display = "block";
    gif4.style.display = "block";
    gif5.style.display = "block";
});

bckBtn.addEventListener("click", function () {
    text.textContent = "I kinda like the number 17 and 18. Do you agree with me?yes or yes?";
    bckBtn.style.display = "none";
    btn.style.display = "none";
    btnYes.style.display = "inline-block";
    btnNo.style.display = "inline-block";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "none";
    gif1.style.display = "none";
    gif2.style.display = "none";
    gif3.style.display = "none";
    gif4.style.display = "none";
    gif5.style.display = "none";
});