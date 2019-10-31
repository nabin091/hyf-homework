//Promise that resolves after set time
//Create a function that has one parameter: resolveAfter. 
//Calling this function will return a promise that resolves after the resolveAfter seconds has passed.

function getPromise (resolvesAfter){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("I am called asynchronously");
            reject("err")
    
         },resolvesAfter * 1000);
    });

}

    getPromise(3).then(value => console.log(value));
    getPromise(6).then (value => console.log(value));