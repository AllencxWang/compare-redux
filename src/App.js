import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Header />
        <Body />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
