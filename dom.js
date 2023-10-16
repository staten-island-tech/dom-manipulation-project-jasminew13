const DOMselectors = {
    form: document.querySelector("#form"),
    box: document.getElementById("container-box"),
    albumName: document.querySelector(".album-name"),
    h2: document.querySelectorAll
};
function containerbox(box,text) {
    box.style.boxColor = "white";
    text.innerHTML = "box"
}
containerbox(DOMselectors.box, DOMselectors.text);

DOMselectors.box.insertAdjacentElement("beforeend", "#form");

DOMselectors.form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(DOMselectors.albumName.value);
    DOMselectors.h2s.forEach((el)=> el.textContent = DOMselectors.albumName.value
    );
});
DOMselectors.button.addEventListener("click", function (){
    box(DOMselectors.box, DOMselectors.text);
});
function changeLi(){
    let 
}