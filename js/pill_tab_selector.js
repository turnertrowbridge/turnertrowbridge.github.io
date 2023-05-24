function saveTabSelect(e) {
    localStorage.setItem("tagSelected", e.id);
    return true;
}

function retrieveSelected(){
    var curTag = localStorage.getItem("tagSelected");
    var element = document.getElementById(curTag);
    element.classList.add("active");
}