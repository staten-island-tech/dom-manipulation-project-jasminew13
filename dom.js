const DOMselectors = {
    form: document.getElementById("#form"),
    card: document.getElementById("card"),
    points: document.querySelectorAll(".point"),
};
console.log(DOMselectors);

function containerbox(box, text) {
    box.style.boxColor = "white";
    text.innerHTML = "box";
    text.textContent = "IEUHHFAEWPOIMHGCHO";
    text.style.fontSize = "40px";
}
containerbox(DOMselectors.box, DOMselectors.text);

DOMselectors.form.addEventListener("submit", function(event) {
    let input = DOMselectors.form.value;
    event.preventDefault();
    DOMselectors.card.insertAdjacentHTML("afterend", 
    `<div class="card"><h2 class="cardheader">${DOMselectors.form.value}</h2></div></div>`);
});
DOMselectors.button.addEventListener("click", function (){
    box(DOMselectors.box, DOMselectors.text);
}); 