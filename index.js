const containerEl = document.querySelector(".container"); // declare the big div container which contain all ather divs.

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}  // the loop for creating the 30 divs, add class "color-container" for them and put them into container div.

const colorContainerEls = document.querySelectorAll(".color-container"); // declare the all divs its same class ".color-container".

generationColor();  // calling this function.

 function generationColor(){
    colorContainerEls.forEach(  // to run this code for each div.
         (colorContainerEl) => {
         const newColor = randomColor();  // declare random color code.
         colorContainerEl.style.backgroundColor = "#" + newColor;   // to change all background color for divs.
         colorContainerEl.innerText = "#" + newColor;  // to write every color code into his div.
     })
 }

function randomColor () { // to create random code contain of 6 digit.
    const chars = '0123456789abcdef'; // declear the grouping number of code.
    const colorCodeLenght = 6; // number of code digits.
    let colorCode = '';
    for (let index = 0; index < colorCodeLenght; index++) {  // loop to create six-number random of the above group numbering.
        const randomNum = Math.floor( Math.random()* chars.length);
        colorCode += chars.substring(randomNum, randomNum +1);
    }  
    return colorCode  // to return ###### a six number.
}

