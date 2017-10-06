 // function forLoop(array) {
 //    for (let i = 0; i < 25; i++)
 //    {
 //      array.push('I am $(i) strange loop$(i === 0 ? '' : 's').');
 //     }
 //     return array;
 //   }

 function forLoop(array){
   for(let i = 0 ; i < 25; i++){
     array[i] = (`I am ${i} strange loop ${i} === 0) ? '.' : 's.'`;
   }
   return array;
 }
