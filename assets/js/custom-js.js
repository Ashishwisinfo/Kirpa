var accordion_btns = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion_btns.length; i++) {
    accordion_btns[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        if (!this.classList.contains("active_accordion")) {
            console.log("hello");
            for (let otherAccBtn of accordion_btns) {
                otherAccBtn.classList.remove("active_accordion");
                otherAccBtn.nextElementSibling.style.maxHeight = null;
            }
            this.classList.add("active_accordion");
            let otherPanel = this.nextElementSibling
            otherPanel.style.maxHeight = panel.scrollHeight + "px";
        } else {
            this.classList.add("active_accordion");
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const scrollTop = document.documentElement.scrollTop || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        const element = document.querySelector('.pxl-scroll-top.pxl-on');

        if (element) { // Check if the element exists
            if (scrollTop + windowHeight >= documentHeight - 250) { // Use >= to account for potential off-by-one issues
                element.style.bottom = '100px';
            } else {
                element.style.bottom = '30px';
            }
        }
    });
});