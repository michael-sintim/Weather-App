document.addEventListener('DOMContentLoaded', function() {
    // Get the dropdown trigger and menu elements
    const dropdownTrigger = document.querySelector('[data-dropdown="custom-dropdown"]');
    const dropdownMenu = dropdownTrigger.querySelector('ul');
    const dropdownItems = dropdownMenu.querySelectorAll('li');
    
    // Function to show the dropdown
    function showDropdown() {
        dropdownMenu.classList.remove('hidden');
        dropdownMenu.classList.add('show');
        
        // Add staggered delay to list items
        dropdownItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 100}ms`;
        });
    }
    
    // Function to hide the dropdown
    function hideDropdown() {
        dropdownMenu.classList.add('hidden');
        dropdownMenu.classList.remove('show');
        
        // Reset transition delays
        dropdownItems.forEach(item => {
            item.style.transitionDelay = '0ms';
        });
    }
    
    // Function to toggle the dropdown
    function toggleDropdown() {
        if (dropdownMenu.classList.contains('hidden')) {
            showDropdown();
        } else {
            hideDropdown();
        }
    }
    
    // Toggle dropdown when clicking the trigger
    dropdownTrigger.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleDropdown();
    });
    
    // Handle item clicks
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.stopPropagation();
            
            // Remove active class from all items in this section
            const section = this.closest('ul') || this.parentElement;
            const allItemsInSection = section.querySelectorAll('li');
            allItemsInSection.forEach(el => el.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Update the header text
            const headerP = dropdownMenu.querySelector('p:first-child');
            const activeItems = dropdownMenu.querySelectorAll('li.active');
            
            // Check if we have any imperial units selected
            const hasImperial = Array.from(activeItems).some(item => 
                item.textContent.includes('Fahrenheit') || 
                item.textContent.includes('mph') || 
                item.textContent.includes('Inches')
            );
            
            headerP.textContent = hasImperial ? 'Switch to Metric' : 'Switch to Imperial';
            
            // Close dropdown after selection
            hideDropdown();
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!dropdownTrigger.contains(event.target) && !dropdownMenu.classList.contains('hidden')) {
            hideDropdown();
        }
    });
    
    // Close dropdown when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && !dropdownMenu.classList.contains('hidden')) {
            hideDropdown();
        }
    });
});