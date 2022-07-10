import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from './bg.jpg'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <Header/>
    </div>
  );
}

export default App;
