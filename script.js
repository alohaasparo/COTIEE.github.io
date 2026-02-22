let btn = document.getElementById("btnText");
let text = document.getElementById("demo");

btn.addEventListener("click", function () {

    if (btn.textContent === "Okay") {
        text.textContent = "17 18 HAHAHHAHAHAHAHAHAHAH :P";
        btn.textContent = "BLEHHHHHH, CLICK MO THIS";
    } 
    
    else if (btn.textContent === "BLEHHHHHH, CLICK MO THIS") {
        alert("THANKYOUUU SO MUCHHH SLEEPYHEAD!! GOODLUCK IN YOUR ACADS TOMORROWWW!!     -Little Ghoul");
    }

});