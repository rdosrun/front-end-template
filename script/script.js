function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function order() {
    var store_id = document.getElementById("store_id").value;
    var product_id = document.getElementById("product_id").value;
    console.log(store_id, product_id);
    if (store_id == "" && product_id == "") {
        alert("please enter store ID and product ID");
        return false;
    }
    fetch("/order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            store_id: store_id,
            product_id: product_id,}),
    })
    .then((response) => {alert("order placed")})

}

function loadQrCodeScanner () {

    // If found you qr code
    function onScanSuccess(decodeText, decodeResult) {
        var tmp = decodeText.split(",");
        document.getElementById("store_id").value = tmp[0];
        document.getElementById("product_id").value = tmp[1];
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
}
