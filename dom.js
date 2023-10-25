const DOMselectors = {
 /*   artistname: document.getElementById("name"),
    img: document.getElementById("image"),
    card: document.getElementById("card"),*/
};
console.log(DOMselectors);

// let me cook pls
list.addEventListener('click', function(ok){
     if (ok.target.className == 'delete'){
        const li = ok.target.parentElement;
        list.removeChild(li);
     }
});

const addForm = document.forms['add-album'];

addForm.addEventListener('submit', function(ok){
    ok.preventDefault();
    document.querySelector('input[type="text"]').value;
    addForm.card.insertAdjacentHTML("afterend", 
    `<div class="card"><h2 class="cardheader">${DOMselectors.form.value}</h2></div>`);
}); 

    albumName.textContent = value;

    
/*DOMselectors.button.addEventListener("click", function (){
    box(DOMselectors.box, DOMselectors.text);
}); 

//const album = make album
//addcard(album)
//clear fields
//addremove buttons