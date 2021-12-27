import { useState } from "react";

function Conditional() {
//   const [loggedIn, setLoggedIn] = useState(true );
  
  const [loggedIn, setLoggedIn] = useState(1);//1  if there are 3 or more then 3 items
   


  //not recommended method
  //   if (loggedIn) {
  //     return (
  //       <div>
  //         <h1>Wellcome Zamir</h1>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h1>wellcome guest</h1>
  //       </div>
  //     );
  //   }

  ///recommended method and easy way
  //   return (
  //     <div>
  //         {loggedIn ? <h1>Wellcome Zamir</h1> : <h1>Wellcome guest</h1>}
  //     </div>
  //   );

  //1   if there are 3 or more then 3 items
  return (
    <div>
        {
        loggedIn==1?<h1>wellcome user 1</h1>
        :loggedIn==2?<h1> wellcome user 2</h1>
        :<h1>wellcome guest</h1> 
        }
    </div>
  );
}

export default Conditional;
