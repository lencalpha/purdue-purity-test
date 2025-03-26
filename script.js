document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('purityForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent form submission and page reload

        // Get selected checkboxes
        const selectedItems = Array.from(form.querySelectorAll('input[type="checkbox"]:checked'));
        const score = 100 - selectedItems.length;  // Calculate score

        // Save score in local storage to pass it to result page
        localStorage.setItem('purityScore', score);

        // Redirect to result page
        window.location.href = 'result.html';
    });
});
