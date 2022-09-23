import React from "react";


function User(props) {
let  name = "emerson"
    return(
        <>

        { name.length === 0 &&
            <>
        <h4>Cadastre-se</h4>
       <input type='text'/>
       </> }
       {
        name.length >=0 &&
        <>
        {name}
        </>
       }





        </>

        
    )
}

 export default User