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

  return (
    <AuthContext.Provider value = {{ user, setUser }}>
      <div className="App">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />


              <Route element={<PrivateRoute />}>
                <Route path="/topics" element={<Topics />} />
              </Route>
            </Routes>
          </div>
      </div>
    </AuthContext.Provider>
   
  )
}

export default App;
