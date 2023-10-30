const DOMselectors = {
    albumname: document.getElementById(".album"),
    artistname: document.getElementById(".name"),
    image: document.getElementById(".image"),
    card: document.getElementById(".card"),
    submit: document.getElementById(".submit"),
    button: document.getElementById(".button"),
};
DOMselectors.submit.addEventListener('submit', function (ok) {
    ok.preventDefault();
    console.log(DOMselectors.image.value, DOMselectors.artistname.albumname, DOMselectors.image.value)
    
    function cards (){
    DOMselectors.gallery.insertAdjacentHTML("afterend", 
    `<section class="card">
    <img src=${DOMselectors.image.value} class=card-img>
    <h2 class="displayalbumname">${DOMselectors.albumname.value}</h2>
    <h2 class="displayartist">${DOMselectors.artistname.value}</h2>
    <button class="delete">delete</button>
    </section>`
    )}
cards()
clearfields()
remove()
});
    
function clearfields(){
    DOMselectors.albumname.value = ""
    DOMselectors.artistname.value = ""
    DOMselectors.picture.value = ""
}


function remove(){
    let btns = document.querySelectorAll("button");
    btns.forEach((button)=>
     button.addEventListener('click', function(event){
     console.log(event.target.parentELement);
    })
  );
}
