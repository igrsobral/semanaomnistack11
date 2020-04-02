import React, {useState} from 'react';

import Header from './Header';

function App() {
  const[ counter, setCounter] = useState(0);

  //Array [valor, ]
  function increment(){
    ;
  }


  return (
  <Header>
    <Header> Contador: {counter}</Header>
    <button onClick={increment}>Incrementar</button>
  </Header>   
  );

}

export default App;
