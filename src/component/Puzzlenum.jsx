import React, {useState } from 'react'
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";

function Puzzlenum() {
    const [data1,setdata1]=useState([1,2,3,4,5,6,7,'',8]);
    const [result,setresult]=useState('');
    const btn = [...data1]
    const data = (no) =>{
        if(btn[0]==''){
           btn[0]=btn[no]
           btn[no]=''
        }
        if(btn[1]==''){
            btn[1]=btn[no]
            btn[no]=''
         }
         if(btn[2]==''){
            btn[2]=btn[no]
            btn[no]=''
         }
         if(btn[3]==''){
            btn[3]=btn[no]
            btn[no]=''
         }
         if(btn[4]==''){
            btn[4]=btn[no]
            btn[no]=''
         }
         if(btn[5]==''){
            btn[5]=btn[no]
            btn[no]=''
         }
         if(btn[6]==''){
            btn[6]=btn[no]
            btn[no]=''
         }
         if(btn[7]==''){
            btn[7]=btn[no]
            btn[no]=''
         }
         if(btn[8]==''){
            btn[8]=btn[no]
            btn[no]=''
         }
        setdata1(btn)
        win()
    }
    const win = () =>{
        if(btn[0]===1 && btn[1]===2 && btn[2]===3 && btn[3]===4 && btn[4]===5 && btn[5]===6 && btn[6]===7 && btn[7]===8 && btn[8]===''){
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
                    <input type="button" value={data1[0]} onClick={()=>data(0)} style={{ backgroundColor: data1[0] === '' ? '#B35914' : '#DCAC5D' }}/>
                    <input type="button" value={data1[1]} onClick={()=>data(1)} style={{ backgroundColor: data1[1] === '' ? '#B35914' : '#DCAC5D' }}/>
                    <input type="button" value={data1[2]} onClick={()=>data(2)} style={{ backgroundColor: data1[2] === '' ? '#B35914' : '#DCAC5D' }}/>
                    <input type="button" value={data1[3]} onClick={()=>data(3)} style={{ backgroundColor: data1[3] === '' ? '#B35914' : '#DCAC5D' }}/>
                    <input type="button" value={data1[4]} onClick={()=>data(4)} style={{ backgroundColor: data1[4] === '' ? '#B35914' : '#DCAC5D' }}/>
                    <input type="button" value={data1[5]} onClick={()=>data(5)} style={{ backgroundColor: data1[5] === '' ? '#B35914' : '#DCAC5D' }}/>
                    <input type="button" value={data1[6]} onClick={()=>data(6)} style={{ backgroundColor: data1[6] === '' ? '#B35914' : '#DCAC5D' }}/>
                    <input type="button" value={data1[7]} onClick={()=>data(7)} style={{ backgroundColor: data1[7] === '' ? '#B35914' : '#DCAC5D' }}/>
                    <input type="button" value={data1[8]} onClick={()=>data(8)} style={{ backgroundColor: data1[8] === '' ? '#B35914' : '#DCAC5D' }}/>
                </div>
                <h3>{result}</h3>
            </div>
        </div>
    )
}

export default Puzzlenum
