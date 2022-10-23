import './index.css';
import { useState } from 'react'

export default function Questions({title, answer}){
  const [show, setShow] = useState(false);
    
  function handleClick(){
    setShow(!show);
  }

  return(
    <article className="question">
        <header>
            <h4>{title}</h4>
            <button className="btn" onClick={handleClick}>{show? '-': '+'}</button>
        </header>
        <p>{show && answer}</p>
    </article>
  );
}