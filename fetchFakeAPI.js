const fetch = require("node-fetch");

const getDataInPromise = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/").then(result => {
        return result.json();
    }).then(r => {
        console.log(r)
    })
}
const getDatawithAwait = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/");
    let response = await data.json();
    console.log(response)
}
const getDataWithNewPromise = async () => {
    let p1 = new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos/").then((d) => {

            resolve(d.json());
        }).catch((err) => {
            reject(err);
        })
    });
    return await p1
}
const getDataWithCallbacks = (callback) => {
    fetch("https://jsonplaceholder.typicode.com/todos/").then((r) => {
        return r.json();
    }).then((r) => {
        callback(r);
    })
}
// getDataWithCallbacks(function (r) {
//     console.log(r)
// })
// getDataWithNewPromise().then((result) => {
//     console.log(result)
// })
// getDataInPromise();
// getDatawithAwait()


function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        console.log(`Hi ${name}`);
    }
    return displayName;
}
function closureA() {
    var counter = 0;
    return (() => {
        return counter += 1;
    })()
}

let a = closureA();
console.log(a)
