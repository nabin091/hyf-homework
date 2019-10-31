//Fetching and waiting

const photoUrl = 'https://jsonplaceholder.typicode.com/photos'
    fetch(photoUrl)
    .then(response => response.json())
    .then(json => {
        setTimeout(()=>{
            console.log(json);
        },3 * 1000);

    });
document.getElementById('btn').addEventListener('click',photoUrl)

