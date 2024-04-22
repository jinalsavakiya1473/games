import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";

function Randompuzz() {
    const [data, setdata] = useState(['', '', '', '', '', '', '', '','']);
    const [result,setresult]=useState('');
    const demo = [...data];

    useEffect(() => {
      const randomizedNumbers = [];

      for (let i = 0; i < demo.length; i++) {
          while (true) {
              let x = Math.ceil(Math.random() * 9);
              if (!randomizedNumbers.includes(x)) {
                  randomizedNumbers.push(x);
                  break;
              }
          }
          setdata(randomizedNumbers);
      }
      for(var i=0 ; i< randomizedNumbers.length; i++){
         if(randomizedNumbers[i] === 9){
            randomizedNumbers[i] = '' ;
         }
      }
  }, []);

    const movedata = (val) => {
     if(demo[0] === ''){
      demo[0]=demo[val];
      demo[val]='';
     }
     if(demo[1] === ''){
      demo[1]=demo[val];
      demo[val]='';
     }
     if(demo[2] === ''){
      demo[2]=demo[val];
      demo[val]='';
     }
     if(demo[3] === ''){
      demo[3]=demo[val];
      demo[val]='';
     }
     if(demo[4] === ''){
      demo[4]=demo[val];
      demo[val]='';
     }
     if(demo[5] === ''){
      demo[5]=demo[val];
      demo[val]='';
     }
     if(demo[6] === ''){
      demo[6]=demo[val];
      demo[val]='';
     }
     if(demo[7] === ''){
      demo[7]=demo[val];
      demo[val]='';
     }
     if(demo[8] === ''){
      demo[8]=demo[val];
      demo[val]='';
     }
     setdata(demo);
     win();
    }
    const win = () => {
      if(demo[0]===1 && demo[1]===2 && demo[2]===3 && demo[3]===4 && demo[4]===5 && demo[5]===6 && demo[6]===7 && demo[7]===8 && demo[8]===''){
         setresult('you are win')
     }
     else{
         setresult('')
     }
    }

  return (
    <div>
      <Link to="/" className='left'><FaLongArrowAltLeft /></Link>
      <div className='puzz'>
            <div className="main">
                <input type="button" value={data[0]} onClick={()=>movedata(0)} style={{ backgroundColor: data[0] === '' ? '#B35914' : '#DCAC5D' }}/>
                <input type="button" value={data[1]} onClick={()=>movedata(1)} style={{ backgroundColor: data[1] === '' ? '#B35914' : '#DCAC5D' }}/>
                <input type="button" value={data[2]} onClick={()=>movedata(2)} style={{ backgroundColor: data[2] === '' ? '#B35914' : '#DCAC5D' }}/>
                <input type="button" value={data[3]} onClick={()=>movedata(3)} style={{ backgroundColor: data[3] === '' ? '#B35914' : '#DCAC5D' }}/>
                <input type="button" value={data[4]} onClick={()=>movedata(4)} style={{ backgroundColor: data[4] === '' ? '#B35914' : '#DCAC5D' }}/>
                <input type="button" value={data[5]} onClick={()=>movedata(5)} style={{ backgroundColor: data[5] === '' ? '#B35914' : '#DCAC5D' }}/>
                <input type="button" value={data[6]} onClick={()=>movedata(6)} style={{ backgroundColor: data[6] === '' ? '#B35914' : '#DCAC5D' }}/>
                <input type="button" value={data[7]} onClick={()=>movedata(7)} style={{ backgroundColor: data[7] === '' ? '#B35914' : '#DCAC5D' }}/>
                <input type="button" value={data[8]} onClick={()=>movedata(8)} style={{ backgroundColor: data[8] === '' ? '#B35914' : '#DCAC5D' }}/>
            </div>
            <h3>{result}</h3>
        </div>
    </div>
  )
}

export default Randompuzz
