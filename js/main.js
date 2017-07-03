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
    if (ev.target.tagName !== 'TD') {
        return;
    }

    if (ev.target.childElementCount > 0) {
        ev.target.removeChild(ev.target.children[0]);
    }

    if (source.parentNode.tagName === 'TD') {
        ev.target.appendChild(source);
    } else {
        $(`#${data}`).clone().attr('id', `${source.id}-${ev.target.id}`).appendTo(ev.target);
    }
}

function removeOnDblClick(ev) {
    if (ev.target.parentNode.tagName === 'TD') {
        ev.target.parentNode.removeChild(ev.target);
    }
}
