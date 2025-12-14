// 1. adding different events for a button.
function showAlert() { // it gives a message.
    alert("Hey! take care about the button!");
}
document.getElementById("event").onclick = showAlert;
// but maybe we wanna add different events for clicking, touching etc.
// we can't add another func. so we use addEventListener from the first.
document.getElementById("events").addEventListener("click", function () { // everytime button events is on click,
    alert("Hey bud. please take care about the button."); // it gives a message.
})

// 2. getting inputs.
document.getElementById("name").addEventListener("input", function () { // everytime entry input gets an input, even a letter,
    document.getElementById("greet").innerText = "Hello " + this.value; // this.value is the balue of our input.
})
document.getElementById("colorbtn").addEventListener("click", function () { // every click on the colorbtn,
    let colortxt = document.getElementById("colortxt");
    colortxt.classList.toggle("red"); // if it has .red, it'll be removed and if not, it'll be added.
    colortxt.classList.toggle("blue"); // if it has .blue, it'll be removed and if not, it'll be added.
    if (colortxt.classList.contains("red")) { // now if it has class red, we change the innerText to "I'm red."
        colortxt.innerText = "I'm red.";
    } else {
        colortxt.innerText = "I'm blue."; // and if it doesn't have class blue, we change the innerText to "I'm blue."
    }
})

// 3. using scrolling.
window.addEventListener("scroll", function() { // everytime we scroll, it checks the amount.
    if (window.scrollY > 50) { // you can save window.scrollY in a variable, too. it's the amount of page scroll.
        document.getElementById("scrollmsg").innerText = "you did it."; // it wanted us to scroll more than 50.
    } else {
        document.getElementById("scrollmsg").innerText = "Scroll down!"; // if scrollY is less than 50, you have to scroll more.
    }
}) // let's make a button; after scrolling down more than 10, it brings us back.
window.addEventListener("scroll", () => { // another way for function.
    if (window.scrollY > 10 || window.scrollX > 10) { // scrollY = vertical scroll, scrollX = horizontal scroll.
        document.getElementById("back").classList.add("show"); // adds class show which is defined in css.
        document.getElementById("back").classList.remove("hide"); // adds class hide which is defined in css.
    } else {
        document.getElementById("back").classList.add("hide"); // the opposite.
        document.getElementById("back").classList.remove("show");
    }
})
document.getElementById("back").addEventListener("click", () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"}); // distance from top and left = 0. it moves smooth not sudden.
}) // let's make a progress bar top of the site.
let bar = document.getElementById("progressbar");
bar.style.width = window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100 + "%";
// even after refresh before scrolling, it tells where we are. explain in next part.
window.addEventListener("scroll", () => { //
    let scrolled = window.scrollY; // how much we scrolled,
    let scrollable = document.documentElement.scrollHeight - document.documentElement.clientHeight; // how much we can scroll,
    // because if scrollHeight == 3000 and clientHeigh (the page height) == 1000, we can only 2000 not 3000.
    let percent = scrolled / scrollable * 100 + "%"; // calculates the percent,
    document.getElementById("progressbar").style.width = percent; // and puts it for progressbar everytime we scroll.
})

// 4. using mouse moves.
let mouse = document.getElementById("mouse");
mouse.addEventListener("mouseover", () => { // everytime mouse pointer comes on this element,
    mouse.classList.remove("mouseout");
    mouse.classList.add("mouseover");
    mouse.innerText = "Don't Touch Me.";
})
mouse.addEventListener("mouseout", () => { // everytime mouse pointer goes out from this element space after being on it,
    mouse.classList.remove("mouseover");
    mouse.classList.add("mouseout");
    mouse.innerText = "Touch Me.";
}) // another example;
let box = document.getElementById("box");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        box.style.backgroundColor = "yellow";
    } else {
        box.style.backgroundColor = "lightGrey";
    }
})
box.addEventListener("mouseover", () => {
    box.style.fontWeight = "bold";
})
box.addEventListener("mouseout", () => {
    box.style.fontWeight = "normal";
})