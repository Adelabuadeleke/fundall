import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signup from './Signup';
import SignupInput from './SignupInput';
import Login from './Login';
import Dashboard from './Dashboard';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router> 
        
       
        <Routes>
            <Route path="/" element={ <Signup />} /> 
            <Route path="/signup" element={ <SignupInput />} />
           
        </Routes>
            {!user ? (
              <Routes>
                 <Route path="/login" element={ <Login />} />
              </Routes>
            ):(
        <Routes>
            <>
            <Route path="/dashboard" element={ <Dashboard />} /> 
            </>
        </Routes>
        
       )}
      </Router> 
    </div>
  );
}

export default App;
