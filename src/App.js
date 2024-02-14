import './App.css';
import { Bookform } from './Bookform';
function App() {
    function addBook(item){
        console.log("add book called");
    }
  return (
    <><Bookform onSubmit={addBook}/><div className="App">
          <h1>Hello</h1>
      </div></>
  );
}

export default App;
