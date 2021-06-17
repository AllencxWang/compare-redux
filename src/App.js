import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  const [todoCount, setTodoCount] = useState(0);
  return (
    <div className='App'>
      <Header todoCount={todoCount} />
      <Body setTodoCount={setTodoCount} />
      <Footer />
    </div>
  );
}

export default App;
