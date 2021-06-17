import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import { useState } from 'react';
import { TodoCountContext } from './Context';

function App() {
  const [todoCount, setTodoCount] = useState(0);
  return (
    <div className='App'>
      <TodoCountContext.Provider value={{ todoCount, setTodoCount }}>
        <Header />
        <Body />
        <Footer />
      </TodoCountContext.Provider>
    </div>
  );
}

export default App;
