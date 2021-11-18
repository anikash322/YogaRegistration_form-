import React from 'react'
import {toast} from 'react-toastify';


function payment() {
    const notify = ()=>{
      
        toast('Payment Done')
          
    }
    return (
        <div>
            <label >
                Pay 500Rs  
                <button onClick={notify}>PAY</button>
       </label>
        </div>
    )
}


export default payment

