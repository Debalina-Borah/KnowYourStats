import logo from './logo.svg';
import { signInWithGoogle } from './firebase.utils';
import { auth } from './firebase.utils';

import './App.css';

function App() {

  const style = {
    border: "none",
    background: "transparent",
    color: "#61dafb",
    textDecoration: "underline",
    fontSize: "larger",
    margin: '10px'
  }

  function info() {
    window.alert('Username: ' + auth.currentUser.displayName)
    console.log(auth.currentUser.email)
  }

  function logout() {
    window.alert('Logged out')
    auth.signOut()
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Google Authentication with Firebase
        </p>
        <button onClick={signInWithGoogle} style={style}>Log in</button>
        <button onClick={info} style={style}>Current user details</button>
        <button onClick={logout} style={style}>Log out</button>
      </header>
    </div>
  );
}

export default App;
