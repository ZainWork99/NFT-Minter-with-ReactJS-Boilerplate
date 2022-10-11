import './App.css';
import Minter from './Minter'
import { 
  BrowserRouter as Router
} from 'react-router-dom'
import Routes from './Routes/Routes'
function App() {
  return (
    <Router>

      <Routes />
    </Router>
  );
}

export default App;
