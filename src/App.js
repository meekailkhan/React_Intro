// import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import ClickTwoCounter from './components/ClickTwoCounter';
import ComponentC from './components/ComponentC';
import DemoFragment from './components/DemoFragment';
import FormControll from './components/FormControll';
import HoverCounter from './components/HoverCounter';
import HoverTwoCounter from './components/HoverTwoCounter';
import PortalDemo from './components/PortalDemo';
import PropsCounter from './components/PropsCounter';
import PureParent from './components/PureParent';
import Table from './components/Table';
import User from './components/User';
import { UserProvider } from './components/UserContext';
// import NamList from './components/NamList';
// import UserGreeting from './components/UserGreeting';
// import ParentCompnent from './components/ParentCompnent';
// import FunctionClick from './components/FunctionClick';
// import Counter from './components/Counter';
// import Greet from './components/Greet';
// import Inline from './components/Inline';
// import Stylesheet from './components/Stylesheet';
// import Welcome from './components/Welcome';
// import Hello from './components/hello';
// import Message from './components/Message';

// import './myStyle.css'
// import style from './myStyle.module.css'
// const {success,font_xl} = style


function App() {
  return (
    <div className="App">
      {/* <Greet/> */}
      {/* <Greet firstName="meekail" lastName='aslam'/> */}
      {/* <Welcome name="meekail"/>
      <Welcome name="arbaaz"/>
      <Welcome name="mahir"/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <Hello name="meekail"><p>this is the child element</p></Hello>
      <Hello name="arbaaz"><button>this child btn</button></Hello>
      <Hello name="mahir"><pre>this is another child</pre></Hello> */}
      {/* <FunctionClick/> */}
      {/* <ParentCompnent/> */}
      {/* <UserGreeting/> */}
      {/* <NamList /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Inline /> */}
      {/* 
      <h1 className='error'>Error</h1>
      <h1 className={`${success} ${font_xl}`}>Success</h1> */}
      {/* <FormControll /> */}

      {/* <DemoFragment /> */}
      {/* <Table /> */}
      {/* <PortalDemo />       */}
      {/* <PureParent /> */}

      {/* <ClickCounter />
      <HoverCounter /> */}

      {/* <ClickTwoCounter />
      <HoverTwoCounter />
      <User isLoggedIn={(isLoggedIn)=> isLoggedIn ? 'meekail' : 'guest'}/> */}
{/*       
      <PropsCounter render={(count, incrementCounter) => {
        return <ClickTwoCounter count={count} incrementCounter={incrementCounter} />
      }} /> */}

      {/* <PropsCounter render={(count, incrementCounter) => {
        return <HoverTwoCounter count={count} incrementCounter={incrementCounter} />
      }} /> */}

      <UserProvider value='meekail'>
        <ComponentC />
      </UserProvider>

    </div>
  );
}

export default App;
