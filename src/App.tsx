import { useCallback, useState } from 'react';
import './App.css';
import UseEffectComponent from './components/Timer/Timer';

function App() {
  const [showTimer, setShowTimer] = useState<boolean>(true);

  const toggleShowTimer = useCallback(() => {
    //setShowTimer(!showTimer)
    setShowTimer((prevShowTimer) => !prevShowTimer)
  }, [])

  return (
    <div className="App">
      {showTimer && <UseEffectComponent />}
      <button onClick={toggleShowTimer}>Toggle Timer</button>
    </div>
  );
}

export default App;
