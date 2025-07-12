document.addEventListener('DOMContentLoaded', function() {
    // Select all Table of Contents links and content sections
    const tocLinks = document.querySelectorAll('.toc-link');
    const contentSections = document.querySelectorAll('.content-section');

    // Function to handle click events on TOC links
    function onTocLinkClick(event) {
        // Prevent the default link behavior (page jump)
        event.preventDefault();

        // Get the target ID from the 'data-target' attribute of the clicked link
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        // Remove the 'active' class from all links and content sections
        tocLinks.forEach(link => link.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));

        // Add the 'active' class to the clicked link
        this.classList.add('active');

        // Add the 'active' class to the corresponding content section to display it
        if (targetElement) {
            targetElement.classList.add('active');
        }
    }

    // Attach the click event listener to each TOC link
    tocLinks.forEach(link => {
        link.addEventListener('click', onTocLinkClick);
    });
});
