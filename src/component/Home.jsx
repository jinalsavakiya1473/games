import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home'>
      <div className='d-flex flex-wrap gap-5'>
        <Link to="/calculater"><button>Calculater</button></Link>
        <Link to="/tictac"><button>Tic Tac Toe</button></Link>
        <Link to="/tictacran"><button>Tic Tac Random</button></Link>  
      </div>
      <div className='d-flex flex-wrap gap-5'>
        <Link to="/numpuzz"><button>Number Puzzle</button></Link>
        <Link to="/ranpuzz"><button>Puzzle Random</button></Link>
        <Link to="/todo"><button>Todo List</button></Link>
      </div>
    </div>
  );
}

export default Home;
