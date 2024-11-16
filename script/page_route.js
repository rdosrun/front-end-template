// routing function
//
function loadPage(route) {
    fetch(route)
        .then((response) => response.text())
        .then((html) => {
            document.getElementById("main-page").innerHTML = html
        }).then(() => {

            if (route == "/re-order") {
                loadQrCodeScanner();
            }
        })
}

