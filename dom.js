const DOMselectors = {
    albumname: document.querySelector(".album"),
    artistname: document.querySelector(".name"),
    image: document.querySelector(".image"),
    gallery: document.querySelector(".card"),
    submit: document.getElementById("#submit"),
    button: document.querySelector(".button"),
};
DOMselectors.form.addEventListener('submit', function (ok) {
    ok.preventDefault();
    console.log(DOMselectors.image.value, DOMselectors.artistname.value, DOMselectors.albumname.value)
   
    function cards (){
    DOMselectors.gallery.insertAdjacentHTML("afterend", 
    <div class="card">
    <img class="card-img" src= ${DOMselectors.image.value}></img>
    <div class="displayalbumname">${DOMselectors.albumname.value}</div>
    <p><h2 class="displayartist">${DOMselectors.artistname.value}</h2></p>
    <p><button class="delete">delete</button></p>
    </div>)}
ok()
cards()
clearfields()
remove()
});

function clearfields(){
    DOMselectors.albumname.value = ""
    DOMselectors.artistname.value = ""
    DOMselectors.picture.value = ""
}


/* function remove(){
    let btns = document.querySelectorAll("button");
    btns.forEach((button)=>
     button.addEventListener('click', function(event){
     console.log(event.target.parentELement);
    })
  );
} */
