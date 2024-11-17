document.getElementById('displayArea').scrollTo({ top: 448, behavior: "smooth" });

function checkCalBox(node) {
    console.log(node)
    const checkbox = node.parentElement.children[1];
    console.log(checkbox)
    if (!node.checked) {
        checkbox.setAttribute('class', 'viewbox');
    } else {
        checkbox.setAttribute('class', 'viewbox checked');
    }
}

let num = 0

function add() {
    const element = document.getElementById('test');
    const pre = '--element-bg-color: var(--accent-1); --element-height: 160px; --element-from-top: '
    num += 32
    element.style = `${pre}${num}px;`
}