    // Get the dropdown trigger and menu elements
    // Function to show the dropdown
    // Function to hide the dropdown
    // Add staggered delay to list items
    // Reset transition delays
    // Function to toggle the dropdown
    // Toggle dropdown when clicking the trigger
    // Handle item clicks
    // Remove active class from all items in this section
    // Add active class to clicked item            
    // Update the header text
    // Check if we have any imperial units selected
    // Close dropdown after selection
    // Close dropdown when clicking outside
    // Close dropdown when pressing Escape key


const dropdown = document.querySelector("data-dropdown='custom-dropdown'")


dropdown.addEventListener('click', () =>
    dropdown.classList.add('hidden'),
    dropdown.classList.remove('hidden')
)