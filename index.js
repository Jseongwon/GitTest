// const CryptoJS = require('https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js');

document.querySelector('#Button').addEventListener('click', Select);

async function Select() {
    console.log("-------")
    try {
        const promise = await fetch('http://localhost:3005/select', {
            // method : 'GET',
            // mode : 'cors',
            // cache : 'no-cache',
            // // headers: {'Content-Type': 'application/json'},
            // credentials : 'same-origin',
            // redirect : 'follow',
            // referrer : 'no-referrer',
            // body: JSON.stringify(this.obj)
        });
        console.log(promise);
        const data = await promise.json();
        console.log(data);
        const encryptionData = CryptoJS.AES.encrypt(data);
        console.log(encryptionData);

    } catch (e) {
        alert(e);
    }
}


// .then((response) => {
//     const promise = response.json();
//     console.log(promise);
//     console.log(promise['PromiseResult']);
//
//     console.log(JSON.parse(promise));


// });
// method: 'GET',
// body: JSON.stringify({
//     carType: document.querySelector('#car-select').value,
//     bonnet: bonnet,
//     frontGlass: frontGlass,
//     frontPlate: frontPlate,
//     frontLeftBumper: frontLeftBumper,
//     frontLeftTire: frontLeftTire,
//     frontLeftDoor: frontLeftDoor,
//     backLeftDoor: backLeftDoor,
//     backLeftCpillar: backLeftCpillar,
//     backLeftTire: backLeftTire,
//     backLeftBumper: backLeftBumper,
//     frontRightBumper: frontRightBumper,
//     frontRightTire: frontRightTire,
//     frontRightDoor: frontRightDoor,
//     backRightDoor: backRightDoor,
//     backRightCpillar: backRightCpillar,
//     backRightTire: backRightTire,
//     backRightBumper: backRightBumper,
//     trunk: trunk,
//     backGlass: backGlass
// }),
// headers: {'Content-Type': 'application/json'}


// if (document.querySelector('#car-select').value === "sedan") {
//     window.location.href = "result-sedan.html";
// }
// if (document.querySelector('#car-select').value === "suv") {
//     window.location.href = "result-suv.html";
// }
// if (document.querySelector('#car-select').value === "wagon") {
//     window.location.href = "result-wagon.html";
// }
// if (document.querySelector('#car-select').value === "truck") {
//     window.location.href = "result-truck.html";
// }
// if (document.querySelector('#car-select').value === "bus") {
//     window.location.href = "result-bus.html";
// }

