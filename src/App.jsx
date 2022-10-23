import { useState } from 'react'
import data from './data.js';
import Questions from './Questions.jsx';

function App() {
  return (
    <div className="root">
      <main>
        <div className="container">
          <h3>Questions And Answers About Login</h3>
          <section className="info">
            {data.map((question) =>{
              return(
                <Questions key={question.id} title={question.title} answer={question.answer}/>
              );})}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App
