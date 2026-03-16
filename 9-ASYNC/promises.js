let promessa = Promise.resolve(5)
promessa.then((value) => {return value+5}).then((value) => {console.log(value)})

let promiseWrong = Promise.resolve(new Error ("algo deu errado"))
promiseWrong
    .then((value) => console.log(value))
    .catch((reason) => console.log("Falhou: " + reason))