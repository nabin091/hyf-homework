
//Item array removal

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';
const i = 1 ; 
const n =  1; // Here, i define the index of array ,
            // n defines the number of item(name)  to be remove.
         //const i = (1, 0);
         //const n = (2); //to remove two names
         
const removedName = names.splice(i, n); 
   console.log(names); 
    // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
   console.log(removedName);
   //['Ahmad']

   
 