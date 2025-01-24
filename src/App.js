// import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter';
import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/hello';
// import Message from './components/Message';

function App() {
  return (
    <div className="App">
      {/* <Greet/> */}
      <Greet firstName="meekail" lastName='aslam'/>
      {/* <Welcome name="meekail"/>
      <Welcome name="arbaaz"/>
      <Welcome name="mahir"/> */}
      {/* <Message/> */}
      {/* <Counter/> */}

      {/* <Hello name="meekail"><p>this is the child element</p></Hello>
      <Hello name="arbaaz"><button>this child btn</button></Hello>
      <Hello name="mahir"><pre>this is another child</pre></Hello> */}

    </div>
  );
}

export default App;
