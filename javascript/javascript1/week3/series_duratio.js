const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,  
    },
    {
      title: 'Prison break',
      days: 3,
      hours: 5,
      minutes: 0,
    },
    {
      title: 'The Wire',
      days: 2,
      hours: 12,
      minutes: 0,
    }
  ];
const lifeSpan = 80*365*24 // life span in hours
let sum = 0;
for (let i = 0; i<seriesDurations.length; i++){
    let timeOnSeries = (seriesDurations[i].hours+(seriesDurations[i].days*24))
     let percentOfAvgLife = (timeOnSeries/lifeSpan)*100; //
    sum = sum + percentOfAvgLife; //sum += percentOfAvgLife
}
//console.log("in total that is "+ sum.toFixed(3)+"% of my life") ;
console.log (sum.toFixed(3)+ "%"); //.030%
