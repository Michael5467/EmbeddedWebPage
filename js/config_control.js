const url = "/action.html";

const lampName = document.getElementById("lampName");

function actionSend(data) {
    const http = new XMLHttpRequest();
    http.open("POST", url, false);
    http.onreadystatechange = function () {
        //Call a function when the state changes.
        if (http.readyState == 4) {
            console.log(http.responseText);
        }
    }
    http.send(data);
}

function applyConfig(e) {
    var data = new FormData();
    data.append("CFG", "RST");
    actionSend(data);
}

function resetConfig(e) {
    var data = new FormData();
    data.append("CFG", "SET");
    data.append("NAME", lampName.value);
    actionSend(data);
}

const indReset = document.getElementById("config_apply");
indReset.addEventListener("click", applyConfig);

const indRefresh = document.getElementById("config_reset");
indRefresh.addEventListener("click", resetConfig);

