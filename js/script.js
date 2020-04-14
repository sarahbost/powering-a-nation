/* Navbar */

// get the hamburger element
var hamburger = document.getElementById("hamburger");

// get the menu element
var menu = document.getElementById("menu")

// get the overlay element
var overlay = document.getElementById("overlay")

// define toggle function
function toggleMenu() {
    menu.classList.toggle('active');
    overlay.classList.toggle("active")
}

// execute toggle function from hamburger on click
hamburger.addEventListener("click", toggleMenu);

// exuecute toggle function from overlay on click
menu.addEventListener("click", toggleMenu);

/* Navbar */
overlay.addEventListener("click", toggleMenu);



/*FAQ Tabs 
Adapted from w3 schools 
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_tabs
*/

//clears the bottom of the bar from the previous content tab
clear();
/*gets each tab by ID and adds event listener to make the classname active and display block*/

//gets the button coal elec by the ID in the dom 
var elec = document.getElementById("coal-elec");

//adds a listener to the button so when it is clicked it will trigger this function 
elec.addEventListener("click", function () {
    //makes sure all content displays are set to zero 
    clear();

    //add active to the class name so that it will be displayed 
    elec.className = elec.className.replace(" active", "");

    //block display 
    document.getElementById('coalelectricity').style.display = "block"
});

//repeat for all of the buttons
var plants = document.getElementById("coal-plants");
plants.addEventListener("click", function () {
    clear();
    plants.className = plants.className.replace(" active", "");
    document.getElementById('plants').style.display = "block"
});

var effects = document.getElementById("health-effects");
effects.addEventListener("click", function () {
    clear()
    effects.className = effects.className.replace(" active", "");
    document.getElementById('healtheffects').style.display = "block"
});

var problems = document.getElementById("health-problems");
problems.addEventListener("click", function () {
    clear()
    problems.className = problems.className.replace(" active", "");
    document.getElementById('healthproblems').style.display = "block"
});

var quality = document.getElementById("air-quality");
quality.addEventListener("click", function () {
    clear()
    quality.className = quality.className.replace(" active", "");
    document.getElementById('airquality').style.display = "block"
});

var jobs = document.getElementById("coal-jobs");
jobs.addEventListener("click", function () {
    clear()
    jobs.className = jobs.className.replace(" active", "");
    document.getElementById('jobs').style.display = "block"
});

var next = document.getElementById("whats-next");
next.addEventListener("click", function () {
    clear()
    next.className = next.className.replace(" active", "");
    document.getElementById('next').style.display = "block"
});

//iterates through each column and removes the current display so the answers do not accumlate on the screen 
//call this function before adding another answer
function clear() {
    //gets all the content tabs in the DOM
    tabcontent = document.getElementsByClassName("tabcontent");

    //interates through each content and sets diplay to none so it does not show  
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
}







