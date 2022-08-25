import './App.css';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <div className='text-area'>
        <div className='text'>
          <p>Olá vida,<br></br> para onde você deseja ir</p>
        </div>
        <div className='buttons'>
          <button onClick={() =>{window.location.replace('https://miju-love.vercel.app//texto')}}>Texto</button>
          <button onClick={() =>{window.location.replace('https://miju-love.vercel.app//fotos')}}>Fotos</button>
        </div>
      </div>
    </div>
  );
}

export default App;