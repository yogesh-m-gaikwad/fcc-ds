function sym() {
    let result = [];
    for ( let i = 0; i < arguments.length - 1; i++ ) {
      let A = ( i == 0 ) ? arguments[i] : result;
      let B = arguments[i+1];
      //console.log("A: " + A);
      //console.log("B: " + B);

      let arr = [];
      for (let j = 0 ; j < A.length; j++) {
        let matchFound = false;
        for (let k = 0 ; k < B.length; k++) {
          if (A[j] == B[k]) {
            //console.log(B);
            matchFound = true;
            break;
          }
        }
  
        if (!matchFound) {
          arr.push(A[j]);
        }
      }
  
      sortAndRemoveDuplicates(arr);

      for (let j = 0 ; j < B.length; j++) {
        let matchFound = false;
        for (let k = 0 ; k < A.length; k++) {
          if (B[j] == A[k]) {
            //console.log(B);
            matchFound = true;
            break;
          }
        }
  
        if (!matchFound) {
          arr.push(B[j]);
        }
      }
  
      sortAndRemoveDuplicates(arr);

      result = arr;
      console.log(result);
    }
    
    return result;
  }
  
  function sortAndRemoveDuplicates(arr){
    arr.sort();
    for (let i = 0; i < arr.length - 1; i++) {
      if(arr[i] == arr[i+1]){
        arr.splice(i,1);
      }
    }
  }
  
   
  //sym([1, 2, 3], [5, 2, 1, 4]);
  //sym([1, 2, 3, 3], [5, 2, 1, 4]);
  //sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
  sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])