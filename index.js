function addingEventListener() {
    input =  document.querySelector("#input")
    input.addEventListener("click", () => {
        alert('I was clicked!');
    })
}

addingEventListener()