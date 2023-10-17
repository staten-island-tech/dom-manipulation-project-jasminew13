const DOMselectors = {
    form: document.getElementById("#form"),
    box: document.getElementById("container-box"),
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


DOMselectors.form.addEventListener("submit", function(event){
    containerbox(DOMselectors.box, DOMselectors.text);
    event.preventDefault();
    console.log(DOMselectors.albumName.value);
    DOMselectors.points.forEach((el)=> el.textContent = DOMselectors.point.value
    );
});
DOMselectors.button.addEventListener("click", function (){
    box(DOMselectors.box, DOMselectors.text);
}); 