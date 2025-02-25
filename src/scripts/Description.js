window.onload = function() {
    const Titles = ["PRATHAM PETWAL", "WEB DEVELOPER", "MERN DEVELOPER","SOFTWARE ENGINEER"];
    const nameElement = document.getElementById("name");

    let index = 0;

    setInterval(() => {
        nameElement.classList.add("name_effect");
        nameElement.innerHTML = Titles[index]; // Update text
        index = (index + 1) % Titles.length;  // Loop back when reaching the end
    }, 3000); // Change every 2 seconds
};