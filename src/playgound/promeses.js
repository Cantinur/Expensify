const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resaolved data');
        reject('Somthing went wrong');
    }, 1500)
});

promise.then(data => console.log('1: ' + data))
.catch(error => console.log(error));

