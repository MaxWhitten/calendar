function redirect(url) {
    window.location.href = url;
}

function setTopDate() {
    var date = new Date();
    const day = date.toLocaleDateString("default", { weekday: "long" });
    const dd = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("default", { month: "long" });
    const yyyy = date.getFullYear();

    date = `${day}, ${month} ${dd}, ${yyyy}`;

    document.getElementById("date").innerHTML = date;
}

setTopDate();

88;

document.getElementById("username").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        window.alert('pressed enter')
        if (document.getElementById("password").value && document.getElementById('username')) {
            window.alert(`username: ${document.getElementById("username").value}, password: ${document.getElementById("password").value})`)
        }
        return false;
    }
});;

document.getElementById("password").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        window.alert('pressed enter')
        if (document.getElementById("password").value && document.getElementById('username')) {
            window.alert(`username: ${document.getElementById("username").value}, password: ${document.getElementById("password").value})`)
        }
        return false;
    }
});;