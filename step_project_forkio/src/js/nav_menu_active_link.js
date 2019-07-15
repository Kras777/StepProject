



// Get the container element
let btnContainer = document.getElementById("navBarMenu");

// Get all buttons with class="btn" inside the container
let btns = btnContainer.getElementsByClassName("navbar-menu-link");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("navbar-menu-link-active");
        current[0].className = current[0].className.replace(" navbar-menu-link-active", "");
        this.className += " navbar-menu-link-active";
    });
}
