import { useState } from "react";
import { useContext } from "react"
import { MyContext } from "../search/search"

const InputBar = () => {

  const { performRequest } = useContext(MyContext)

  //console.log(term)

    const [ inputVal, setInputVal ] = useState('')

    const handleInput = (e) => {
        setInputVal(e.target.value)
        //changeTerm(e.target.value)
    }

    const hadleSearch = (e) => {
        e.preventDefault()
        performRequest(inputVal)
    }

    
  return (
    <div className='input-group mb-3'>
      <input
        type='text'
        className='form-control'
        placeholder='Please, type something :)'
        aria-describedby='btn-search'
        onInput={handleInput}
        value={inputVal}
      />
      <button className='btn btn-primary' type='submit' id='btn-search' onClick={hadleSearch}>
        Search
      </button>
    </div>
  );
};

export default InputBar;
