//
//                        Created by Max Whitten
//
//       ▓█████  ▄████▄   ██▓    ▓██   ██▓ ██▓███    ██████ ▓█████
//       ▓█   ▀ ▒██▀ ▀█  ▓██▒     ▒██  ██▒▓██░  ██▒▒██    ▒ ▓█   ▀
//       ▒███   ▒▓█    ▄ ▒██░      ▒██ ██░▓██░ ██▓▒░ ▓██▄   ▒███
//       ▒▓█  ▄ ▒▓▓▄ ▄██▒▒██░      ░ ▐██▓░▒██▄█▓▒ ▒  ▒   ██▒▒▓█  ▄
//       ░▒████▒▒ ▓███▀ ░░██████▒  ░ ██▒▓░▒██▒ ░  ░▒██████▒▒░▒████▒
//       ░░ ▒░ ░░ ░▒ ▒  ░░ ▒░▓  ░   ██▒▒▒ ▒▓▒░ ░  ░▒ ▒▓▒ ▒ ░░░ ▒░ ░
//        ░ ░  ░  ░  ▒   ░ ░ ▒  ░ ▓██ ░▒░ ░▒ ░     ░ ░▒  ░ ░ ░ ░  ░
//          ░   ░          ░ ░    ▒ ▒ ░░  ░░       ░  ░  ░     ░
//          ░  ░░ ░          ░  ░ ░ ░                    ░     ░  ░
//              ░                 ░ ░
//
//                                ECLYPSE
//

function redirect(url) {
    window.location.href = url
}

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
    const pre = '--element-bg-color: const(--accent-1); --element-height: 160px; --element-from-top: '
    num += 32
    element.style = `${pre}${num}px;`
}

function setTopDate() {
    var date = new Date();
    const day = date.toLocaleDateString('default', { weekday: 'long' });
    const dd = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'long' });
    const yyyy = date.getFullYear();

    date = `${day}, ${month} ${dd}, ${yyyy}`;

    document.getElementById('date').innerHTML = date;
}

function setGridDates() {
    var date = new Date();
    const topGrid = document.getElementById('topGrid');
    topGrid.children[date.getDay()].children[0].children[0].children[1].setAttribute('class', 'active')

    const baseDate = date.getDate() - date.getDay();
    console.log(baseDate)

    for (row in topGrid.children) {
        if (!Number.isNaN(parseInt(row))) {
            topGrid.children[row].children[0].children[0].children[1].innerHTML = baseDate + parseInt(row)
        }
    }
}

function setSelectDates() {
    const tds = document.getElementsByTagName('td')
    console.log(tds)
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    var i = 0;
    var mainItt = 1;
    var secondItt = 1;
    for (tdNum in tds) {
        if (!Number.isNaN(parseInt(tdNum))) {
            const td = tds[tdNum];
            const span = tds[tdNum].children[0].children[0];
            if (i < firstDay.getDay()) {
                const daysBefore = new Date(firstDay);
                daysBefore.setDate(firstDay.getDay() - i);
                const resultDay = new Date(firstDay - daysBefore);
                span.innerHTML = (resultDay.getDate());
                td.setAttribute('class', 'notCurrent');
            } else if (i - (firstDay.getDay() - 1) <= new Date(date.getFullYear(), date.getMonth(), 0).getDate()) {
                span.innerHTML = mainItt;
                mainItt++;
            } else {
                span.innerHTML = secondItt;
                td.setAttribute('class', 'notCurrent');
                secondItt++
            }
        }
        i++;
    }
    tds[date.getDate() + ( firstDay.getDay() - 1 )].setAttribute('class', 'active');
    console.log(tds[date.getDate()])

    const selectMonth = document.getElementById('selectMonth');
    selectMonth.children[0].innerHTML = `${date.toLocaleString('default', { month: 'long' })}, `
    selectMonth.children[1].innerHTML = date.getFullYear();
}

function setTimezone() {
    var zone = new Date().toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2]
    var hrs = -(new Date().getTimezoneOffset() / 60)
    document.getElementById('tz').innerHTML = zone
    document.getElementById('utc').innerHTML = `UTC${hrs}`
}

setTopDate()
setGridDates()
setSelectDates()
setTimezone()