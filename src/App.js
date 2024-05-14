import './App.css';
import {useState} from "react";
import {clear} from "@testing-library/user-event/dist/clear";

function App() {
    const [total, setTotal] = useState("");

    const handleClick = (e) => {
        setTotal(total.concat(e.target.name));

    }

    const clear = () => {
        setTotal("");
    }

    function handleDelete() {
        setTotal(total.slice(0, -1));
    }

    const calculate = () => {

        try{
            setTotal(eval(total).toString());
        } catch {
            setTotal("Error")
        }

    }

  return (
    <div className="App">
      <h1>React JS - Calculator</h1>

      <div className="container">
        <form>
          <input type='text' value={total}/>
        </form>
          <div className="keypad">
              <button onClick={clear} id="clear" className="highLight">AC</button>
              <button onClick={handleDelete} className="highLight">DE</button>
              <button name="/" onClick={handleClick} className="highLight">&divide;</button>
              <button name="7" onClick={handleClick}>7</button>
              <button name="8" onClick={handleClick}>8</button>
              <button name="9" onClick={handleClick}>9</button>
              <button name="*" onClick={handleClick} className="highLight">&times;</button>
              <button name="4" onClick={handleClick}>4</button>
              <button name="5" onClick={handleClick}>5</button>
              <button name="6" onClick={handleClick}>6</button>
              <button name="-" onClick={handleClick} className="highLight">-</button>
              <button name="1" onClick={handleClick}>1</button>
              <button name="2" onClick={handleClick}>2</button>
              <button name="3" onClick={handleClick}>3</button>
              <button name="+" onClick={handleClick} className="highLight">+</button>
              <button name="0" onClick={handleClick}>0</button>
              <button name="." onClick={handleClick}>.</button>
              <button onClick={calculate} id="equal" className="highLight">=</button>
          </div>
      </div>
    </div>
  );
}

export default App;
