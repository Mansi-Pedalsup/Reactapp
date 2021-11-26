import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 class='header'>Enter Your Linkedin Credentials</h3>
      <form class='label'>
        
  <label>
    Name <br/>
    <input type="text" name="name" className="input" /><br/>
  </label>
  <label>
    Password <br/>
    <input type="password" name="password" class="input" /><br/>
  </label><br/>
  <input type="submit" value="Submit" class="inputbutton" />

</form>
      </header>
    </div>
  );
}

export default App;
