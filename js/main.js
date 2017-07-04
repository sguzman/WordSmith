function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const source = $(`#${data}`)[0];
    let target = ev.target;
    if (target.tagName === 'SPAN') {
        target = target.parentNode;
    }

    if (source.id.length !== 1) {
        if (source.parentNode.childElementCount === 2) {
            source.parentNode.firstChild.hidden = false;
            if (target.childElementCount === 2) {
                target.removeChild(target.childNodes[1]);
                source.id = `${data}-${target.id}`;
                target.appendChild(source);
            } else if (target.childElementCount === 1 && target.firstChild.className === 'letters') {
                target.removeChild(target.firstChild);
                source.id = `${data}-${target.id}`;
                target.appendChild(source);
            } else if (target.childElementCount === 1) {
                target.firstChild.hidden = true;
                source.id = `${data}-${target.id}`;
                target.appendChild(source);
            } else {
                source.id = `${data}-${target.id}`;
                target.appendChild(source);
            }
        } else {
            if (target.childElementCount === 2) {
                target.removeChild(target.childNodes[1]);
                source.id = `${data}-${target.id}`;
                target.appendChild(source);
            } else if (target.childElementCount === 1 && target.firstChild.className === 'letters') {
                target.removeChild(target.firstChild);
                source.id = `${data}-${target.id}`;
                target.appendChild(source);
            } else if (target.childElementCount === 1) {
                target.firstChild.hidden = true;
                source.id = `${data}-${target.id}`;
                target.appendChild(source);
            } else {
                source.id = `${data}-${target.id}`;
                target.appendChild(source);
            }
        }
    } else {
        if (target.childElementCount === 2) {
            target.removeChild(target.childNodes[1]);
            $('#' + data).clone().attr('id', `${data}-${target.id}`).appendTo(target);
        } else if (target.childElementCount === 1 && target.firstChild.className === 'letters') {
            target.removeChild(target.firstChild);
            $('#' + data).clone().attr('id', `${data}-${target.id}`).appendTo(target);
        } else if (target.childElementCount === 1) {
            target.firstChild.hidden = true;
            $('#' + data).clone().attr('id', `${data}-${target.id}`).appendTo(target);
        } else {
            $('#' + data).clone().attr('id', `${data}-${target.id}`).appendTo(target);
        }
    }
}

function removeOnClick(ev) {
    let target = ev.target;
    if (target.parentNode.tagName !== 'TD') {
        return;
    }

    if (target.parentNode.childElementCount === 2) {
        target.parentNode.firstChild.hidden = false;
    }
    target.parentNode.removeChild(target);

}
