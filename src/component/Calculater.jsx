import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";

function Calculater() {

  const [slide, setslide] = useState('');
  const [value1, setvalue1] = useState('');
  const [operator, setoperator] = useState('');
  const btn = (n) => {
    setslide(slide.concat(n.target.value))
  }
  const sign = (n) => {
    setvalue1(slide);
    setslide('');
    setoperator(n.target.value);
  }
  const equal = () => {
    if (operator == '+') {
      setslide(parseInt(value1) + parseInt(slide));
    }
    if (operator == '-') {
      setslide(parseInt(value1) - parseInt(slide));
    }
    if (operator == '*') {
      setslide(parseInt(value1) * parseInt(slide));
    }
    if (operator == '/') {
      setslide(parseInt(value1) / parseInt(slide));
    }
  }
  const clr = () => {
    setvalue1('');
    setslide('');
    setoperator('');
  }
  const cls = () => {
    setslide(slide.substr(0, slide.length - 1))
  }

  return (
    <div className='main-cal'>
      <Link to="/" className='left'><FaLongArrowAltLeft /></Link>
      <table width="380px" align="center" className="calculater" border={0}>
        <tbody>
          <tr>
            <td colSpan={2}><h1>CASIO</h1></td>
            <td align="right" colSpan={2}><p className="solar" /></td>
          </tr>
          <tr>
            <td colSpan={4} align="center"><input type="text" className="slide" value={slide} /></td>
          </tr>
          <tr>
            <td colSpan={4} align="center"><div className="border" /></td>
          </tr>
          <tr>
            <td align="center"><input type="button" className="btn_c btn_close" value={'CL'} onClick={clr} /></td>
            <td align="center"><input type="button" className="btn_c btn_close" value={'C'} onClick={cls} /></td>
            <td align="center"><input type="button" className="btn_c btn_sign" value={'/'} onClick={sign} /></td>
            <td align="center"><input type="button" className="btn_c clr btn_sign" value={'*'} onClick={sign} /></td>
          </tr>
          <tr>
            <td align="center"><input type="button" className="btn_c" value={7} onClick={btn} /></td>
            <td align="center"><input type="button" className="btn_c" value={8} onClick={btn} /></td>
            <td align="center"><input type="button" className="btn_c" value={9} onClick={btn} /></td>
            <td align="center"><input type="button" className="btn_c sign1 btn_sign" value={'-'} onClick={sign} /></td>
          </tr>
          <tr>
            <td align="center"><input type="button" className="btn_c" value={4} onClick={btn} /></td>
            <td align="center"><input type="button" className="btn_c" value={5} onClick={btn} /></td>
            <td align="center"><input type="button" className="btn_c" value={6} onClick={btn} /></td>
            <td align="center"><input type="button" className="btn_c sign1 btn_sign" value={'+'} onClick={sign} /></td>
          </tr>
          <tr>
            <td align="center"><input type="button" className="btn_c" value={1} onClick={btn} /></td>
            <td align="center"><input type="button" className="btn_c" value={2} onClick={btn} /></td>
            <td align="center"><input type="button" className="btn_c sign1" value={3} onClick={btn} /></td>
            <td align="center" rowSpan={2}><input type="button" value={'='} className="btn_long btn_sign" onClick={equal} /></td>
          </tr>
          <tr>
            <td align="center" className='pb-3' colSpan={2}><input type="button" className="btn_big" value={0} onClick={btn} /></td>
            <td align="center" className='pb-3'><input className="btn_c sign1" type="button" value={'.'} onClick={btn} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calculater
