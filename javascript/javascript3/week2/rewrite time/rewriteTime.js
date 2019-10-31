// rewrite time
//Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises. 
// So instead of using setTimeout and navigator.geolocation.getCurrentPosition with callbacks, 
// use it as a promise.

function setTimeoutPromise(time){
    return new Promise(resolve =>{
        setTimeout(()=>{
        resolve('rewrite a set timeout');
            },time);
    })
    
};
setTimeoutPromise(3000).then(console.log('called after 3 sec'));  

function getCurrentLocation(){
    return new Promise((resolve,reject) => {
    navigator.geolocation.getCurrentPosition(resolve,reject)
        
    });
    }

    getCurrentLocation()
            .then (position => console.log(position))
            .catch(error => console.log(error));