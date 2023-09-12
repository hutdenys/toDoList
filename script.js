function showInput(){
let inputContainer = document.querySelector('.add-element-input-container');
if(inputContainer.style.display === "none"){
    inputContainer.style.display = "inline";
}else{
    inputContainer.style.display = "none";
}
}

function createElementByInput(){
    let parent = document.querySelector('.container');
    let inputText = document.querySelector('.add-element-input').value;
    let elementContainer = document.createElement('div');
    elementContainer.classList.add('element');
    let elementButton = document.createElement('div');
    elementButton.classList.add('element-checker');
    let element = document.createElement('p');
    element.classList.add('element-text');
    element.textContent=inputText;
    parent.appendChild(elementContainer);
    elementContainer.appendChild(elementButton);
    elementContainer.appendChild(element);
}
