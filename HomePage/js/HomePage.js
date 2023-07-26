window.addEventListener('load', (event) => {
    document.getElementById("defaultOpen").click();
});

function appbar_click(evt) {
    alinks = document.getElementsByClassName("alink");
    for (i = 0; i < alinks.length; i++) {
        alinks[i].className = alinks[i].className.replace(" active", "");
    }
    // console.log('22222');
    evt.currentTarget.className += " active";
    // console.log(evt.currentTarget.className);
}