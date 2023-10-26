const DOMselectors = {
    albumname: document.querySelector("album"),
    artistname: document.querySelector("name"),
    image: document.querySelector("image"),
    card: document.querySelector("card"),
    button: querySelectorAll("button")
};
console.log(DOMselectors);

// let me cook pls
DOMselectors.addEventListener('click', function(ok){
     DOMselectors..forEach(element => {
        
     });
     }
});

const addForm = document.forms['add-album'];

addForm.addEventListener('submit', function(ok){
    ok.preventDefault();
    document.querySelector('input[type="text"]').value;
    addForm.card.insertAdjacentHTML(afterend, 
    `<div class="gallery">
    <section class="card">
    <img class=card-img src="${DOMselectors.image.value} alt="album photo">
    <h2 class="displayalbumname">${DOMselectors.albumname.value}</h2>
    <h2 class="displayartist">${"name"}</h2>
    <button class="delete">delete</button>
    </section>
</div>`);
}); 

    albumName.textContent = value;

    
/*DOMselectors.button.addEventListener("click", function (){
    box(DOMselectors.box, DOMselectors.text);
}); 

//const album = make album
//addcard(album)
//clear fields addremove button*/