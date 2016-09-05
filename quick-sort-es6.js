'use strict';

function qSort(arr) { 
  let allElemsIsEquil = arr.every( (item, i) => item === arr[0] );
	
  if (allElemsIsEquil) {
    return arr;
  } else if (arr.length == 2) {
		
    if (arr[0] > arr[1])
      [arr[0], arr[1]] = [arr[1], arr[0]]; //swap
    return arr;
		
  } else {	
    let randIndex = Math.random() * (arr.length - 1) | 0, 
        pivot = arr[randIndex],
        lesserThanPivot = arr.filter( (item) => item < pivot ),
        greaterThanPivot = arr.filter( (item) => item >= pivot );
				
    return qSort(lesserThanPivot).concat( qSort(greaterThanPivot) );
  };
}
