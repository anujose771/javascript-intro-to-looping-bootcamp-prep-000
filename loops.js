 // function forLoop(array) {
 //    for (let i = 0; i < 25; i++) 
 //    { 
 //      array.push('I am $(i) strange loop$(i === 0 ? '' : 's').');
 //     } 
 //     return array; 
 //   }

 function forLoop(array){
   var array = newArray();
   for(let i = 0 ; i < 25; i++){
     if ( i == 1){
       console.log( "I am 1 strange loop.");
       array.push("I am 1 strange loop.");
     }
     else{
       console.log( `I am ${i} strange loops.`);
       array.push(`I am ${i} strange loops.`);
     }
   }
   return array;
 }