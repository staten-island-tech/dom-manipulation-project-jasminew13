const DOMselectors = {
    form: document.getElementById("form"),
    card: document.getElementById("card"),
};
console.log(DOMselectors);

function cardAndtext(card, text) {
    card.style.boxColor = "red";
    text.innerHTML = "box";
    text.textContent = "ok";
    text.style.fontSize = "40px";
}
containerbox(DOMselectors.box, DOMselectors.text);

DOMselectors.form.addEventListener("submit", function(event) {
    this.querySelector(".gallery");
    event.preventDefault();
    DOMselectors.card.insertAdjacentHTML("beforeend", 
    `<div class="card"><h2 class="cardheader">${DOMselectors.form.value}</h2></div>`);
});
DOMselectors.button.addEventListener("click", function (){
    box(DOMselectors.box, DOMselectors.text);
}); 