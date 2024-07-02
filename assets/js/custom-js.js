var accordion_btns = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion_btns.length; i++) {
    accordion_btns[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (!this.classList.contains("active_accordion")) {
        console.log("hello");
        for(let otherAccBtn of accordion_btns){
            otherAccBtn.classList.remove("active_accordion");
            otherAccBtn.nextElementSibling.style.maxHeight = null;
        }
        this.classList.add("active_accordion");
        let otherPanel = this.nextElementSibling
        otherPanel.style.maxHeight = panel.scrollHeight + "px";
    }else{
        this.classList.add("active_accordion");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    }
  });
}
