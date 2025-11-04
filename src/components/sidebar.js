export function sidebarFunction(){
    
    const dropdownContainers = document.querySelectorAll('.dropdowns__container');

    dropdownContainers.forEach(container => {
        const dropdownBtns = container.querySelectorAll('.dropdown-btn');
        const arrowIcons = container.querySelectorAll('.dropdown-icon');

        dropdownBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const openDropdown = container.querySelector('.open');
                const currentDropdown = this.nextElementSibling;
                const currentArrow = this.querySelector('.dropdown-icon');

                // Close any other open dropdown in this container
                if (openDropdown && openDropdown !== currentDropdown) {
                    openDropdown?.classList.remove('open');
                    arrowIcons.forEach(icon => icon.classList.remove('rotate'));
                }

                // Toggle current dropdown + arrow
                const isOpen = currentDropdown.classList.toggle('open');
                currentArrow.classList.toggle('rotate', isOpen);
            });
        });

        // Close dropdown when clicking outside this container
        document.addEventListener('click', e => {
            if (!container.contains(e.target)) {
                const openedDropdown = container.querySelector('.open');
                openedDropdown.classList.remove('open');
                arrowIcons.forEach(icon => icon.classList.remove('rotate'));
            }
        });
    });

}