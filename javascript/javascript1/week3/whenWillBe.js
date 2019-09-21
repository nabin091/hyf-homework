// When will we be there??
   
   const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function timeToArrive (){
    
   let time = (travelInformation.destinationDistance/travelInformation.speed)
    const hours  = parseInt(time);    //ParseInt() converts a string into an integer (a whole number)

    const minutes = Math.round((time-hours)*60);
    return hours +' ' + 'hour'+' and' +' '+ minutes +' '+ "minute" ;         
        
   }
   const travelTime = timeToArrive(travelInformation);
   console.log(travelTime); // 8 hour and 38 minute

   
   
  
