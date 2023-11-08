const DOMselectors = {
    album: document.querySelector(".album"),
    name: document.querySelector(".name"),
    image: document.querySelector(".image"),
    card: document.querySelector(".card"),
    gallery: document.querySelector(".gallery"),
    form: document.querySelector("#form"),
    deletecard: document.querySelector("#deletecard")
}

DOMselectors.form.addEventListener("submit", function (event) {
 event.preventDefault(); 
 console.log(DOMselectors.image.value,DOMselectors.name.value, DOMselectors.album.value)

   function cardcard (){
     DOMselectors.gallery.insertAdjacentHTML("beforeend", `
     <div class="card">
     <img class="card-img" src= ${DOMselectors.image.value}>
     <div class="displayalbumname">${DOMselectors.album.value}</div>
     <h2 class="displayartist">${DOMselectors.name.value}</h2>
     <button class="delete" type ="button">delete</button>
     </div>
     `)}
cardcard()
clearfields()
deletecard()
});

 function clearfields(){
    DOMselectors.album.value = ""
    DOMselectors.name.value = ""
    DOMselectors.image.value = ""
}


function deletecard () {
    const button = document.querySelectorAll(".delete");
    button.forEach((button) => 
    button.addEventListener ("click", function (button){
        button.target.parentElement.remove()}
        ))};
