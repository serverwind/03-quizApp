import {useState} from 'react';
import data from '../../data/questions.json';

export default function Question() {
  const [currentQ, setCurrentQ] = useState(0);

  function handleCurrentQ() {
    setCurrentQ(currentQ + 1);
  }

  return (
    <div>
      <div>{ data[currentQ].question }</div>
      <Answer question={data[currentQ].options} />
      <button onClick={handleCurrentQ}>Submit</button>
    </div>
  );
}

function Answer({question}) {
  return (
    question.map(( answer, i ) => (
      <div key={i}>{ answer }</div>
    ))
  )
}
