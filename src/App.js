import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  function updateCount() {
    setCount(count + 1);
  }

  const array = [1, 2 ,3];
  
  return (
    <div>
      <h1>¡Hola, mundo!</h1>
      <p>Este es mi primer componente en React.</p>
      <button onClick={updateCount}>
        hiciste clic {count} veces
        {count > 10 ? <h1>uh tocaste 10 veces</h1> : null}
      </button>
      <div>
        {array.map(function(numero){
          return <p>El numero es: {numero}</p>
        })}
      </div>
    </div>
  );
}

export default App;
