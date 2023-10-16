const DOMselectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2")
    //select the text box 
    //select all the h2s in one property
};
DOMselectors.form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(DOMselectors.firstName.value);
    DOMselectors.h2s.forEach((el)=> el.textContent = DOMselectors.firstName.value
    );
});