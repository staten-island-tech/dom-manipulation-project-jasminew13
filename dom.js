const DOMselectors = {
    albumname: document.querySelector("album"),
    artistname: document.querySelector("name"),
    image: document.querySelector("image"),
    card: document.querySelector("card"),
    button: querySelectorAll("button"),
    card: document.querySelector("card"),
};
DOMselectors.addForm.addEventListener('submit', function(ok){
    ok.preventDefault();
    console.log(DOMselectors.image.value, DOMselectors.artistname.albumname, DOMselectors.image.value);
    function cards (){
    cards.preventDefault();
    DOMselectors.card.insertAdjacentHTML(afterend, 
    `<div class="gallery">
    <section class="card">
    <img class=card-img src="${DOMselectors.image.value} alt="album photo">
    <h2 class="displayalbumname">${DOMselectors.albumname.value}</h2>
    <h2 class="displayartist">${DOMselectors.artistname.value}</h2>
    <button class="delete">delete</button>
    </section>
    </div>`)}
cards()
remove()
clearfields()
});
    

function clearfields()
    DOMselectors.albumname.value = ""
    DOMselectors.artistname.value = ""
    DOMselectors.picture.value = ""
    


//const album = make album
//addcard(album)
//clear fields addremove button*/

function remove(){
    let btns = document.querySelectorAll("button");
    btns.forEach((button)=>
     button.addEventListener('click', function(event){
     console.log(event.target.parentELement);
    })
  );
}
