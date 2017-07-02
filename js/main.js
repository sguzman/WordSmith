function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const source = document.getElementById(data);
    if (source.parentNode.tagName === 'TD') {
        ev.target.appendChild(source);
    } else {
        ev.target.appendChild(source.cloneNode(true));
    }
}
