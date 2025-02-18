// import logo from './logo.svg';
import React,{useReducer} from 'react';
import './App.css';
import UseState from './components/useState.js/UseState';
import ObjectUseState from './components/useState.js/ObjectUseState';
import ArrayUseState from './components/useState.js/ArrayUseState';
import ParentOne from './optimization/ParentOne';
import ChildOne from './optimization/ChildOne';
import GrandParent from './optimization/GrandParent';
// import Reduce2DataFetching from './components/Reduce2DataFetching';
// import Parent from './components/Parent';
// import UseMemoCounter from './components/UseMemoCounter';
// import InputFocus from './components/InputFocus';
// import HookTimer from './components/HookTimer';
// import DockTitle from './components/DockTitle';
// import DockTitleTwo from './components/DockTitleTwo';
// import CustomCounter from './components/CustomCounter';
// import CustomCounterTwo from './components/CustomCounterTwo';
// import CustomForm from './components/CustomForm';
// import ReducerA from './components/ReducerA';
// import ReducerB from './components/ReducerB';
// import ReducerC from './components/ReducerC';
// import ReduceDataFetching from './components/ReduceDataFetching';
// import ReduceThreeCounter from './components/ReduceThreeCounter';
// import ReducerTwoCounter from './components/ReduceTwoCounter ';
// import DataFetching from './components/DataFetching';
// import HooksMouse from './components/HooksMouse';
// import IintervalCounter from './components/IintervalCounter';
// import MouseContainer from './components/MouseContainer';
// import ClickCounter from './components/ClickCounter';
// import ClickTwoCounter from './components/ClickTwoCounter';
// import ComponentC from './components/ComponentC';
// import DemoFragment from './components/DemoFragment';
// import FormControll from './components/FormControll';
// import HooksCounter from './components/HooksCounter';
// import HooksCounterThree from './components/HooksCounterThree';
// import HooksCounterTwo from './components/HooksCounterTwo';
// import HoverCounter from './components/HoverCounter';
// import HoverTwoCounter from './components/HoverTwoCounter';
// import PortalDemo from './components/PortalDemo';
// import PropsCounter from './components/PropsCounter';
// import PureParent from './components/PureParent';
// import Table from './components/Table';
// import UseEffect from './components/UseEffect';
// import User from './components/User';
// import { UserProvider,ChannleProvider } from './components/UserContext';
// import ReducerCounter from './components/ReducerCounter';
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

// const initialValue = 0;

// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return initialValue;
//     default:
//       return state
//   }
// }

// export const CounterContext = React.createContext()


function App() {
  // const [count,dispatch] = useReducer(reducer,initialValue)
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

      {/* <UserProvider value='meekail'>
        <ChannleProvider value='aslam'>
          <ComponentC />
        </ChannleProvider>
      </UserProvider> */}

      {/* <HooksCounter /> */}
      {/* <HooksCounterTwo /> */}

      {/* <HooksCounterThree /> */}
      {/* <UseEffect /> */}

      {/* <HooksMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IintervalCounter /> */}

      {/* <DataFetching /> */}

      {/* <ReducerCounter /> */}

      {/* <ReducerTwoCounter /> */}
      {/* <ReduceThreeCounter /> */}
      
      {/* <div>count - {count}</div>
      <CounterContext.Provider value={{counter:count,countDispatch:dispatch}}>

        <ReducerA />
        <ReducerB />
        <ReducerC />
      </CounterContext.Provider> */}

      {/* <ReduceDataFetching /> */}
      {/* <Reduce2DataFetching /> */}
      {/* <Parent /> */}

      {/* <UseMemoCounter /> */}
      {/* <InputFocus /> */}
      {/* <HookTimer /> */}
      {/* <DockTitle /> */}
      {/* <DockTitleTwo /> */}  
      {/* <CustomCounter />
      <CustomCounterTwo /> */}

      {/* <CustomForm /> */}
      {/* <UseState /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <ParentOne>
        <ChildOne/>
      </ParentOne> */}
      <GrandParent />
    </div>
  );
}

export default App;
