import React, { useState } from 'react'

function Simplecal() {
    const [value1 , setvalue1]=useState();
    const [value2 , setvalue2]=useState();
    const [ans,setans]=useState();

    const click=(val)=>{
      if(val == '+'){
        setans(parseInt(value1)+parseInt(value2));
      }
      if(val == '-'){
        setans(parseInt(value1)-parseInt(value2));
      }
      if(val == '*'){
        setans(parseInt(value1)*parseInt(value2));
      }
      if(val == '/'){
        setans(parseInt(value1)/parseInt(value2));
      }
    }
  return (
    <div>
      <input type="text" onChange={(e)=>setvalue1(e.target.value)}/>
      <input type="text" onChange={(e)=>setvalue2(e.target.value)}/><br></br>
      <button onClick={()=>click('+')}>+</button>
      <button onClick={()=>click('-')}>-</button>
      <button onClick={()=>click('*')}>*</button>
      <button onClick={()=>click('/')}>/</button>
      <h1>{ans}</h1>
    </div>
  )
}

export default Simplecal
