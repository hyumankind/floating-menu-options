document.addEventListener('DOMContentLoaded', function() {
    const openMenuBtn = document.getElementById('openMenuBtn');
    const floatingMenu = document.getElementById('floatingMenu');
    const menuContainer = floatingMenu.querySelector('.menu-container');

    const buttons = [
        { href: "#", text: "Option 1", bgColor: "#FF5733", textColor: "#FFFFFF" },
        { href: "#", text: "Option Two...", bgColor: "#33FF57", textColor: "#000000" },
        { href: "#", text: "Option 3", bgColor: "#3357FF", textColor: "#FFFFFF" },
        { href: "#", text: "Option Four", bgColor: "#F3FF33", textColor: "#000000" },
    ];

    // Create menu buttons
    buttons.forEach(button => {
        const menuButton = document.createElement('a');
        menuButton.href = button.href;
        menuButton.className = 'menu-button';
        menuButton.textContent = button.text;
        menuButton.style.backgroundColor = button.bgColor;
        menuButton.style.color = button.textColor;
        // Add Webflow text classes here
        menuButton.classList.add('text-color-1', 'text-size-regular');
        menuContainer.appendChild(menuButton);
    });

    // Open menu
    openMenuBtn.addEventListener('click', function() {
        floatingMenu.style.display = 'flex';
    });

    // Close menu when clicking outside
    floatingMenu.addEventListener('click', function(event) {
        if (event.target === floatingMenu) {
            floatingMenu.style.display = 'none';
        }
    });
});