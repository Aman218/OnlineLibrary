import Header from "./components/Header";
import Body from './components/Body'
import { Outlet } from "react-router-dom";
import {Provider} from 'react-redux';
import { store } from './utils/store.js';

function App(){
    return (
        <>
    
          <Header/>
          <Outlet/>
        
        </>
    )
}
export default App;