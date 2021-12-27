import React from "react";

function Cols() {
    // here we use fragment insead of div b/c if we use div then the compnt will show some errors in console
    //it say that we can't use div table tr td in cols to avoid this we use fragment
    /*we can't code onClick function or any other b/c when we render the child compnt multiple time in main cmpnt 
    then the function will aslo multiply to avoid that we use these type of function in main cmpnt*/
  return (
    <>
      <td>Zamir</td>
      <td>Abbas</td>
    </>
  );
}

export default Cols;
