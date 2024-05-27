import React, {useState } from 'react'
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";

function Puzzlenum() {
    const [btn1,setbtn1]=useState([3])
    const [btn2,setbtn2]=useState([2])
    const [btn3,setbtn3]=useState([1])
    const [btn4,setbtn4]=useState([6])
    const [btn5,setbtn5]=useState([5])
    const [btn6,setbtn6]=useState([''])
    const [btn7,setbtn7]=useState([4])
    const [btn8,setbtn8]=useState([8])
    const [btn9,setbtn9]=useState([7])
    const [result,setresult]=useState('')

    const data1=[...btn1]
    const data2=[...btn2]
    const data3=[...btn3]
    const data4=[...btn4]
    const data5=[...btn5]
    const data6=[...btn6]
    const data7=[...btn7]
    const data8=[...btn8]
    const data9=[...btn9]
    const game=()=>{
      
      if(data2[0]===''){
        data2[0]=data1[0]
        data1[0]=''
      }
      if(data4[0]===''){
        data4[0]=data1[0]
        data1[0]=''
      }

      
      setbtn1(data1)
      setbtn2(data2)
      setbtn4(data4)
      win()
    }

    const game1=()=>{
      if(data1[0]===''){
        data1[0]=data2[0]
        data2[0]=''
      }
      if(data3[0]===''){
        data3[0]=data2[0]
        data2[0]=''
      }
      if(data5[0]===''){
        data5[0]=data2[0]
        data2[0]=''
      }
      setbtn1(data1)
      setbtn2(data2)
      setbtn3(data3)
      setbtn5(data5)
      win()
    }
    const game2=()=>{
      if(data6[0]===''){
        data6[0]=data3[0]
        data3[0]=''
      }
      if(data2[0]===''){
        data2[0]=data3[0]
        data3[0]=''
      }
      setbtn6(data6)
      setbtn3(data3)
      setbtn2(data2)
      win()
    }

    const game3=()=>{
      if(data1[0]===''){
        data1[0]=data4[0]
        data4[0]=''
      }
      if(data5[0]===''){
        data5[0]=data4[0]
        data4[0]=''
      }
      if(data7[0]===''){
        data7[0]=data4[0]
        data4[0]=''
      }
      setbtn1(data1)
      setbtn4(data4)
      setbtn5(data5)
      setbtn7(data7)
      win()
    }
    const game4=()=>{
      if(data2[0]===''){
      data2[0]=data5[0]
      data5[0]=''
      }

      if(data4[0]===''){
        data4[0]=data5[0]
        data5[0]=''
      }

      if(data6[0]===''){
        data6[0]=data5[0]
        data5[0]=''
      }

      if(data8[0]===''){
        data8[0]=data5[0]
        data5[0]=''
      }
      setbtn5(data5)
      setbtn2(data2)
      setbtn4(data4)
      setbtn6(data6)
      setbtn8(data8)
      win()
    }
    
    const game5=()=>{
      if(data3[0]===''){
        data3[0]=data6[0]
        data6[0]=''
      }

      if(data5[0]===''){
        data5[0]=data6[0]
        data6[0]=''
      }

      if(data9[0]===''){
        data9[0]=data6[0]
        data6[0]=''
      }
      setbtn3(data3)
      setbtn6(data6)
      setbtn5(data5)
      setbtn9(data9)
      win()
    }

    const game6=()=>{
      if(data4[0]===''){
        data4[0]=data7[0]
        data7[0]=''
      }

      if(data8[0]===''){
        data8[0]=data7[0]
        data7[0]=''
      }
      setbtn4(data4)
      setbtn7(data7)
      setbtn8(data8)
      win()
    }

    const game7=()=>{
      if(data5[0]==='')
        {
          data5[0]=data8[0]
          data8[0]=''
        }

        if(data7[0]===''){
          data7[0]=data8[0]
          data8[0]=''
        }

        if(data9[0]===''){
          data9[0]=data8[0]
          data8[0]=''
        }
        setbtn5(data5)
        setbtn8(data8)
        setbtn7(data7)
        setbtn9(data9)
        win()
    }
    
    const game8=()=>{
      if(data6[0]===''){
        data6[0]=data9[0]
        data9[0]=''
      }
      if(data8[0]===''){
        data8[0]=data9[0]
        data9[0]=''
      }
      setbtn6(data6)
      setbtn9(data9)
      setbtn8(data8)
      win()
    }

    const win=()=>{
      if(data1[0]==='1' && data2[0]==='2' && data3[0]==='3' && data4[0]==='4' && data5[0]==='5' && data6[0]==='6' && data7[0]==='7' && data8[0]==='8' && data9[0]===''){
        setresult('You Winner....!')
      }
    }
    
    return (
        <div className='puzzle'>
            <Link to="/" className='left'><FaLongArrowAltLeft /></Link>
            <div className='puzz'>
                <div className="main">
                    <input type="button" value={btn1[0]} onClick={()=>{game(0)}}/>
                    <input type="button" value={btn2[0]} onClick={()=>{game1(0)}}/>
                    <input type="button" value={btn3[0]} onClick={()=>{game2(0)}}/>
                    <input type="button" value={btn4[0]} onClick={()=>{game3(0)}}/>
                    <input type="button" value={btn5[0]} onClick={()=>{game4(0)}}/>
                    <input type="button" value={btn6[0]} onClick={()=>{game5(0)}}/>
                    <input type="button" value={btn7[0]} onClick={()=>{game6(0)}}/>
                    <input type="button" value={btn8[0]} onClick={()=>{game7(0)}}/>
                    <input type="button" value={btn9[0]} onClick={()=>{game8(0)}} />
                </div>
                <h3>{result}</h3>
            </div>
        </div>
    )
}

export default Puzzlenum
