import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navi from './components/Navi';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  //const [user,setUser] = useState(null)
  const user = "User";

  return (
    <BrowserRouter>
    <div className="App">
      <Navi user={user}/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={user? <Navigate to="/"/>:<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
