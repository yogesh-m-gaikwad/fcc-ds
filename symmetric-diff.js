function sym() {
    let result = [];    
    for (let i = 0; i < arguments.length - 1; i++) {
      let common = [];
      let A = ( i== 0 ) ? arguments[i] : result;
      let B = arguments[i+1];
      let temp = A;
      A = A.length > B.length ? A : B;
      B = temp.length > B.length ? B : temp;
  
      //console.log("A: " + A);
      //console.log("B: " + B);
      let arr = [];
      for (let j = 0 ; j < A.length; j++) {
        let matchFound = false;
        for (let k = 0 ; k < B.length; k++) {
          if(A[j] == B[k]) {
            B.splice(k, 1);
            common.push(A[j]);
            //console.log(B);
            matchFound = true;
            break;
          }
        }
  
        if (!matchFound) {
          arr.push(A[j]);
        }
      }

      //console.log("arr: " + arr);
      //console.log("B: " + B);    
      sortAndRemoveDuplicates(B);
      sortAndRemoveDuplicates(common);
      sortAndRemoveDuplicates(arr);
      arr = [ ...arr, ...B];
      result = arr.sort();
      
      console.log(result);
    }
    
    console.log(result);
    
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