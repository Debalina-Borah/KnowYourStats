import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import SignIn from './pages/SignIn'
import './App.css';
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {

  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signin' element={<SignIn />} />
        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
