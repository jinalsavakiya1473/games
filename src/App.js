import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculater from './component/Calculater';
import Tictac from './component/Tictac';
import Tictacran from './component/Tictacran';
import Puzzlenum from './component/Puzzlenum';
import Ranpuzz from './component/Ranpuzz';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Todo from './component/Todo';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='calculater' element={<Calculater />} />
        <Route path='tictac' element={<Tictac/>}></Route>
        <Route path='tictacran' element={<Tictacran/>}></Route>
        <Route path='numpuzz' element={<Puzzlenum/>}></Route>
        <Route path='ranpuzz' element={<Ranpuzz/>}></Route>
        <Route path='todo' element={<Todo/>}></Route>
      </Routes>
    </>
  );
}

export default App;
