document.addEventListener("DOMContentLoaded", function () {
    const section5content = document.querySelector(".section5content");
    const popups = document.querySelectorAll(".popup");
    const overlay = document.querySelector(".overlay");

    section5content.addEventListener("click", function (event) {
        const targetName = event.target.closest("p[style*='font-weight: bold']");
        if (targetName) {
            const index = Array.from(names).indexOf(targetName);
            showPopup(index);
        }
    });

    overlay.addEventListener("click", function () {
        hidePopups();
    });

    function showPopup(index) {
        hidePopups();
        popups[index].style.display = "block";
        overlay.style.display = "block";
    }

    function hidePopups() {
        popups.forEach(popup => {
            popup.style.display = "none";
        });
        overlay.style.display = "none";
    }
});
