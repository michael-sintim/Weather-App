    // Get the dropdown trigger and menu elements
    // Function to show the dropdown
    // Function to hide the dropdown
    // Add staggered delay to list items
    // Reset transition delays
    // Function to toggle the dropdown
    // Toggle dropdown when clicking the trigger
    
    // Close dropdown when clicking outside
    // Close dropdown when pressing Escape key

    // Handle item clicks
    // Remove active class from all items in this section
    // Add active class to clicked item            
    // Update the header text
    // Check if we have any imperial units selected
    // Close dropdown after selection


const DropdownTrigger = document.querySelector("[data-dropdown='custom-dropdown']")
const dropdown = document.querySelector("[data-ul='Dropdown-ul']")
const list_items = document.querySelectorAll("[data-ul='Dropdown-ul'] li")

// show drop down 
const Showdropdown = () =>{
    dropdown.classList.remove('hidden');
}

// hide dropdown 
const HideDropdown = () => {
    dropdown.classList.add('hidden');
}

list_items.forEach((item,index) => {
    item.style.transitionDelay = `${index *0.05}s`
});


const reset_delay = function (){list_items.forEach((item) =>{
item.style.transitionDelay = `${0}s`
}
)
}


const toogle_dropdown = () => {
    if (dropdown.classList.contains('hidden')){
        Showdropdown()
    }else {
        HideDropdown()
        reset_delay()
    }
}

DropdownTrigger.addEventListener('click',toogle_dropdown);


const outside_close_with_keyboard = (e) => {
    if (e.key==="Escape" && !dropdown.classList.contains('hidden')){
        HideDropdown();
    }
}


document.addEventListener('keydown',outside_close_with_keyboard)


const click_outside_to_close = (e) => {
        if (!DropdownTrigger.contains(e.target)){
            HideDropdown()
        }
}

document.addEventListener('click',click_outside_to_close)

const CLOSEdROPdOWNaFTERSELECTION = (e) => {
        // Remove active class from all items
    list_items.forEach(item => item.classList.remove('active'));

         // Add active class to clicked item
    e.target.classList.add('active');

    HideDropdown();
    reset_delay();


}
