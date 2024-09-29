document.getElementById('callNumber').addEventListener('click', function(e) {
    e.preventDefault();
    const userConfirmed = confirm("Do you want to call this number?");
    if (userConfirmed) {
        window.location.href = "tel:+911234567890";
    }
});