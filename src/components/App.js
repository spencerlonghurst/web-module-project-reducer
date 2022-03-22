import React, { useReducer }  from 'react';
import reducer from '../reducers/index.js';
import { initialState } from '../reducers';

// import { addOne } from '../actions/index.js';
import { applyNumber } from '../actions/index.js';
import { changeOperation } from '../actions/index.js';
import { clearDisplay } from '../actions/index.js';
import { applyMemory } from '../actions/index.js';
import { operateMemory } from '../actions/index.js';



import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('this is the state:', state);

  const handleNumberClicks = number => {
    dispatch(applyNumber(number))
  }

  const handleOperationClick = operator => {
    dispatch(changeOperation(operator))
  }

  const handleClearClick = () => {
    dispatch(clearDisplay())
  }

  const handleApplyMemory = () => {
    dispatch(applyMemory())
  }

  const handleOperateMemory = currentValue => {
    dispatch(operateMemory(currentValue))
  }


  return (
   <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => handleApplyMemory()}/>
              <CalcButton value={"MR"} onClick={() => handleOperateMemory(state.total)}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleNumberClicks(1)}/> 
              <CalcButton value={2} onClick={() => handleNumberClicks(2)}/>
              <CalcButton value={3} onClick={() => handleNumberClicks(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleNumberClicks(4)}/>
              <CalcButton value={5} onClick={() => handleNumberClicks(5)}/>
              <CalcButton value={6} onClick={() => handleNumberClicks(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleNumberClicks(7)}/>
              <CalcButton value={8} onClick={() => handleNumberClicks(8)}/>
              <CalcButton value={9} onClick={() => handleNumberClicks(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() =>handleOperationClick('+')}/>
              <CalcButton value={"*"} onClick={() =>handleOperationClick('*')}/>
              <CalcButton value={"-"} onClick={() =>handleOperationClick('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClearClick()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
