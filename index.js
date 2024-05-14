function executeAnimation(elementId) {
    let element = document.getElementById(elementId);
    console.log(element.classList)
    if (!element.classList.value.includes("btn-right")) {
        element.classList.add("btn-right");
    } else {
        element.classList.remove("btn-right");
        alert("Try again")
    }
}