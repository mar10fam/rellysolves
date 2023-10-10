import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/js/Sidebar';
import Home from './pages/js/Home';
import Login from './pages/js/Login';
import Profile from './pages/js/Profile';
import Topics from './pages/js/Topics';
import { AuthContext } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  const [ user, setUser ] = useState({});
  const [ profile, setProfile ] = useState({});

  return (
    <AuthContext.Provider value = {{ user, setUser, profile, setProfile}}>
      <div className="App">  
      { Object.keys(user).length !== 0 && <Sidebar /> }            
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route id="content" path="/" element={<Home />} />
            <Route id="content" path="/profile" element={<Profile />} />
            <Route id="content" path="/topics" element={<Topics />} />
          </Route>
          </Routes>
      </div>
    </AuthContext.Provider>
   
  )
}

export default App;
