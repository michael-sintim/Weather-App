document.addEventListener("DOMContentLoaded",() =>{
    const dropdown =  document.querySelector("[data-dropdown='custom-dropdown']");
    const ordered_list = document.querySelector('ul ');
    const ordered_list_item = document.querySelector('ul li');
    const h3_element = document.querySelector('h3');
    const dpp = document.querySelector('h3');


dropdown.addEventListener('click' , () =>{
    // dropdown.classList.remove("[data-dropdown='custom-dropdown']");
    if (!e.target.closest('ul')){
        ordered_list.classList.toogle('hidden')
    }
});

items.forEach((item)=> {

})
})