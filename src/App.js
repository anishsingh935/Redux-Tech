import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
 
import Section1 from "./section1/index";
import Section2 from "./section2/index";

import { store } from './Store';

function App() {
  return (
    <Provider store={store}>
      <div style={{ display:"flex" ,flexDirection:"row",justifyContent:"center",alignItems:"center",margin:"20% auto",gap:"30%"}}>
        <Section1/>
        <Section2/>
      </div>
    </Provider>
  );
}

export default App;
