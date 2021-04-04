import './App.css';
import Message from './Message.js'


function App() {
  return (
    <div className="App">
      <Message color='green' message='This color is green'/> 
     <Message color='red' message='This color is red'/>
      <Message color='blue' message='This color is blue'/>
       <Message color='black' message='This color is black'/>
    </div>
  );
}

export default App;
