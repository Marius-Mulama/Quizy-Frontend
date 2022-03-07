import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navi from './components/Navi';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  //const [user,setUser] = useState(null)
  const user = null;

  return (
    <BrowserRouter>
    <div className="App">
      <Navi user={user}/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={user? <Navigate to="/"/>:<Login/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
