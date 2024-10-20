import Navigation from '../navigation/Navigation';

import { useState } from 'react';
import css from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
    </>
  );
}

export default App;
