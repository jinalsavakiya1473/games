import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";

function Tictac() {
    const [btn, setbtn] = useState(['', '', '', '', '', '', '', '', ''])
    const [player,setplayer]=useState(0);
    const [result,setresult]=useState('');
    const [winning,setwinning]=useState(0);
    const demo = [...btn];
    const tic = (n) => {

        if(demo[n] === ''){
            if(player%2 === 0){
                demo[n]='X';
            }
            else{
                demo[n]='O'
            }
            setplayer(player+1);
            tie();
            win(0,1,2,'X');
			win(3,4,5,'X');
			win(6,7,8,'X');
			win(0,3,6,'X');
			win(1,4,7,'X');
			win(2,5,8,'X');
			win(0,4,8,'X');
			win(2,4,6,'X');
			win(0,1,2,'O');
			win(3,4,5,'O');
			win(6,7,8,'O');
			win(0,3,6,'O');
			win(1,4,7,'O');
			win(2,5,8,'O');
			win(0,4,8,'O');
			win(2,4,6,'O');
        }
        setbtn(demo)
    }
    const win = (p1,p2,p3,sign) =>{
        if(demo[p1] === sign && demo[p2] === sign && demo[p3] === sign){
            setresult(sign +' is win');
            setwinning(winning+1);
        }
    }
    const tie = () =>{
        if(player==8 && winning==0){
            setresult('Match Tie')
        }
    }
    const reset = () =>{
       setbtn(['', '', '', '', '', '', '', '', '']);
       setresult('');
       setplayer(0);
       setwinning(0)
    }

    return (
        <div>
            <Link to="/" className='left'><FaLongArrowAltLeft /></Link>
            <div className='main-tic'>
                <h1 className='my-5'>TIC TAC TOE</h1>
                <div className="player">
                    <h2>player 1 : X</h2>
                    <h2>player 2 : O</h2>
                </div>
                <input type="button" id="reset" name Value="RESET" onClick={reset}/>
                <div className="main">
                    <input type="button" className="box" value={btn[0]} onClick={() => { tic(0) }} disabled={(result!=="") ? true : false} />
                    <input type="button" className="box" value={btn[1]} onClick={() => { tic(1) }} disabled={(result!=="") ? true : false}/>
                    <input type="button" className="box" value={btn[2]} onClick={() => { tic(2) }} disabled={(result!=="") ? true : false}/>
                    <input type="button" className="box" value={btn[3]} onClick={() => { tic(3) }} disabled={(result!=="") ? true : false}/>
                    <input type="button" className="box" value={btn[4]} onClick={() => { tic(4) }} disabled={(result!=="") ? true : false}/>
                    <input type="button" className="box" value={btn[5]} onClick={() => { tic(5) }} disabled={(result!=="") ? true : false}/>
                    <input type="button" className="box" value={btn[6]} onClick={() => { tic(6) }} disabled={(result!=="") ? true : false}/>
                    <input type="button" className="box" value={btn[7]} onClick={() => { tic(7) }} disabled={(result!=="") ? true : false}/>
                    <input type="button" className="box" value={btn[8]} onClick={() => { tic(8) }} disabled={(result!=="") ? true : false}/>
                </div>
                <h2>{result}</h2>
            </div>
        </div>
    )
}

export default Tictac
